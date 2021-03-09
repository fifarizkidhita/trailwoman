var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_destinasi_woman_trail_1 = new ol.format.GeoJSON();
var features_destinasi_woman_trail_1 = format_destinasi_woman_trail_1.readFeatures(json_destinasi_woman_trail_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_destinasi_woman_trail_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_destinasi_woman_trail_1.addFeatures(features_destinasi_woman_trail_1);
var lyr_destinasi_woman_trail_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_destinasi_woman_trail_1, 
                style: style_destinasi_woman_trail_1,
                interactive: true,
                title: '<img src="styles/legend/destinasi_woman_trail_1.png" /> destinasi_woman_trail'
            });
var format_destinasi_woman_titik_2 = new ol.format.GeoJSON();
var features_destinasi_woman_titik_2 = format_destinasi_woman_titik_2.readFeatures(json_destinasi_woman_titik_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_destinasi_woman_titik_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_destinasi_woman_titik_2.addFeatures(features_destinasi_woman_titik_2);
var lyr_destinasi_woman_titik_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_destinasi_woman_titik_2, 
                style: style_destinasi_woman_titik_2,
                interactive: true,
                title: '<img src="styles/legend/destinasi_woman_titik_2.png" /> destinasi_woman_titik'
            });
var format_amenitaswomantrail_3 = new ol.format.GeoJSON();
var features_amenitaswomantrail_3 = format_amenitaswomantrail_3.readFeatures(json_amenitaswomantrail_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_amenitaswomantrail_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_amenitaswomantrail_3.addFeatures(features_amenitaswomantrail_3);
var lyr_amenitaswomantrail_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_amenitaswomantrail_3, 
                style: style_amenitaswomantrail_3,
                interactive: true,
                title: '<img src="styles/legend/amenitaswomantrail_3.png" /> amenitas woman trail'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_destinasi_woman_trail_1.setVisible(true);lyr_destinasi_woman_titik_2.setVisible(true);lyr_amenitaswomantrail_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_destinasi_woman_trail_1,lyr_destinasi_woman_titik_2,lyr_amenitaswomantrail_3];
lyr_destinasi_woman_trail_1.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', });
lyr_destinasi_woman_titik_2.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'HasLabel': 'HasLabel', 'LabelID': 'LabelID', });
lyr_amenitaswomantrail_3.set('fieldAliases', {'Nama': 'Nama', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_destinasi_woman_trail_1.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Clamped': 'Range', 'Extruded': 'Range', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_destinasi_woman_titik_2.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'HasLabel': 'Range', 'LabelID': 'TextEdit', });
lyr_amenitaswomantrail_3.set('fieldImages', {'Nama': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', });
lyr_destinasi_woman_trail_1.set('fieldLabels', {'OID_': 'no label', 'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', });
lyr_destinasi_woman_titik_2.set('fieldLabels', {'OID_': 'no label', 'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'HasLabel': 'no label', 'LabelID': 'no label', });
lyr_amenitaswomantrail_3.set('fieldLabels', {'Nama': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', });
lyr_amenitaswomantrail_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});