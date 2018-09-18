import menuControl from './parts/MenuControl.js';
import addGuest from './parts/AddGuest.js';
import backgroundModal from './parts/BGModal.js';
import bookWishes from './parts/BookWishes.js';
import invitations from './parts/Invitations.js';
import videoWidget from './parts/VideoWidget.js';
import guestBook from './parts/GuestBook.js';
import letter from './parts/Letter.js';
import map from './parts/maps.js';

window.addEventListener('DOMContentLoaded', () => {
	
	menuControl();

	if (window.location.href.match(/.+guest-list\.php/ig)) {
		addGuest();
	}

	if (window.location.href.match(/.+site-builder\.php/ig)) {
		backgroundModal();
	}

	if (window.location.href.match(/.+book-wishes\.php/ig)) {
		bookWishes();
	}

	if (window.location.href.match(/.+invitation\.php/ig)) {
		invitations();
	}

	if (window.location.href.match(/.+video-widget\.php/ig)) {
		videoWidget();
	}

	if (window.location.href.match(/.+photo-guests\.php/ig)) {
		guestBook();
	}

	if (window.location.href.match(/.+letter-guests\.php/ig)) {
		letter();
	}

	if (window.location.href.match(/.+location\.php/ig)) {
		map();
	}
		
			
});