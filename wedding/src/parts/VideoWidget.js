function videoWidget() {

	let	videoContainer = document.querySelector('.video-container'),
		button = document.querySelector('.button__big'),
		input = document.querySelector('.form-location-box__text');

	videoContainer.addEventListener('click', () => {
		videoContainer.innerHTML = '<iframe class="youtube" src="https://www.youtube.com/embed/q_th_D4VHC0?autoplay=1" frameborder="0" allowfullscreen style="width:655px; height:403px;"></iframe>';
	});

	button.addEventListener('click', (e) => {
		e.preventDefault();
		if (input.value == '' || input.value.trim() == '') return;

		let url = input.value;

		// let newUrl = url.match( /(https:\/\/w{3}.youtube\.com\/)(watch\?v=)(.*)/gi);//более точная регулярка
		let newUrl = url.replace( /(.*)(watch\?v=)(.*)/gi, '$1embed/$3');
		
		videoContainer.innerHTML = '<iframe class="youtube" src="' + newUrl + '?autoplay=1" frameborder="0" allowfullscreen style="width:655px; height:403px;"></iframe>';
	});

}; 

export default videoWidget;