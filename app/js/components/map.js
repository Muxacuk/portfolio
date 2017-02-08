export function initMap() {
	var map, 
		marker,
		image,
		stylesArray,
		styledMap;

	map = new google.maps.Map(document.getElementById('map'), {
	center: {lat: 48.4476198, lng: 35.057252},
	zoom: 14
	});

	image = {
		url: 'pictures/map_marker.svg',
		size: new google.maps.Size(35, 45),
		origin: new google.maps.Point(0, 0),
		anchor: new google.maps.Point(10, 45)
	};
	
	marker = new google.maps.Marker({
		map: map,
		// Define the place with a location, and a query string.
		place: {
		  location: {lat: 48.4477370, lng: 35.057763},
		  query: 'Гагарина 57',
		},
		animation: google.maps.Animation.DROP,
		icon: image,
		position: {lat: 48.4477370, lng: 35.057763}
	}); 

	stylesArray = [
		{
			"featureType": "water",
			"elementType": "geometry.fill",
			"stylers": [
				{ "hue": "#004cd1" },
				{ "color": "#004cd1" }
			]
		},
		{
			"featureType": "road",
			"elementType": "geometry.fill",
			"stylers": [
				{ "hue": "#1100ff" },
				{ "color": "#aaaaaa" }
			]
		}
	]

	styledMap = new google.maps.StyledMapType(stylesArray,{name: "Styled Map"});
	map.mapTypes.set('map_style', styledMap);
	map.setMapTypeId('map_style');
}
 