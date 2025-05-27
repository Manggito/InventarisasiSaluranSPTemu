var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_AREASPTEMU_1 = new ol.format.GeoJSON();
var features_AREASPTEMU_1 = format_AREASPTEMU_1.readFeatures(json_AREASPTEMU_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREASPTEMU_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREASPTEMU_1.addFeatures(features_AREASPTEMU_1);
var lyr_AREASPTEMU_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREASPTEMU_1, 
                style: style_AREASPTEMU_1,
                popuplayertitle: 'AREA SP TEMU',
                interactive: true,
                title: '<img src="styles/legend/AREASPTEMU_1.png" /> AREA SP TEMU'
            });
var format_KETERANGANKERUSAKANSALURAN_2 = new ol.format.GeoJSON();
var features_KETERANGANKERUSAKANSALURAN_2 = format_KETERANGANKERUSAKANSALURAN_2.readFeatures(json_KETERANGANKERUSAKANSALURAN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KETERANGANKERUSAKANSALURAN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KETERANGANKERUSAKANSALURAN_2.addFeatures(features_KETERANGANKERUSAKANSALURAN_2);
var lyr_KETERANGANKERUSAKANSALURAN_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KETERANGANKERUSAKANSALURAN_2, 
                style: style_KETERANGANKERUSAKANSALURAN_2,
                popuplayertitle: 'KETERANGAN KERUSAKAN SALURAN',
                interactive: true,
    title: 'KETERANGAN KERUSAKAN SALURAN<br />\
    <img src="styles/legend/KETERANGANKERUSAKANSALURAN_2_0.png" /> Rusak Berat<br />\
    <img src="styles/legend/KETERANGANKERUSAKANSALURAN_2_1.png" /> Rusak Sedang<br />\
    <img src="styles/legend/KETERANGANKERUSAKANSALURAN_2_2.png" /> Rusak Ringan<br />\
    <img src="styles/legend/KETERANGANKERUSAKANSALURAN_2_3.png" /> Baik<br />' });
var format_SALURANPRIMER_3 = new ol.format.GeoJSON();
var features_SALURANPRIMER_3 = format_SALURANPRIMER_3.readFeatures(json_SALURANPRIMER_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SALURANPRIMER_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SALURANPRIMER_3.addFeatures(features_SALURANPRIMER_3);
var lyr_SALURANPRIMER_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SALURANPRIMER_3, 
                style: style_SALURANPRIMER_3,
                popuplayertitle: 'SALURAN PRIMER',
                interactive: true,
                title: '<img src="styles/legend/SALURANPRIMER_3.png" /> SALURAN PRIMER'
            });
var format_SALURANSEKUNDER_4 = new ol.format.GeoJSON();
var features_SALURANSEKUNDER_4 = format_SALURANSEKUNDER_4.readFeatures(json_SALURANSEKUNDER_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SALURANSEKUNDER_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SALURANSEKUNDER_4.addFeatures(features_SALURANSEKUNDER_4);
var lyr_SALURANSEKUNDER_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SALURANSEKUNDER_4, 
                style: style_SALURANSEKUNDER_4,
                popuplayertitle: 'SALURAN SEKUNDER',
                interactive: true,
                title: '<img src="styles/legend/SALURANSEKUNDER_4.png" /> SALURAN SEKUNDER'
            });
var format_TITIKAKSESORIS_5 = new ol.format.GeoJSON();
var features_TITIKAKSESORIS_5 = format_TITIKAKSESORIS_5.readFeatures(json_TITIKAKSESORIS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TITIKAKSESORIS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TITIKAKSESORIS_5.addFeatures(features_TITIKAKSESORIS_5);
var lyr_TITIKAKSESORIS_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TITIKAKSESORIS_5, 
                style: style_TITIKAKSESORIS_5,
                popuplayertitle: 'TITIK AKSESORIS',
                interactive: true,
    title: 'TITIK AKSESORIS<br />\
    <img src="styles/legend/TITIKAKSESORIS_5_0.png" /> Bagi sadap<br />\
    <img src="styles/legend/TITIKAKSESORIS_5_1.png" /> Bak lumpur<br />\
    <img src="styles/legend/TITIKAKSESORIS_5_2.png" /> Gorong - gorong<br />\
    <img src="styles/legend/TITIKAKSESORIS_5_3.png" /> Pintu sadap<br />\
    <img src="styles/legend/TITIKAKSESORIS_5_4.png" /> Tanpa pintu sadap<br />' });
