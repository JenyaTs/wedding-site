function backgroundModal() {
 	let imagesContainer = document.querySelector('.builder1'),
		builderImages = imagesContainer.querySelectorAll('.minimized'),
		popupContent = document.querySelector('.popup-overlay'),
		popupImg = popupContent.querySelector('img');

	imagesContainer.addEventListener('click', (e) => {

		let target = e.target;
		if (target.tagName === 'IMG') {
			popupContent.style.display = 'block';		
			popupImg.src = target.src;
			popupImg.style.transform = 'scale(2)';
		}

	});

	popupContent.addEventListener('click', (e) => {
		if (e.target.classList.contains('close') || e.target.tagName !== 'IMG') {
			popupContent.style.display = 'none';
			popupImg.style.transform = 'scale(1)';
		}
	});
 } 

export default backgroundModal;



