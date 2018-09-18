function scroll() {

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

};

export default scroll;