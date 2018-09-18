document.addEventListener('DOMContentLoaded', () => {

	
	//menu


	function menuHighLighter() {
		let mainNav = document.getElementById('navigation'),
			mainNavElem = mainNav.querySelectorAll('a');

		for (let i = 0; i < mainNavElem.length; i++) {
			if (window.location.href == mainNavElem[i].href) {
				mainNavElem[i].style.borderLeft = '4px solid #fa7a95';
				mainNavElem[i].style.backgroundColor = '#e2e2e2';
			}
				
		} 
	}
	menuHighLighter();


	//menu end


});