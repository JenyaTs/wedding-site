function modal() {
	let buttons = document.querySelectorAll('.button'),
		enterOverlay = document.querySelector('.overlay'),
		modalContainer = document.querySelector('.modal-container'),
		modalPopup = document.querySelectorAll('.modal-popup'),
		modals = document.querySelectorAll('.modal'),
		groupForm = document.querySelector('.form-group'),
		groupFormInput = groupForm.querySelector('.form-box-text');

		console.log(groupFormInput);

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

		if (target.classList.contains('form-box-text__name')) {
			target.value = target.value.match(/[а-яё]+/ig);
		}

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
	groupFormInput.addEventListener('input', checkInput);	
};

export default modal;