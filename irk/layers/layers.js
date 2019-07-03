var wms_layers = [];

        var lyr_Maxar = new ol.layer.Tile({
            'title': 'Geoeye Maxar',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: 'MAXAR 2019',
                url: 'https://rasters.aeronetlab.space/api/v0/cogs/tiles/{z}/{x}/{y}.png?uri=s3://cogs/29473/cog.tif'
            })
        });
        var lyr_Mapboxstreets_0 = new ol.layer.Tile({
            'title': 'Mapboxstreets_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'https://b.tiles.mapbox.com/v4/mapbox.streets-basic/{z}/{x}/{y}@2x.png?access_token=pk.eyJ1Ijoia29zbW9zbmlta2lydSIsImEiOiJjaWhxMHNlZDgwNGFldHBtMjdyejQ3YTJ3In0.3UAAWcIBabrbUhHwmp1WjA'
            })
        });
        var lyr_DGPremium_1 = new ol.layer.Tile({
            'title': 'DGPremium_1',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'https://a.tiles.mapbox.com/v4/digitalglobe.316c9a2e/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZGlnaXRhbGdsb2JlIiwiYSI6ImNqZGFrZ2c2dzFlMWgyd2x0ZHdmMDB6NzYifQ.9Pl3XOO82ArX94fHV289Pg'
            })
        });var format_Birusa_2 = new ol.format.GeoJSON();
var features_Birusa_2 = format_Birusa_2.readFeatures(json_Birusa_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Birusa_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Birusa_2.addFeatures(features_Birusa_2);var lyr_Birusa_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Birusa_2, 
                style: style_Birusa_2,
                title: '<img src="styles/legend/Birusa_2.png" /> Birusa'
            });var format_Shumsky_3 = new ol.format.GeoJSON();
var features_Shumsky_3 = format_Shumsky_3.readFeatures(json_Shumsky_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Shumsky_3 = new ol.source.Vector({
    attributions: '<a href="http://geoalert.io"><img src="http://geoalert.io/img/geoalert_card.png" width="50px"/></a>',
});
jsonSource_Shumsky_3.addFeatures(features_Shumsky_3);var lyr_Shumsky_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Shumsky_3, 
                style: style_Shumsky_3,
                title: '<img src="styles/legend/Shumsky_3.png" /> Shumsky'
            });var format_Tulun_4 = new ol.format.GeoJSON();
var features_Tulun_4 = format_Tulun_4.readFeatures(json_Tulun_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tulun_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Tulun_4.addFeatures(features_Tulun_4);var lyr_Tulun_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tulun_4, 
                style: style_Tulun_4,
                title: '<img src="styles/legend/Tulun_4.png" /> Tulun'
            });var format_Nizhneudinsk_5 = new ol.format.GeoJSON();
var features_Nizhneudinsk_5 = format_Nizhneudinsk_5.readFeatures(json_Nizhneudinsk_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nizhneudinsk_5 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Nizhneudinsk_5.addFeatures(features_Nizhneudinsk_5);var lyr_Nizhneudinsk_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Nizhneudinsk_5, 
                style: style_Nizhneudinsk_5,
                title: '<img src="styles/legend/Nizhneudinsk_5.png" /> Nizhneudinsk'
            });var format_Birusinka_6 = new ol.format.GeoJSON();
var features_Birusinka_6 = format_Birusinka_6.readFeatures(json_Birusinka_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Birusinka_6 = new ol.source.Vector({
    attributions: '<a href="http://geoalert.io"><img src="http://geoalert.io/img/geoalert_card.png" width="50px"/></a>',
});
jsonSource_Birusinka_6.addFeatures(features_Birusinka_6);var lyr_Birusinka_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Birusinka_6, 
                style: style_Birusinka_6,
                title: '<img src="styles/legend/Birusinka_6.png" /> Birusinka'
            });

lyr_Mapboxstreets_0.setVisible(true);lyr_DGPremium_1.setVisible(true);lyr_Maxar.setVisible(true);lyr_Birusa_2.setVisible(true);lyr_Shumsky_3.setVisible(true);lyr_Tulun_4.setVisible(true);lyr_Nizhneudinsk_5.setVisible(true);lyr_Birusinka_6.setVisible(true);
var layersList = [lyr_Mapboxstreets_0,lyr_DGPremium_1,lyr_Maxar,lyr_Birusa_2,lyr_Shumsky_3,lyr_Tulun_4,lyr_Nizhneudinsk_5,lyr_Birusinka_6];
lyr_Birusa_2.set('fieldAliases', {'class_id': 'class_id', });
lyr_Shumsky_3.set('fieldAliases', {'class_id': 'class_id', });
lyr_Tulun_4.set('fieldAliases', {'class_id': 'class_id', });
lyr_Nizhneudinsk_5.set('fieldAliases', {'class_id': 'class_id', });
lyr_Birusinka_6.set('fieldAliases', {'class_id': 'class_id', });
lyr_Birusa_2.set('fieldImages', {'class_id': 'TextEdit', });
lyr_Shumsky_3.set('fieldImages', {'class_id': 'TextEdit', });
lyr_Tulun_4.set('fieldImages', {'class_id': 'TextEdit', });
lyr_Nizhneudinsk_5.set('fieldImages', {'class_id': 'TextEdit', });
lyr_Birusinka_6.set('fieldImages', {'class_id': 'TextEdit', });
lyr_Birusa_2.set('fieldLabels', {'class_id': 'no label', });
lyr_Shumsky_3.set('fieldLabels', {'class_id': 'no label', });
lyr_Tulun_4.set('fieldLabels', {'class_id': 'no label', });
lyr_Nizhneudinsk_5.set('fieldLabels', {'class_id': 'no label', });
lyr_Birusinka_6.set('fieldLabels', {'class_id': 'no label', });
lyr_Birusinka_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});