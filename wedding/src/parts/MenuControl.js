function menuControl() {
	let mainNav = document.querySelector('.navigation'),
		mainNavElem = mainNav.querySelectorAll('a');

	function menuHighLighter() {
		

		for (let i = 0; i < mainNavElem.length; i++) {
			if (window.location.href == mainNavElem[i].href) {
				mainNavElem[i].style.borderLeft = '4px solid #fa7a95';
				mainNavElem[i].style.backgroundColor = '#e2e2e2';
			}				
		} 
	}
	menuHighLighter();

	let hamburger = document.querySelector('.header-main__link'),
		toolsList = document.querySelector('.navigation__link'),
		menuContainer = document.querySelector('.header-main-menu');

	hamburger.addEventListener('click', () => {

		if(mainNav.classList.contains('navigation_active')) {
			mainNav.classList.remove('navigation_active');
		};

		menuContainer.classList.toggle('header-main-menu_active');
		hamburger.classList.toggle('header-main__link_active');
	});

	toolsList.addEventListener('click', () => {

		if(menuContainer.classList.contains('header-main-menu_active')) {
			menuContainer.classList.remove('header-main-menu_active');
			hamburger.classList.remove('header-main__link_active');
		};

		mainNav.classList.toggle('navigation_active');
		toolsList.classList.toggle('navigation__link_active');
	});

	document.addEventListener('resize', () =>  {

		if (window.innerWidth > 768) {
			menuContainer.classList.remove('header-main-menu_active');
			hamburger.classList.remove('header-main__link_active');
			mainNav.classList.remove('navigation_active');
		}
		
	});

	document.addEventListener('click', (e) =>  {

		let target = e.target;

		if (target === mainNav || 
			mainNav.contains(target) || 
			target === toolsList || 
			toolsList.contains(target) || 
			target === menuContainer || 
			menuContainer.contains(target) || 
			target === hamburger || 
			hamburger.contains(target)) {

			return;
		}

		else if (!target === mainNav || 
			!mainNav.contains(target) || 
			!target === toolsList || 
			!toolsList.contains(target) || 
			!target === menuContainer || 
			!menuContainer.contains(target) || 
			!target === hamburger || 
			!hamburger.contains(target)) {

			mainNav.classList.remove('navigation_active');
			toolsList.classList.remove('navigation__link_active');
			hamburger.classList.remove('header-main__link_active');
			menuContainer.classList.remove('header-main-menu_active');
		}		
	});
};

export default menuControl;