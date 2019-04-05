var wms_layers = [];

        var lyr_Google_0 = new ol.layer.Tile({
            'title': 'Google',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href="">Google Maps</a>',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}&s=Ga'
            })
        });var format_parkings_kazan_1 = new ol.format.GeoJSON();
var features_parkings_kazan_1 = format_parkings_kazan_1.readFeatures(json_parkings_kazan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parkings_kazan_1 = new ol.source.Vector({
    attributions: '<a href="http://geoalert.io"><img src="http://geoalert.io/img/geoalert_card.png" width="50px"/></a>',
});
jsonSource_parkings_kazan_1.addFeatures(features_parkings_kazan_1);var lyr_parkings_kazan_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_parkings_kazan_1, 
                style: style_parkings_kazan_1,
                title: '<img src="styles/legend/parkings_kazan_1.png" /> parkings_kazan'
            });var format_cars_kazan_2 = new ol.format.GeoJSON();
var features_cars_kazan_2 = format_cars_kazan_2.readFeatures(json_cars_kazan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cars_kazan_2 = new ol.source.Vector({
    attributions: '<a href="http://geoalert.io"><img src="http://geoalert.io/img/geoalert_card.png" width="50px"/></a>',
});
jsonSource_cars_kazan_2.addFeatures(features_cars_kazan_2);var lyr_cars_kazan_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cars_kazan_2, 
                style: style_cars_kazan_2,
                title: '<img src="styles/legend/cars_kazan_2.png" /> cars_kazan'
            });var format_park_cars_fill_3 = new ol.format.GeoJSON();
var features_park_cars_fill_3 = format_park_cars_fill_3.readFeatures(json_park_cars_fill_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_park_cars_fill_3 = new ol.source.Vector({
    attributions: '<a href="http://geoalert.io"><img src="http://geoalert.io/img/geoalert_card.png" width="50px"/></a>',
});
jsonSource_park_cars_fill_3.addFeatures(features_park_cars_fill_3);var lyr_park_cars_fill_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_park_cars_fill_3, 
                style: style_park_cars_fill_3,
    title: 'park_cars_fill<br />\
    <img src="styles/legend/park_cars_fill_3_0.png" />  0 - 14 <br />\
    <img src="styles/legend/park_cars_fill_3_1.png" />  14 - 28 <br />\
    <img src="styles/legend/park_cars_fill_3_2.png" />  28 - 42 <br />\
    <img src="styles/legend/park_cars_fill_3_3.png" />  42 - 56 <br />\
    <img src="styles/legend/park_cars_fill_3_4.png" />  36 - 56 <br />\
    <img src="styles/legend/park_cars_fill_3_5.png" />  56 - 70 <br />'
        });

lyr_Google_0.setVisible(true);lyr_parkings_kazan_1.setVisible(true);lyr_cars_kazan_2.setVisible(true);lyr_park_cars_fill_3.setVisible(true);
var layersList = [lyr_Google_0,lyr_parkings_kazan_1,lyr_cars_kazan_2,lyr_park_cars_fill_3];
lyr_parkings_kazan_1.set('fieldAliases', {'area': 'area', });
lyr_cars_kazan_2.set('fieldAliases', {'area': 'area', });
lyr_park_cars_fill_3.set('fieldAliases', {'area': 'area', 'area_count': 'area_count', 'sumarea_cars': 'sumarea_cars', 'fill': 'fill', });
lyr_parkings_kazan_1.set('fieldImages', {'area': '', });
lyr_cars_kazan_2.set('fieldImages', {'area': '', });
lyr_park_cars_fill_3.set('fieldImages', {'area': 'no label', 'area_count': 'no label', 'sumarea_cars': 'no label', 'fill': 'Range', });
lyr_parkings_kazan_1.set('fieldLabels', {'area': 'no label', });
lyr_cars_kazan_2.set('fieldLabels', {'area': 'no label', });
lyr_park_cars_fill_3.set('fieldLabels', {'area': 'no label', 'area_count': 'no label', 'sumarea_cars': 'no label', 'fill': 'header label', });
lyr_park_cars_fill_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});