$(document).ready(function() {

	// Maps
    function init() {
      var mapOptions = {
            center: new google.maps.LatLng(51.671660, 39.233082),
            zoom: 13,
            gestureHandling: 'auto',
            fullscreenControl: false,
            zoomControl: true,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            draggable : true,
            clickableIcons: true,
            // styles: [
            //   {
            //     "elementType": "geometry",
            //     "stylers": [
            //       {
            //         "color": "#f5f5f5"
            //       }
            //     ]
            //   },
            //   {
            //     "elementType": "labels.icon",
            //     "stylers": [
            //       {
            //         "visibility": "off"
            //       }
            //     ]
            //   },
            //   {
            //     "elementType": "labels.text.fill",
            //     "stylers": [
            //       {
            //         "color": "#616161"
            //       }
            //     ]
            //   },
            //   {
            //     "elementType": "labels.text.stroke",
            //     "stylers": [
            //       {
            //         "color": "#f5f5f5"
            //       }
            //     ]
            //   },
            //   {
            //     "featureType": "administrative.land_parcel",
            //     "elementType": "labels.text.fill",
            //     "stylers": [
            //       {
            //         "color": "#bdbdbd"
            //       }
            //     ]
            //   },
            //   {
            //     "featureType": "poi",
            //     "elementType": "geometry",
            //     "stylers": [
            //       {
            //         "color": "#eeeeee"
            //       }
            //     ]
            //   },
            //   {
            //     "featureType": "poi",
            //     "elementType": "labels.text.fill",
            //     "stylers": [
            //       {
            //         "color": "#757575"
            //       }
            //     ]
            //   },
            //   {
            //     "featureType": "poi.park",
            //     "elementType": "geometry",
            //     "stylers": [
            //       {
            //         "color": "#e5e5e5"
            //       }
            //     ]
            //   },
            //   {
            //     "featureType": "poi.park",
            //     "elementType": "labels.text.fill",
            //     "stylers": [
            //       {
            //         "color": "#9e9e9e"
            //       }
            //     ]
            //   },
            //   {
            //     "featureType": "road",
            //     "elementType": "geometry",
            //     "stylers": [
            //       {
            //         "color": "#ffffff"
            //       }
            //     ]
            //   },
            //   {
            //     "featureType": "road.arterial",
            //     "elementType": "labels.text.fill",
            //     "stylers": [
            //       {
            //         "color": "#757575"
            //       }
            //     ]
            //   },
            //   {
            //     "featureType": "road.highway",
            //     "elementType": "geometry",
            //     "stylers": [
            //       {
            //         "color": "#dadada"
            //       }
            //     ]
            //   },
            //   {
            //     "featureType": "road.highway",
            //     "elementType": "labels.text.fill",
            //     "stylers": [
            //       {
            //         "color": "#616161"
            //       }
            //     ]
            //   },
            //   {
            //     "featureType": "road.local",
            //     "elementType": "labels.text.fill",
            //     "stylers": [
            //       {
            //         "color": "#9e9e9e"
            //       }
            //     ]
            //   },
            //   {
            //     "featureType": "transit.line",
            //     "elementType": "geometry",
            //     "stylers": [
            //       {
            //         "color": "#e5e5e5"
            //       }
            //     ]
            //   },
            //   {
            //     "featureType": "transit.station",
            //     "elementType": "geometry",
            //     "stylers": [
            //       {
            //         "color": "#eeeeee"
            //       }
            //     ]
            //   },
            //   {
            //     "featureType": "water",
            //     "elementType": "geometry",
            //     "stylers": [
            //       {
            //         "color": "#c9c9c9"
            //       }
            //     ]
            //   },
            //   {
            //     "featureType": "water",
            //     "elementType": "labels.text.fill",
            //     "stylers": [
            //       {
            //         "color": "#9e9e9e"
            //       }
            //     ]
            //   }
            // ],
            zoomControlOptions: {
              position: google.maps.ControlPosition.RIGHT_CENTER
            },
            mapTypeId: google.maps.MapTypeId.ROADMAP,
          },

          mapElement = document.getElementById('departments__map'),
          map = new google.maps.Map(mapElement, mapOptions),
              
          image = 'img/icons/insur__marker.svg',

          marker = new google.maps.Marker({
              position: {lat: 51.671855, lng: 39.199909},
              map: map,
              icon: image
          }),

          marker2 = new google.maps.Marker({
              position: {lat: 51.672547, lng: 39.253012},
              map: map,
              icon: image
          });

          marker3 = new google.maps.Marker({
              position: {lat: 51.675347, lng: 39.208704},
              map: map,
              icon: image
          });
    };
    init();

    $('.insurance__btn').click(function() {
        $('.hover.hidden').removeClass('hidden');
        $( this ).addClass('hidden')
    });

});