function redirect() {

	let buttonRedirect = document.querySelector('.button__big');
	
	buttonRedirect.addEventListener('click', () => {
		window.location = 'site-builder.php';
	});

};

export default redirect;