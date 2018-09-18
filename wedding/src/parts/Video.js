function video() {

	let	videoContainer = document.querySelector('.video-container');

	videoContainer.addEventListener('click', () => {
		videoContainer.innerHTML = '<iframe class="youtube" src="https://www.youtube.com/embed/q_th_D4VHC0?autoplay=1" frameborder="0" allowfullscreen style="width:655px; height:403px;"></iframe>'
	});

};

export default video;