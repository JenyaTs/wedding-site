function ajax() {

	let enterForm = document.querySelectorAll('.popup-form_form'),
		groupForm = document.querySelector('.form-group'),
		buttons = document.querySelectorAll('.popup-form__btn'),
		modal = document.querySelector('.js-overlay-thank-you'),
		enterBtn = document.querySelectorAll('.popup-form__btn_2');

	function sendAjaxRequest(e) {
		e.preventDefault();
		let messageBlock = document.querySelector('.js-overlay-order'),
			input,
			data,
			messageText = messageBlock.querySelector('.popup-form-header');


		data = new FormData(this);

		
			
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
			for (let i = 0; i < input.length; i++) {
				input[i].value = '';
			}
		}

		postData(data)
			.then(() => {
				messageBlock.style.display = 'flex';
				messageText.innerHTML = 'Ожидание ответа от сервера. Это может занять некоторое время';				
			})	
			.then(() => {
				setTimeout(() => {
					if (e.target === enterForm[0]) {
						messageText.innerHTML = 'Регистрация прошла успешно!';
						clearInput();
					}	
					else if (e.target === enterForm[1] || e.target === groupForm) {
						messageText.innerHTML = 'Спасибо за обращение! <br> Наш консультант свяжется с Вами в течение 5 минут.';
						clearInput();
					}
				}, 2500);
				
				setTimeout(() => {
					messageBlock.style.display = 'none';
				}, 5500);
			})
			.catch(() => {
				setTimeout(() => {
					messageText.innerHTML = 'Повторите попытку позже';
				}, 2500);
			})

	}

	enterForm[0].addEventListener('submit', sendAjaxRequest);
	enterForm[1].addEventListener('submit', sendAjaxRequest);
	groupForm.addEventListener('submit', sendAjaxRequest);
	enterBtn[0].addEventListener('click', (e) => {
		e.preventDefault();
	});
	enterBtn[1].addEventListener('click', (e) => {
		e.preventDefault();
		modal.style.display = 'none';
	});


};

export default ajax;