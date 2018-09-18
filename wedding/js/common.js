document.addEventListener('DOMContentLoaded', () => {

	//slider
	let slides = document.querySelectorAll('.a-slide'),
		dots = document.querySelectorAll('.dot'),
		dotsContainer = document.querySelector('.slider-dots'),
		header = document.querySelector('.header'),
		slideIndex = 0,
		timerId;

	//auto-slider

	function startSlider(){//auto-slider
		for (let i = 0; i < slides.length; i++) {
       		slides[i].style.display = "none";  
       		dots[i].style.opacity = "0.5";  
	    };

	    slideIndex++;

	    if (slideIndex > slides.length) {slideIndex = 1} ;   
	    slides[slideIndex-1].style.display = "flex";
	    dots[slideIndex-1].style.opacity = "1";

	    timerId = setTimeout(startSlider, 3000);

	};

	function showSlides() {//start slider
		timerId = setTimeout(startSlider, 5);
	};

	showSlides();

	//click-slider

	dotsContainer.addEventListener('click', (e) => {

		let target = e.target;

		if (target.classList.contains('dot')){

			clearTimeout(timerId);

			let arr = Array.from(dots),
				num = arr.indexOf(target);

			for (let i = 0; i < dots.length; i++) {
	       		dots[i].style.opacity = "0.5";
	       		slides[i].style.display = "none";   
		    };
		    
			target.style.opacity = "1";
			slides[num].style.display = "flex";
			slideIndex = num;
			
			timerId = setTimeout(showSlides, 5);

		}

	});

	//slider end


	//modal

	//enter modal


	let buttons = document.querySelectorAll('.button'),
		enterOverlay = document.querySelector('.overlay'),
		modalContainer = document.querySelector('.modal-container'),
		modalPopup = document.querySelectorAll('.modal-popup'),
		modals = document.querySelectorAll('.modal');

	function showEnterOverlay() {
		enterOverlay.style.display = 'flex';
	}

	buttons[0].addEventListener('click', showEnterOverlay);
	buttons[11].addEventListener('click', showEnterOverlay);


	//prices modal


	let	pricesOverlay = document.querySelector('.js-overlay-thank-you'),
		pricing = document.querySelector('.pricing'),
		pricingBtn = pricing.querySelectorAll('.button'),
		radioBtn = pricesOverlay.querySelectorAll('input[type="radio"]');

	function showPricesOverlay(e) {
		let target = e.target;

		if (target.classList.contains('pricing-block__button')) {
			
			pricesOverlay.style.display = 'flex';
			for (let i = 0; i < pricingBtn.length; i++) {
				if (pricingBtn[i] === target) {
					radioBtn[i].checked = true;
				}
			}
		}
	}

	pricing.addEventListener('click', showPricesOverlay);


	modalContainer.addEventListener('click', function(e) {
		let target = e.target;

		for (let i = 0; i < modals.length; i++) {
			if (modals[i].style.display === 'flex') {
				if (target.classList.contains('popup-close') || !modalPopup[i].contains(target)) {
					modals[i].style.display = 'none';
				}
			}			
		}		
	});


	//form mask


	function checkInput(e){

		let target = e.target;

		for (let i = 0; i < modals.length; i++) {

			if (modals[i].style.display === 'flex') {
				let enterFormInputs = modals[i].querySelectorAll('.popup-form-box-text');

				for (let i = 0; i < enterFormInputs.length; i++) {

					if (target.classList.contains('popup-form-box-text__name')) {
						target.value = target.value.match(/[а-яё]+/ig);
					}

					else if (target.classList.contains('popup-form-box-text__phone')) {
						let x = target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
						target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
					}
				}
			}
		}	
	}

	modalContainer.addEventListener('input', checkInput);		

	//modal end


	//scroll

	let nav = document.querySelectorAll('nav');

	function scrollToAnchor(e) {
		
		let target = e.target;
			

		if (e.target.tagName === "A") {
			let scrollSpeed = 0.2;

			e.preventDefault();
			let anchor = target.href.replace(/.*(#.*)/, '$1'),
				coords = document.querySelector(anchor).getBoundingClientRect().top,
				offsetTop = window.pageYOffset,
				start  = null;

			let tick = (now) => {
				if (start === null) start = now;

				let progress = now - start,
  					position = (coords < 0 ? Math.max(offsetTop - progress/scrollSpeed, offsetTop + coords) : Math.min(offsetTop + progress/scrollSpeed, offsetTop + coords));
  				
  				window.scrollTo(0,position);

				if (position != coords + offsetTop) {
					requestAnimationFrame(tick);
				} 
			};

			requestAnimationFrame(tick);
		}
	}

	nav[0].addEventListener('click', scrollToAnchor);
	nav[1].addEventListener('click', scrollToAnchor);

	// scroll end


	//ajax


	let enterForm = document.querySelectorAll('.popup-form_form'),
		groupForm = document.querySelector('.form-group');

	function sendAjaxRequest(e) {
		e.preventDefault();
		let messageBlock = document.querySelector('.js-overlay-order'),
			input = this.getElementsByTagName('input'),
			messageText = messageBlock.querySelector('.popup-form-header');

		let formData = new FormData(this);
			
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

		postData(formData)
			.then(() => {
				messageBlock.style.display = 'flex';
				messageText.innerHTML = 'Ожидание ответа от сервера. Это может занять некоторое время';
				
			})	
			.then(() => {
				setTimeout(() => {
					if (e.target.classList.contains('enter-form')) {
						messageText.innerHTML = 'Регистрация прошла успешно!';
					}	
					else if (e.target.classList.contains('price-form') || e.target.classList.contains('form-group')) {
						messageText.innerHTML = 'Спасибо за обращение! <br> Наш консультант свяжется с Вами в течение 5 минут.';
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
			.then(clearInput)


	}

	enterForm[0].addEventListener('submit', sendAjaxRequest);
	enterForm[1].addEventListener('submit', sendAjaxRequest);
	groupForm.addEventListener('submit', sendAjaxRequest);


	//AJAX end


	//video


	let	videoContainer = document.querySelector('.video-container');

	videoContainer.addEventListener('click', () => {
		videoContainer.innerHTML = '<iframe class="youtube" src="https://www.youtube.com/embed/q_th_D4VHC0?autoplay=1" frameborder="0" allowfullscreen style="width:655px; height:403px;"></iframe>'
	});


	//video end


	//redirect 


	let buttonRedirect = document.querySelector('.button__big');
	
	buttonRedirect.addEventListener('click', () => {
		window.location = 'site-builder.php';
	});


	//redirect end
})