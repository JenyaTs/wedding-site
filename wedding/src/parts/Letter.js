function letter() {

	let form = document.querySelector('.form-signature'),
		message = form.querySelectorAll('.form-box-text__signature'),
		label = form.querySelector('.button__big'),
		input = form.querySelectorAll('.form-album-box__text'),
		obj = {},
		newValue = document.getElementById('upload'),
		targetInput = document.getElementById('signature'),
		dragZone = document.getElementById('signature-photo');	

	input[0].disabled = 'true';
	input[1].disabled = 'true';

	form.addEventListener('submit', sendAjaxRequest);

	let messageBlock = document.querySelector('.js-overlay-order'),
		messageText = messageBlock.querySelector('.popup-form-header');

		function sendAjaxRequest(e) {
		e.preventDefault();

		obj.header = message[0].value;
		obj.main = message[1].value;
		let data = JSON.stringify(obj);
			
		//AJAX
		function postData(data) {
			return new Promise(function(resolve, reject) {
				let request = new XMLHttpRequest();

				request.open("POST", "server.php");

				request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

				request.onreadystatechange = function() {
					if (request.readyState < 4) {
						resolve();
					} 
					else if (request.readyState == 4) {
						if (request.status == 200 && request.status < 300) {
							resolve();
						}
						else {
							reject();
						}
					}
				}
				request.send(data);
			}) 
		}

		function clearInput() {
			for (let i = 0; i < message.length; i++) {
				message[i].value = '';
				input[i].value = '';
			}
		}

		postData(data)
			.then(() => {
				messageBlock.style.display = 'flex';
				messageBlock.style.background = '#e2e2e2';
				messageText.innerHTML = 'Ожидание ответа от сервера. Это может занять некоторое время';				
			})	
			.then(() => {
				setTimeout(() => {
					messageText.innerHTML = 'Фотография успешно отправлена!';				
				}, 2500);
				
				setTimeout(() => {
					messageBlock.style.display = 'none';
				}, 5500);
			})
			.catch(() => {
				setTimeout(() => {
					messageText.innerHTML =  'Попробуйте позже!';
				}, 2500);
			})
			.then(clearInput)
	}

	newValue.addEventListener('change', function () {
	  let file = this.files[0];
	  let reader = new FileReader();
	  reader.onloadend = function() {
	    obj.image = reader.result;
	    
	  }
	  reader.readAsDataURL(file);
	});

	label.addEventListener('change', () => {		
		targetInput.value = newValue.value.slice(12);
		dragZone.value = newValue.value.slice(12);
	});


	//drag image


	['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  		dragZone.addEventListener(eventName, preventDefaults)
	});

	function preventDefaults(e) {
	    e.preventDefault()
	    e.stopPropagation()
	};

	['dragenter', 'dragover'].forEach(eventName => {
	    dragZone.addEventListener(eventName, highlight)
	});

	['dragleave', 'drop'].forEach(eventName => {
	    dragZone.addEventListener(eventName, unhighlight)
	})
	function highlight(e) {
	    dragZone.style.border = "1px solid green"
	}
	function unhighlight(e) {
	    dragZone.style.border = 'none';
	}

	dragZone.addEventListener('drop', handleDrop);

	function handleDrop(e) {
	  	let dt = e.dataTransfer;
	  	let files = dt.files;

	  	targetInput.value = files[0].name;
		dragZone.value = files[0].name;
	}
};

export default letter;