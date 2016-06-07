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
                obj_id: invalidAreas[0].properties.obj_id
            });

            var popup = new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(josm_button)
                .addTo(map);
        }

    });

});
