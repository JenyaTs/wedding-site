function changeMap() {

	let googleBtn = document.querySelector('.location-button__map-1'),
        yandexBtn = document.querySelector('.location-button__map-2'),
        googleMap = document.getElementById('map'),
        yandexMap = document.getElementById('yandex');

    googleBtn.classList.add('book-active-tab');

    googleBtn.addEventListener('click', (e) => {
        googleBtn.classList.add('book-active-tab');
        yandexBtn.classList.remove('book-active-tab');
        googleMap.style.display = 'block';
        yandexMap.style.display = 'none';
    });

    yandexBtn.addEventListener('click', (e) => {
        googleBtn.classList.remove('book-active-tab');
        yandexBtn.classList.add('book-active-tab');
        googleMap.style.display = 'none';
        yandexMap.style.display = 'block';
    });

}

export default changeMap;