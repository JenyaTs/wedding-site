function bookWishes() {

	let gratsButton = document.querySelector('.book1'),
		wishButton = document.querySelector('.book2'),
		clearAll = document.querySelector('.choice__btn-4'),
		sliderContainer = document.querySelector('.book-block'),
		gratsContainer = document.querySelector('.grats-container'),
		gratsContainerProfile = gratsContainer.querySelector('.book-block__item-1'),
		wishContainer = document.querySelector('.wish-container'),
		wishContainerProfile = wishContainer.querySelector('.book-block__item-2'),
		wishSlides = document.querySelectorAll('.a-slide-book'),
		wishForm = document.querySelector('.wish-form'),
		gratsForm = document.querySelector('.grats-form'),
		gratsDotsContainer = document.querySelector('.grats-dots-container'),
		gratsDotsItem = gratsDotsContainer.querySelector('.grats-dot'),
		gratsDotsItems = gratsDotsContainer.querySelectorAll('.grats-dot'),
		wishDotsContainer = document.querySelector('.wish-dots-container'),
		wishDotsItem = wishDotsContainer.querySelector('.wish-dot'),
		wishDotsItems = wishDotsContainer.querySelectorAll('.wish-dot'),
		backgroundSlideIndex = 0, 
		wishesSlideIndex = 0,
		gratsSlideIndex = 0,
		timerId;

	function changeTab(e) {

		clearTimeout(timerId);

		let dots;

		if (e.target === gratsButton) {
			dots = gratsDotsContainer.querySelectorAll('.grats-dot');
			gratsButton.classList.add('book-active-tab');
			wishButton.classList.remove('book-active-tab');
			gratsDotsContainer.style.display = 'flex';
			wishDotsContainer.style.display = 'none';
			
			wishesSlideIndex = 0;
			gratsSlideIndex = 0;
			timerId = setTimeout(startSlider, 5);
		} 

		else if (e.target === wishButton) {
			dots = wishDotsContainer.querySelectorAll('.wish-dot');
			wishButton.classList.add('book-active-tab');
			gratsButton.classList.remove('book-active-tab');
			gratsDotsContainer.style.display = 'none';
			wishDotsContainer.style.display = 'flex';

			wishesSlideIndex = 0;
			gratsSlideIndex = 0;
			timerId = setTimeout(startSlider, 5);
		}
	}

	gratsButton.addEventListener('click', changeTab);
	wishButton.addEventListener('click', changeTab);


	function sendWish(e) {
		e.preventDefault();
		let inputs = this.querySelectorAll('.form-box-text'),
			newDot = gratsDotsItem.cloneNode(true),
			newDot2 = wishDotsItem.cloneNode(true),
			newWish,//будущая новая карточка поздравления/пожелания
			dots;//кнопки-переключатели

		//в зависимости от активного таба копировать нужный элемент(поздравление или пожелание) 
		this.classList.contains('grats-form') ?
		newWish = gratsContainerProfile.cloneNode(true) :
		newWish = wishContainerProfile.cloneNode(true);
		
		//получить и перезаписать заголовки и текст поздравления
		let	newWishHeader = newWish.querySelector('.book-block__title'),
			newWishBody = newWish.querySelector('.book-block__subtitle');
			
		newWishHeader.innerHTML = inputs[1].value;
		newWishBody.innerHTML = inputs[2].value;

		//в зависимости от таба - скрыть все элементы не этого таба и добавить новую карточку в нужный контейнер
		if(this.classList.contains('grats-form')) {	
			gratsContainer.appendChild(newWish);
			gratsDotsContainer.appendChild(newDot);
			
			if (wishButton.classList.contains('book-active-tab')) {
				let containerItems = gratsContainer.querySelectorAll('.book-block__item'),
					dots = gratsDotsContainer.querySelectorAll('.grats-dot');

				for (let i = 0; i < containerItems.length; i++) {
					containerItems[i].style.display = 'none';
					dots[i].style.backgroundColor = '#fff';
				}
			}
			else if (gratsButton.classList.contains('book-active-tab')) {
				let containerItems = gratsContainer.querySelectorAll('.book-block__item'),
					dots = gratsDotsContainer.querySelectorAll('.grats-dot'),
					wishContainerItems = wishContainer.querySelectorAll('.book-block__item');		
				for (let i = 0; i < wishContainerItems.length; i++){
					wishContainerItems[i].style.display = 'none';
				};


				for (let i = 0; i < containerItems.length; i++) {
					containerItems[i].style.display = 'none';
					dots[i].style.backgroundColor = '#fff';
				}
				newWish.style.display = 'flex';
				newDot.style.backgroundColor = '#fa7a95';
				clearTimeout(timerId);
				timerId = setTimeout(startSlider, 5);
			}
			
		}

		else if(this.classList.contains('wish-form')) {
			wishContainer.appendChild(newWish);
			wishDotsContainer.appendChild(newDot2);
			

			if (gratsButton.classList.contains('book-active-tab')) {
				let containerItems = wishContainer.querySelectorAll('.book-block__item'),
					dots = wishDotsContainer.querySelectorAll('.wish-dot');
				
				for (let i = 0; i < containerItems.length; i++) {
					containerItems[i].style.display = 'none';
					dots[i].style.backgroundColor = '#fff';
				}
			}

			else if (wishButton.classList.contains('book-active-tab')) {
				let containerItems = wishContainer.querySelectorAll('.book-block__item'),
					dots = wishDotsContainer.querySelectorAll('.wish-dot'),
					gratsContainerItems = gratsContainer.querySelectorAll('.book-block__item');
				for (let i = 0; i < gratsContainerItems.length; i++){
					gratsContainerItems[i].style.display = 'none';
				};

				wishContainer.appendChild(newWish);
				wishDotsContainer.appendChild(newDot2);

				for (let i = 0; i < containerItems.length; i++) {
					containerItems[i].style.display = 'none';
					dots[i].style.backgroundColor = '#fff';
				}
				newWish.style.display = 'flex';	
				newDot2.style.backgroundColor = '#fa7a95';	
				clearTimeout(timerId);
				timerId = setTimeout(startSlider, 5);		
			}
		}
		
	};

	wishForm.addEventListener('submit', sendWish);
	gratsForm.addEventListener('submit', sendWish);



	function startSlider(){//auto-slider
		let gratsContainerItems = gratsContainer.querySelectorAll('.book-block__item'),
		    wishContainerItems = wishContainer.querySelectorAll('.book-block__item');

		for (let i = 0; i < wishSlides.length; i++) {
	   		wishSlides[i].style.display = "none";  
	    };

	    backgroundSlideIndex++;

	    if (backgroundSlideIndex > wishSlides.length) {backgroundSlideIndex = 1}; 
	    wishSlides[backgroundSlideIndex-1].style.display = "flex";

	    if (gratsButton.classList.contains('book-active-tab')) {

	    	let gratsSlides = gratsContainer.querySelectorAll('.book-block__item');
	    	let dots = gratsDotsContainer.querySelectorAll('.grats-dot');

	    	for (let i = 0; i < wishContainerItems.length; i++){
				wishContainerItems[i].style.display = 'none';
			};

	    	for (let i = 0; i < gratsSlides.length; i++) {
		   		gratsSlides[i].style.display = "none";  
		   		dots[i].style.backgroundColor = "#fff";  
		    };

		    gratsSlideIndex++;

		    if (gratsSlideIndex > gratsSlides.length) {gratsSlideIndex = 1}; 
		    gratsSlides[gratsSlideIndex-1].style.display = "flex";
		    dots[gratsSlideIndex-1].style.backgroundColor = "#fa7a95";  
	    }

	    else if (wishButton.classList.contains('book-active-tab')) {

	    	let wishSlide = wishContainer.querySelectorAll('.book-block__item');
	    	let dots = wishDotsContainer.querySelectorAll('.wish-dot');

	    	for (let i = 0; i < gratsContainerItems.length; i++){
				gratsContainerItems[i].style.display = 'none';
			};

	    	for (let i = 0; i < wishSlide.length; i++) {
		   		wishSlide[i].style.display = "none";  
		   		dots[i].style.backgroundColor = "#fff"; 
		    };

		    wishesSlideIndex++;

		    if (wishesSlideIndex > wishSlide.length) {wishesSlideIndex = 1};   
		    wishSlide[wishesSlideIndex-1].style.display = "flex";
		    dots[wishesSlideIndex-1].style.backgroundColor = "#fa7a95"; 
	    }

	    timerId = setTimeout(startSlider, 3000);

	};

	function showSlides() {//start slider
		timerId = setTimeout(startSlider, 5);
	};
	showSlides();


	//dot click


	let dotsContainer = document.querySelector('.book-ellips');
		

	function changeSlides(e) {
				
		let target = e.target,
			num;

		if (target.classList.contains('dot')) {
			clearTimeout(timerId);
			let dots,
				slides;

			target.parentElement === wishDotsContainer ? 
			dots = wishDotsContainer.querySelectorAll('.dot') : 
			dots = gratsDotsContainer.querySelectorAll('.dot');

			gratsButton.classList.contains('book-active-tab') ? 
			slides = gratsContainer.querySelectorAll('.book-block__item-1') : 
			slides = wishContainer.querySelectorAll('.book-block__item-2');

			let arr = Array.from(dots);
			num = arr.indexOf(target);

			for (let i = 0; i < dots.length; i++){

				dots[i].style.backgroundColor = "#fff";
				slides[i].style.display = 'none';

				if (target === dots[i]) {
					dots[i].style.backgroundColor = "#fa7a95";
					slides[i].style.display = 'flex';
				}
			}
			wishesSlideIndex = num;
			gratsSlideIndex = num;
			timerId = setTimeout(startSlider, 5);
		}	
	};

	dotsContainer.addEventListener('click', changeSlides);


	//arrows


	sliderContainer.addEventListener('click', (e) => {

		clearTimeout(timerId);
		let target = e.target,
			dots;

		if (target.classList.contains('slider-book-arrow-right')) {
			timerId = setTimeout(startSlider, 5);
		}

		if (target.classList.contains('slider-book-arrow-left')) {

			gratsButton.classList.contains('book-active-tab') ? 
			(gratsSlideIndex -= 2,
			dots = gratsDotsContainer.querySelectorAll('.dot')) : 
			(wishesSlideIndex -= 2,
			dots = wishDotsContainer.querySelectorAll('.dot'));

			if (gratsSlideIndex < 0) {
				gratsSlideIndex = dots.length-1;
			}

			if (wishesSlideIndex < 0) {
				wishesSlideIndex = dots.length-1;
			}
			timerId = setTimeout(startSlider, 5);
		}
	});


	//clear button


	clearAll.addEventListener('click', () => {
		clearTimeout(timerId);
		let dots, 
			slides;

		gratsButton.classList.contains('book-active-tab') ? 
		(slides = gratsContainer.querySelectorAll('.book-block__item-1'),
		dots = gratsDotsContainer.querySelectorAll('.dot')) : 
		(slides = wishContainer.querySelectorAll('.book-block__item-2'),
		dots = wishDotsContainer.querySelectorAll('.dot'));

		if (gratsButton.classList.contains('book-active-tab')) {
			for (let i = 1; i < slides.length; i++) {
				gratsContainer.removeChild(slides[i]);
				gratsDotsContainer.removeChild(dots[i]);
			}
		} else if (wishButton.classList.contains('book-active-tab')) {
			for (let i = 1; i < slides.length; i++) {
				wishContainer.removeChild(slides[i]);
				wishDotsContainer.removeChild(dots[i]);
			}
		}
		timerId = setTimeout(startSlider, 5);
	});
	

};

export default bookWishes; 






