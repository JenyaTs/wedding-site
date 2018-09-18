    //google map


  	let map,
        marker;

    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 50.010, lng: 36.230},
            zoom: 15
        }),
        marker = new google.maps.Marker({
            position: {lat: 50.010, lng: 36.230},
            map: map,
            draggable : true
        });
        let searchBox = new google.maps.places.SearchBox(document.getElementById('adress'));
        let geocoder = new google.maps.Geocoder();

        document.querySelector('.button__big').addEventListener('click', function(e) {
            e.preventDefault();
            geocodeAddress(geocoder, map);
        });
        
    };


    function geocodeAddress(geocoder, resultsMap) {
        let address = document.querySelector('.form-location-box__text').value;
        geocoder.geocode({'address': address}, function(results, status) {
            if (status === 'OK') {
                resultsMap.setCenter(results[0].geometry.location);

                if (marker) marker.setMap(null);

                    marker = new google.maps.Marker({
                    map: resultsMap,
                    position: results[0].geometry.location
                });
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
              }
        })
    };

     //yandexMap

    ymaps.ready(function () {
        let myMap = new ymaps.Map("yandex", {
            center: [50.010, 36.230],
            zoom: 10,
        });
        let myPlacemark = new ymaps.Placemark(
            [50.010, 36.230],
        );
        myMap.controls.remove('searchControl');
        myMap.geoObjects.add(myPlacemark);

        document.querySelector('.button__big').addEventListener('click', function(e) {
            e.preventDefault();
            let myGeocoder = ymaps.geocode(document.querySelector('.form-location-box__text').value);

            myGeocoder.then(
                function (res) {
                    myMap.setCenter(res.geoObjects.get(0).geometry.getCoordinates());
                    if (myPlacemark) myMap.geoObjects.remove(myPlacemark);
                    let newPlacemark = new ymaps.Placemark(res.geoObjects.get(0).geometry.getCoordinates());
                    myMap.geoObjects.add(newPlacemark);
                },
                function (err) {
                    alert('Ошибка');
                }
            );
            
        });
        
    });
