function addGuest() {
	let addGuestForm = document.querySelector('.form-addguest'),
		addGuestButton = addGuestForm.querySelector('.button__big'),
		addGuestInputs = addGuestForm.querySelectorAll('.form-addguest-box__text'),		
		guestsList = document.querySelector('.builder3'),
		guestsColumn = guestsList.querySelectorAll('.builder3-block'),
		guestCount = 0,
		removeGuests = document.querySelector('.choice__btn-4');

	function checkInputs(e) {
		e.target.value = e.target.value.match(/[а-яё]+/ig);
	}

	addGuestInputs[0].addEventListener('input', checkInputs);
	addGuestInputs[1].addEventListener('input', checkInputs);

	addGuestButton.addEventListener('click', (e) => {
		e.preventDefault();

		if (typeof(addGuestInputs[0].value) === 'string' && typeof(addGuestInputs[1].value) === 'string' && addGuestInputs[1].value.trim() !== '' && addGuestInputs[0].value.trim() !== '') {
			let guestName = `${addGuestInputs[0].value} ${addGuestInputs[1].value}`;

				if (guestCount >= guestsColumn.length){
					guestCount = 0;
				}
				guestsColumn[guestCount].innerHTML += `<p>${guestName}</p>`;

			guestCount++;
		}
		else return;		
	});

	removeGuests.addEventListener('click', () => {
		for (let i = 0; i < guestsColumn.length; i++) {
			guestsColumn[i].innerHTML = '';
		}
	});
};

export default addGuest;