var format_TITIKPER50m_6 = new ol.format.GeoJSON();
var features_TITIKPER50m_6 = format_TITIKPER50m_6.readFeatures(json_TITIKPER50m_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TITIKPER50m_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TITIKPER50m_6.addFeatures(features_TITIKPER50m_6);
var lyr_TITIKPER50m_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TITIKPER50m_6, 
                style: style_TITIKPER50m_6,
                popuplayertitle: 'TITIK PER 50 m',
                interactive: true,
                title: '<img src="styles/legend/TITIKPER50m_6.png" /> TITIK PER 50 m'
            });
var format_TITIKKETERANGAN_7 = new ol.format.GeoJSON();
var features_TITIKKETERANGAN_7 = format_TITIKKETERANGAN_7.readFeatures(json_TITIKKETERANGAN_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TITIKKETERANGAN_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TITIKKETERANGAN_7.addFeatures(features_TITIKKETERANGAN_7);
var lyr_TITIKKETERANGAN_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TITIKKETERANGAN_7, 
                style: style_TITIKKETERANGAN_7,
                popuplayertitle: 'TITIK KETERANGAN',
                interactive: true,
    title: 'TITIK KETERANGAN<br />\
    <img src="styles/legend/TITIKKETERANGAN_7_0.png" /> Habis tanpa saluran<br />\
    <img src="styles/legend/TITIKKETERANGAN_7_1.png" /> Rabat jalan<br />\
    <img src="styles/legend/TITIKKETERANGAN_7_2.png" /> Rumah pompa<br />\
    <img src="styles/legend/TITIKKETERANGAN_7_3.png" /> Tikungan<br />' });
var group_SALURAN = new ol.layer.Group({
                                layers: [lyr_SALURANPRIMER_3,lyr_SALURANSEKUNDER_4,],
                                fold: 'open',
                                title: 'SALURAN'});

