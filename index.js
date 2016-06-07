var MapboxClient = require('mapbox/lib/services/datasets');
var dataset = 'cip0lqsk4001s7nlwogm8rzeo';
var DATASETS_BASE = 'https://api.mapbox.com/datasets/v1/planemad/' + dataset + '/';
var mapboxAccessDatasetToken = 'sk.eyJ1IjoicGxhbmVtYWQiLCJhIjoiY2lvdHNnd2xmMDBjb3VvbThmaXlsbnd5dCJ9.7Ui7o2K3U6flUzDGvYNZJw';
var mapbox = new MapboxClient(mapboxAccessDatasetToken);

var reviewer;
var _tmp = {};

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


// Layer for review markers
var overlayDataSource = new mapboxgl.GeoJSONSource({
    data: {}
});

var overlayData = {
    'id': 'overlayData',
    'type': 'circle',
    'source': 'overlayDataSource',
    'interactive': true,
    'layout': {
        visibility: 'visible'
    },
    'paint': {
        'circle-radius': 15,
        'circle-color': '#5deb5e',
        'circle-blur': .9
    }
};

// Map ready
map.on('style.load', function(e) {


    map.addSource('overlayDataSource', overlayDataSource);
    map.addLayer(overlayData);


    // inspectMapFeature(['water'], )

    map.on('click', function(e) {



    });

});
