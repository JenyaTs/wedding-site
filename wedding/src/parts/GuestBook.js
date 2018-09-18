function guestBook() {

	let leftArrow = document.querySelector('.slider-albumguest-arrow-left'),
		rightArrow = document.querySelector('.slider-albumguest-arrow-right'),
		imageBox = document.querySelector('.image-box-guest-s'),
		imageBoxPhotos = imageBox.querySelectorAll('span'),
		left = 0;

	leftArrow.addEventListener('click', () => {
		left = left - 360;
		if (left < (imageBoxPhotos.length-3) * -360) left = 0;
		imageBox.style.left = left + 'px';  
	});
	rightArrow.addEventListener('click', () => {
		left = left + 360;
		if (left > 0) left = (imageBoxPhotos.length-3) * -360;
		imageBox.style.left = left + 'px'; 
	});

 };

	



export default guestBook;