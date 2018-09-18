function slider() {

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

};

export default slider;