lyr_GoogleSatellite_0.setVisible(true);lyr_AREASPTEMU_1.setVisible(true);lyr_KETERANGANKERUSAKANSALURAN_2.setVisible(true);lyr_SALURANPRIMER_3.setVisible(true);lyr_SALURANSEKUNDER_4.setVisible(true);lyr_TITIKAKSESORIS_5.setVisible(true);lyr_TITIKPER50m_6.setVisible(true);lyr_TITIKKETERANGAN_7.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_AREASPTEMU_1,lyr_KETERANGANKERUSAKANSALURAN_2,group_SALURAN,lyr_TITIKAKSESORIS_5,lyr_TITIKPER50m_6,lyr_TITIKKETERANGAN_7];
lyr_AREASPTEMU_1.set('fieldAliases', {'Id': 'Id', 'LUAS': 'LUAS', 'NAMA_AREA': 'NAMA_AREA', });
lyr_KETERANGANKERUSAKANSALURAN_2.set('fieldAliases', {'Id': 'Id', 'Lokasi': 'Lokasi', 'Kategori': 'Kategori', 'Keterangan': 'Keterangan', 'Panjang': 'Panjang', });
lyr_SALURANPRIMER_3.set('fieldAliases', {'OID_': 'OID_', 'KET': 'KET', 'PANJANG': 'PANJANG', });
lyr_SALURANSEKUNDER_4.set('fieldAliases', {'OID_': 'OID_', 'KET': 'KET', 'PANJANG': 'PANJANG', });
lyr_TITIKAKSESORIS_5.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'URUTAN': 'URUTAN', 'PANJANG': 'PANJANG', 'FOTO 1': 'FOTO 1', 'FOTO 2': 'FOTO 2', 'FOTO 3': 'FOTO 3', 'FOTO 4': 'FOTO 4', 'FOTO 5': 'FOTO 5', 'FOTO 6': 'FOTO 6', 'FOTO 7': 'FOTO 7', 'FOTO 8': 'FOTO 8', });
lyr_TITIKPER50m_6.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'URUTAN': 'URUTAN', 'PANJANG': 'PANJANG', 'FOTO 1': 'FOTO 1', 'FOTO 2': 'FOTO 2', 'FOTO 3': 'FOTO 3', 'FOTO 4': 'FOTO 4', 'FOTO 5': 'FOTO 5', 'FOTO 6': 'FOTO 6', 'FOTO 7': 'FOTO 7', 'FOTO 8': 'FOTO 8', });
lyr_TITIKKETERANGAN_7.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'URUTAN': 'URUTAN', 'PANJANG': 'PANJANG', 'FOTO 1': 'FOTO 1', 'FOTO 2': 'FOTO 2', 'FOTO 3': 'FOTO 3', 'FOTO 4': 'FOTO 4', 'FOTO 5': 'FOTO 5', 'FOTO 6': 'FOTO 6', 'FOTO 7': 'FOTO 7', 'FOTO 8': 'FOTO 8', });
lyr_AREASPTEMU_1.set('fieldImages', {'Id': '', 'LUAS': '', 'NAMA_AREA': '', });
lyr_KETERANGANKERUSAKANSALURAN_2.set('fieldImages', {'Id': 'Range', 'Lokasi': 'TextEdit', 'Kategori': 'TextEdit', 'Keterangan': 'TextEdit', 'Panjang': 'TextEdit', });
lyr_SALURANPRIMER_3.set('fieldImages', {'OID_': 'TextEdit', 'KET': 'TextEdit', 'PANJANG': 'TextEdit', });
lyr_SALURANSEKUNDER_4.set('fieldImages', {'OID_': 'TextEdit', 'KET': 'TextEdit', 'PANJANG': 'TextEdit', });
lyr_TITIKAKSESORIS_5.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'URUTAN': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO 1': 'ExternalResource', 'FOTO 2': 'ExternalResource', 'FOTO 3': 'ExternalResource', 'FOTO 4': 'ExternalResource', 'FOTO 5': 'ExternalResource', 'FOTO 6': 'ExternalResource', 'FOTO 7': 'ExternalResource', 'FOTO 8': 'ExternalResource', });
lyr_TITIKPER50m_6.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'URUTAN': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO 1': 'ExternalResource', 'FOTO 2': 'ExternalResource', 'FOTO 3': 'ExternalResource', 'FOTO 4': 'ExternalResource', 'FOTO 5': 'ExternalResource', 'FOTO 6': 'ExternalResource', 'FOTO 7': 'ExternalResource', 'FOTO 8': 'ExternalResource', });
lyr_TITIKKETERANGAN_7.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'URUTAN': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO 1': 'ExternalResource', 'FOTO 2': 'ExternalResource', 'FOTO 3': 'ExternalResource', 'FOTO 4': 'ExternalResource', 'FOTO 5': 'ExternalResource', 'FOTO 6': 'ExternalResource', 'FOTO 7': 'ExternalResource', 'FOTO 8': 'ExternalResource', });
lyr_AREASPTEMU_1.set('fieldLabels', {'Id': 'hidden field', 'LUAS': 'inline label - visible with data', 'NAMA_AREA': 'inline label - visible with data', });
lyr_KETERANGANKERUSAKANSALURAN_2.set('fieldLabels', {'Id': 'hidden field', 'Lokasi': 'inline label - visible with data', 'Kategori': 'inline label - visible with data', 'Keterangan': 'inline label - visible with data', 'Panjang': 'inline label - visible with data', });
lyr_SALURANPRIMER_3.set('fieldLabels', {'OID_': 'hidden field', 'KET': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', });
lyr_SALURANSEKUNDER_4.set('fieldLabels', {'OID_': 'hidden field', 'KET': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', });
lyr_TITIKAKSESORIS_5.set('fieldLabels', {'OID_': 'hidden field', 'Name': 'inline label - visible with data', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'URUTAN': 'hidden field', 'PANJANG': 'inline label - visible with data', 'FOTO 1': 'no label', 'FOTO 2': 'no label', 'FOTO 3': 'no label', 'FOTO 4': 'no label', 'FOTO 5': 'no label', 'FOTO 6': 'no label', 'FOTO 7': 'no label', 'FOTO 8': 'no label', });
lyr_TITIKPER50m_6.set('fieldLabels', {'OID_': 'hidden field', 'Name': 'inline label - visible with data', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'URUTAN': 'hidden field', 'PANJANG': 'inline label - visible with data', 'FOTO 1': 'no label', 'FOTO 2': 'no label', 'FOTO 3': 'no label', 'FOTO 4': 'no label', 'FOTO 5': 'no label', 'FOTO 6': 'no label', 'FOTO 7': 'no label', 'FOTO 8': 'no label', });
lyr_TITIKKETERANGAN_7.set('fieldLabels', {'OID_': 'hidden field', 'Name': 'inline label - visible with data', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'URUTAN': 'hidden field', 'PANJANG': 'inline label - visible with data', 'FOTO 1': 'no label', 'FOTO 2': 'no label', 'FOTO 3': 'no label', 'FOTO 4': 'no label', 'FOTO 5': 'no label', 'FOTO 6': 'no label', 'FOTO 7': 'no label', 'FOTO 8': 'no label', });
lyr_TITIKKETERANGAN_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});