mapboxgl.accessToken = 'pk.eyJ1IjoicGxhbmVtYWQiLCJhIjoiemdYSVVLRSJ9.g3lbg_eN0kztmsfIPxa9MQ';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/planemad/cip3y0ycc000jcjnk7bj3abvt', //stylesheet location
    // center: [77.64, 12.98], // starting position
    // zoom: 16, // starting zoom
    hash: true,
    attributionControl: false
});

map.addControl(new mapboxgl.Navigation());



// Map ready
map.on('style.load', function(e) {



    map.on('click', function(e) {



    });

});
