(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
function initMap() {
    var map, marker, image, stylesArray, styledMap;
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 48.4476198, lng: 35.057252 },
        zoom: 14
    });
    image = {
        url: '/pictures/map_marker.svg',
        size: new google.maps.Size(35, 45),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(10, 45)
    };
    marker = new google.maps.Marker({
        map: map,
        place: {
            location: { lat: 48.4477370, lng: 35.057763 },
            query: 'Гагарина 57',
        },
        animation: google.maps.Animation.DROP,
        icon: image,
        position: { lat: 48.4477370, lng: 35.057763 }
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
    ];
    styledMap = new google.maps.StyledMapType(stylesArray, { name: "Styled Map" });
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');
}
exports.initMap = initMap;
},{}],2:[function(require,module,exports){
"use strict";
var map_1 = require('./components/map');
map_1.initMap();
},{"./components/map":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0cy9jb21wb25lbnRzL21hcC50cyIsInRzL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FDQUE7SUFDQyxJQUFJLEdBQVEsRUFBRSxNQUFXLEVBQUMsS0FBVSxFQUFDLFdBQWdCLEVBQUMsU0FBYyxDQUFDO0lBRXJFLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDMUQsTUFBTSxFQUFFLEVBQUMsR0FBRyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFDO1FBQ3pDLElBQUksRUFBRSxFQUFFO0tBQ1AsQ0FBQyxDQUFDO0lBRUgsS0FBSyxHQUFHO1FBQ1AsR0FBRyxFQUFFLDBCQUEwQjtRQUMvQixJQUFJLEVBQUUsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ2xDLE1BQU0sRUFBRSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbkMsTUFBTSxFQUFFLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQztLQUNyQyxDQUFDO0lBRUYsTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDL0IsR0FBRyxFQUFFLEdBQUc7UUFFUixLQUFLLEVBQUU7WUFDTCxRQUFRLEVBQUUsRUFBQyxHQUFHLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUM7WUFDM0MsS0FBSyxFQUFFLGFBQWE7U0FDckI7UUFDRCxTQUFTLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSTtRQUNyQyxJQUFJLEVBQUUsS0FBSztRQUNYLFFBQVEsRUFBRSxFQUFDLEdBQUcsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBQztLQUMzQyxDQUFDLENBQUM7SUFFSCxXQUFXLEdBQUc7UUFDYjtZQUNDLGFBQWEsRUFBRSxPQUFPO1lBQ3RCLGFBQWEsRUFBRSxlQUFlO1lBQzlCLFNBQVMsRUFBRTtnQkFDVixFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7Z0JBQ3BCLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRTthQUN0QjtTQUNEO1FBQ0Q7WUFDQyxhQUFhLEVBQUUsTUFBTTtZQUNyQixhQUFhLEVBQUUsZUFBZTtZQUM5QixTQUFTLEVBQUU7Z0JBQ1YsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO2dCQUNwQixFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUU7YUFDdEI7U0FDRDtLQUNELENBQUE7SUFFRCxTQUFTLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUMsRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFDLENBQUMsQ0FBQztJQUM1RSxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDekMsR0FBRyxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUMvQixDQUFDO0FBakRlLGVBQU8sVUFpRHRCLENBQUE7OztBQ2pERCxvQkFBd0Isa0JBQWtCLENBQUMsQ0FBQTtBQUUzQyxhQUFPLEVBQUUsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJleHBvcnQgZnVuY3Rpb24gaW5pdE1hcCgpIHtcclxuXHR2YXIgbWFwOiBhbnksIG1hcmtlcjogYW55LGltYWdlOiBhbnksc3R5bGVzQXJyYXk6IGFueSxzdHlsZWRNYXA6IGFueTtcclxuXHJcblx0bWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksIHtcclxuXHRjZW50ZXI6IHtsYXQ6IDQ4LjQ0NzYxOTgsIGxuZzogMzUuMDU3MjUyfSxcclxuXHR6b29tOiAxNFxyXG5cdH0pO1xyXG5cclxuXHRpbWFnZSA9IHtcclxuXHRcdHVybDogJy9waWN0dXJlcy9tYXBfbWFya2VyLnN2ZycsXHJcblx0XHRzaXplOiBuZXcgZ29vZ2xlLm1hcHMuU2l6ZSgzNSwgNDUpLFxyXG5cdFx0b3JpZ2luOiBuZXcgZ29vZ2xlLm1hcHMuUG9pbnQoMCwgMCksXHJcblx0XHRhbmNob3I6IG5ldyBnb29nbGUubWFwcy5Qb2ludCgxMCwgNDUpXHJcblx0fTtcclxuXHRcclxuXHRtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuXHRcdG1hcDogbWFwLFxyXG5cdFx0Ly8gRGVmaW5lIHRoZSBwbGFjZSB3aXRoIGEgbG9jYXRpb24sIGFuZCBhIHF1ZXJ5IHN0cmluZy5cclxuXHRcdHBsYWNlOiB7XHJcblx0XHQgIGxvY2F0aW9uOiB7bGF0OiA0OC40NDc3MzcwLCBsbmc6IDM1LjA1Nzc2M30sXHJcblx0XHQgIHF1ZXJ5OiAn0JPQsNCz0LDRgNC40L3QsCA1NycsXHJcblx0XHR9LFxyXG5cdFx0YW5pbWF0aW9uOiBnb29nbGUubWFwcy5BbmltYXRpb24uRFJPUCxcclxuXHRcdGljb246IGltYWdlLFxyXG5cdFx0cG9zaXRpb246IHtsYXQ6IDQ4LjQ0NzczNzAsIGxuZzogMzUuMDU3NzYzfVxyXG5cdH0pOyBcclxuXHJcblx0c3R5bGVzQXJyYXkgPSBbXHJcblx0XHR7XHJcblx0XHRcdFwiZmVhdHVyZVR5cGVcIjogXCJ3YXRlclwiLFxyXG5cdFx0XHRcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuZmlsbFwiLFxyXG5cdFx0XHRcInN0eWxlcnNcIjogW1xyXG5cdFx0XHRcdHsgXCJodWVcIjogXCIjMDA0Y2QxXCIgfSxcclxuXHRcdFx0XHR7IFwiY29sb3JcIjogXCIjMDA0Y2QxXCIgfVxyXG5cdFx0XHRdXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcImZlYXR1cmVUeXBlXCI6IFwicm9hZFwiLFxyXG5cdFx0XHRcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuZmlsbFwiLFxyXG5cdFx0XHRcInN0eWxlcnNcIjogW1xyXG5cdFx0XHRcdHsgXCJodWVcIjogXCIjMTEwMGZmXCIgfSxcclxuXHRcdFx0XHR7IFwiY29sb3JcIjogXCIjYWFhYWFhXCIgfVxyXG5cdFx0XHRdXHJcblx0XHR9XHJcblx0XVxyXG5cclxuXHRzdHlsZWRNYXAgPSBuZXcgZ29vZ2xlLm1hcHMuU3R5bGVkTWFwVHlwZShzdHlsZXNBcnJheSx7bmFtZTogXCJTdHlsZWQgTWFwXCJ9KTtcclxuXHRtYXAubWFwVHlwZXMuc2V0KCdtYXBfc3R5bGUnLCBzdHlsZWRNYXApO1xyXG5cdG1hcC5zZXRNYXBUeXBlSWQoJ21hcF9zdHlsZScpO1xyXG59XHJcbiAiLCJpbXBvcnQgeyBpbml0TWFwIH0gZnJvbSAnLi9jb21wb25lbnRzL21hcCc7XHJcblxyXG5pbml0TWFwKCk7XHJcbiJdfQ==
