(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

        var invalidAreas = queryLayerFeatures(map, e.point, {
            layers: ['invalid-osm-areas', 'invalid-osm-areas-problem'],
            radius: 10
        });

        console.log(invalidAreas);

        if (invalidAreas) {

            var josm_button = createHTML('open-obj-in-josm-button', {
                obj_type: invalidAreas[0].properties.obj_type,
                obj_id: invalidAreas[0].properties.obj_id,
                select_node_ids: [invalidAreas[0].properties.id1, invalidAreas[0].properties.id2]
            });

            popupHTML = '<h3>' + invalidAreas[0].properties.problem + '</h3>' + josm_button;

            var popup = new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(popupHTML)
                .addTo(map);
        }

    });

});

},{}]},{},[1]);
