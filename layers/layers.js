var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleRoads_2 = new ol.layer.Tile({
            'title': 'Google Roads',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenTopoMap_3 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://opentopomap.org/about#datenstand">OpenTopoMap (CC-BY-SA)</a>',
                url: 'https://tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });
var format_SUNGAI_4 = new ol.format.GeoJSON();
var features_SUNGAI_4 = format_SUNGAI_4.readFeatures(json_SUNGAI_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_4.addFeatures(features_SUNGAI_4);
var lyr_SUNGAI_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_4, 
                style: style_SUNGAI_4,
                popuplayertitle: 'SUNGAI',
                interactive: false,
                title: '<img src="styles/legend/SUNGAI_4.png" /> SUNGAI'
            });
var format_JALAN_5 = new ol.format.GeoJSON();
var features_JALAN_5 = format_JALAN_5.readFeatures(json_JALAN_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_5.addFeatures(features_JALAN_5);
var lyr_JALAN_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_5, 
                style: style_JALAN_5,
                popuplayertitle: 'JALAN',
                interactive: false,
                title: '<img src="styles/legend/JALAN_5.png" /> JALAN'
            });
var format_LUAS_FUNGSIONAL_6 = new ol.format.GeoJSON();
var features_LUAS_FUNGSIONAL_6 = format_LUAS_FUNGSIONAL_6.readFeatures(json_LUAS_FUNGSIONAL_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LUAS_FUNGSIONAL_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LUAS_FUNGSIONAL_6.addFeatures(features_LUAS_FUNGSIONAL_6);
var lyr_LUAS_FUNGSIONAL_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LUAS_FUNGSIONAL_6, 
                style: style_LUAS_FUNGSIONAL_6,
                popuplayertitle: 'LUAS_FUNGSIONAL',
                interactive: true,
                title: '<img src="styles/legend/LUAS_FUNGSIONAL_6.png" /> LUAS_FUNGSIONAL'
            });
var format_KETERANGANKERUSAKANSALURAN_7 = new ol.format.GeoJSON();
var features_KETERANGANKERUSAKANSALURAN_7 = format_KETERANGANKERUSAKANSALURAN_7.readFeatures(json_KETERANGANKERUSAKANSALURAN_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KETERANGANKERUSAKANSALURAN_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KETERANGANKERUSAKANSALURAN_7.addFeatures(features_KETERANGANKERUSAKANSALURAN_7);
var lyr_KETERANGANKERUSAKANSALURAN_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KETERANGANKERUSAKANSALURAN_7, 
                style: style_KETERANGANKERUSAKANSALURAN_7,
                popuplayertitle: 'KETERANGAN KERUSAKAN SALURAN',
                interactive: true,
    title: 'KETERANGAN KERUSAKAN SALURAN<br />\
    <img src="styles/legend/KETERANGANKERUSAKANSALURAN_7_0.png" /> Baik<br />\
    <img src="styles/legend/KETERANGANKERUSAKANSALURAN_7_1.png" /> Rusak Ringan<br />\
    <img src="styles/legend/KETERANGANKERUSAKANSALURAN_7_2.png" /> Rusak Sedang<br />\
    <img src="styles/legend/KETERANGANKERUSAKANSALURAN_7_3.png" /> Rusak Berat<br />' });
var format_SALURANSEKUNDER_8 = new ol.format.GeoJSON();
var features_SALURANSEKUNDER_8 = format_SALURANSEKUNDER_8.readFeatures(json_SALURANSEKUNDER_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SALURANSEKUNDER_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SALURANSEKUNDER_8.addFeatures(features_SALURANSEKUNDER_8);
var lyr_SALURANSEKUNDER_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SALURANSEKUNDER_8, 
                style: style_SALURANSEKUNDER_8,
                popuplayertitle: 'SALURAN SEKUNDER',
                interactive: true,
                title: '<img src="styles/legend/SALURANSEKUNDER_8.png" /> SALURAN SEKUNDER'
            });
var format_SALURANPRIMER_9 = new ol.format.GeoJSON();
var features_SALURANPRIMER_9 = format_SALURANPRIMER_9.readFeatures(json_SALURANPRIMER_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SALURANPRIMER_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SALURANPRIMER_9.addFeatures(features_SALURANPRIMER_9);
var lyr_SALURANPRIMER_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SALURANPRIMER_9, 
                style: style_SALURANPRIMER_9,
                popuplayertitle: 'SALURAN PRIMER',
                interactive: true,
                title: '<img src="styles/legend/SALURANPRIMER_9.png" /> SALURAN PRIMER'
            });
var format_AREA_NOMENKLATUR_10 = new ol.format.GeoJSON();
var features_AREA_NOMENKLATUR_10 = format_AREA_NOMENKLATUR_10.readFeatures(json_AREA_NOMENKLATUR_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREA_NOMENKLATUR_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_NOMENKLATUR_10.addFeatures(features_AREA_NOMENKLATUR_10);
var lyr_AREA_NOMENKLATUR_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_NOMENKLATUR_10, 
                style: style_AREA_NOMENKLATUR_10,
                popuplayertitle: 'AREA_NOMENKLATUR',
                interactive: true,
                title: '<img src="styles/legend/AREA_NOMENKLATUR_10.png" /> AREA_NOMENKLATUR'
            });
var format_BANGUNAN_NOMENKLATUR_11 = new ol.format.GeoJSON();
var features_BANGUNAN_NOMENKLATUR_11 = format_BANGUNAN_NOMENKLATUR_11.readFeatures(json_BANGUNAN_NOMENKLATUR_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANGUNAN_NOMENKLATUR_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANGUNAN_NOMENKLATUR_11.addFeatures(features_BANGUNAN_NOMENKLATUR_11);
var lyr_BANGUNAN_NOMENKLATUR_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BANGUNAN_NOMENKLATUR_11, 
                style: style_BANGUNAN_NOMENKLATUR_11,
                popuplayertitle: 'BANGUNAN_NOMENKLATUR',
                interactive: false,
                title: '<img src="styles/legend/BANGUNAN_NOMENKLATUR_11.png" /> BANGUNAN_NOMENKLATUR'
            });
var format_Tikungan_12 = new ol.format.GeoJSON();
var features_Tikungan_12 = format_Tikungan_12.readFeatures(json_Tikungan_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tikungan_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tikungan_12.addFeatures(features_Tikungan_12);
var lyr_Tikungan_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tikungan_12, 
                style: style_Tikungan_12,
                popuplayertitle: 'Tikungan',
                interactive: true,
                title: '<img src="styles/legend/Tikungan_12.png" /> Tikungan'
            });
var format_Beda_Pasangan_13 = new ol.format.GeoJSON();
var features_Beda_Pasangan_13 = format_Beda_Pasangan_13.readFeatures(json_Beda_Pasangan_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Beda_Pasangan_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Beda_Pasangan_13.addFeatures(features_Beda_Pasangan_13);
var lyr_Beda_Pasangan_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Beda_Pasangan_13, 
                style: style_Beda_Pasangan_13,
                popuplayertitle: 'Beda_Pasangan',
                interactive: true,
                title: '<img src="styles/legend/Beda_Pasangan_13.png" /> Beda_Pasangan'
            });
var format_Gorong__Gorong_14 = new ol.format.GeoJSON();
var features_Gorong__Gorong_14 = format_Gorong__Gorong_14.readFeatures(json_Gorong__Gorong_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gorong__Gorong_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gorong__Gorong_14.addFeatures(features_Gorong__Gorong_14);
var lyr_Gorong__Gorong_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gorong__Gorong_14, 
                style: style_Gorong__Gorong_14,
                popuplayertitle: 'Gorong_-_Gorong',
                interactive: true,
                title: '<img src="styles/legend/Gorong__Gorong_14.png" /> Gorong_-_Gorong'
            });
var format_TITIKPER50m_15 = new ol.format.GeoJSON();
var features_TITIKPER50m_15 = format_TITIKPER50m_15.readFeatures(json_TITIKPER50m_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TITIKPER50m_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TITIKPER50m_15.addFeatures(features_TITIKPER50m_15);
var lyr_TITIKPER50m_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TITIKPER50m_15, 
                style: style_TITIKPER50m_15,
                popuplayertitle: 'TITIK PER 50 m',
                interactive: true,
                title: '<img src="styles/legend/TITIKPER50m_15.png" /> TITIK PER 50 m'
            });
var format_Bangunan_Air_16 = new ol.format.GeoJSON();
var features_Bangunan_Air_16 = format_Bangunan_Air_16.readFeatures(json_Bangunan_Air_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_Air_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_Air_16.addFeatures(features_Bangunan_Air_16);
var lyr_Bangunan_Air_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan_Air_16, 
                style: style_Bangunan_Air_16,
                popuplayertitle: 'Bangunan_Air',
                interactive: true,
                title: '<img src="styles/legend/Bangunan_Air_16.png" /> Bangunan_Air'
            });
var format_Bangunan_Bagi_17 = new ol.format.GeoJSON();
var features_Bangunan_Bagi_17 = format_Bangunan_Bagi_17.readFeatures(json_Bangunan_Bagi_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_Bagi_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_Bagi_17.addFeatures(features_Bangunan_Bagi_17);
var lyr_Bangunan_Bagi_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan_Bagi_17, 
                style: style_Bangunan_Bagi_17,
                popuplayertitle: 'Bangunan_Bagi',
                interactive: true,
                title: '<img src="styles/legend/Bangunan_Bagi_17.png" /> Bangunan_Bagi'
            });
var format_Bangunan_Sadap_18 = new ol.format.GeoJSON();
var features_Bangunan_Sadap_18 = format_Bangunan_Sadap_18.readFeatures(json_Bangunan_Sadap_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_Sadap_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_Sadap_18.addFeatures(features_Bangunan_Sadap_18);
var lyr_Bangunan_Sadap_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan_Sadap_18, 
                style: style_Bangunan_Sadap_18,
                popuplayertitle: 'Bangunan_Sadap',
                interactive: true,
                title: '<img src="styles/legend/Bangunan_Sadap_18.png" /> Bangunan_Sadap'
            });
var format_Sumur_Pompa_19 = new ol.format.GeoJSON();
var features_Sumur_Pompa_19 = format_Sumur_Pompa_19.readFeatures(json_Sumur_Pompa_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sumur_Pompa_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sumur_Pompa_19.addFeatures(features_Sumur_Pompa_19);
var lyr_Sumur_Pompa_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sumur_Pompa_19, 
                style: style_Sumur_Pompa_19,
                popuplayertitle: 'Sumur_Pompa',
                interactive: true,
                title: '<img src="styles/legend/Sumur_Pompa_19.png" /> Sumur_Pompa'
            });
var format_Rumah_Pompa_20 = new ol.format.GeoJSON();
var features_Rumah_Pompa_20 = format_Rumah_Pompa_20.readFeatures(json_Rumah_Pompa_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rumah_Pompa_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rumah_Pompa_20.addFeatures(features_Rumah_Pompa_20);
var lyr_Rumah_Pompa_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rumah_Pompa_20, 
                style: style_Rumah_Pompa_20,
                popuplayertitle: 'Rumah_Pompa',
                interactive: true,
                title: '<img src="styles/legend/Rumah_Pompa_20.png" /> Rumah_Pompa'
            });
var group_TITIKAKSESSORIS = new ol.layer.Group({
                                layers: [lyr_Bangunan_Air_16,lyr_Bangunan_Bagi_17,lyr_Bangunan_Sadap_18,lyr_Sumur_Pompa_19,lyr_Rumah_Pompa_20,],
                                fold: 'open',
                                title: 'TITIK AKSESSORIS'});
var group_TITIKKETERANGAN = new ol.layer.Group({
                                layers: [lyr_Tikungan_12,lyr_Beda_Pasangan_13,lyr_Gorong__Gorong_14,lyr_TITIKPER50m_15,],
                                fold: 'open',
                                title: 'TITIK KETERANGAN'});
var group_SKEMANOMENKLATUR = new ol.layer.Group({
                                layers: [lyr_AREA_NOMENKLATUR_10,lyr_BANGUNAN_NOMENKLATUR_11,],
                                fold: 'open',
                                title: 'SKEMA NOMENKLATUR'});
var group_JENISSALURAN = new ol.layer.Group({
                                layers: [lyr_SALURANSEKUNDER_8,lyr_SALURANPRIMER_9,],
                                fold: 'open',
                                title: 'JENIS SALURAN'});

lyr_GoogleSatelliteHybrid_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(true);lyr_GoogleRoads_2.setVisible(false);lyr_OpenTopoMap_3.setVisible(false);lyr_SUNGAI_4.setVisible(true);lyr_JALAN_5.setVisible(true);lyr_LUAS_FUNGSIONAL_6.setVisible(true);lyr_KETERANGANKERUSAKANSALURAN_7.setVisible(true);lyr_SALURANSEKUNDER_8.setVisible(true);lyr_SALURANPRIMER_9.setVisible(true);lyr_AREA_NOMENKLATUR_10.setVisible(true);lyr_BANGUNAN_NOMENKLATUR_11.setVisible(true);lyr_Tikungan_12.setVisible(true);lyr_Beda_Pasangan_13.setVisible(true);lyr_Gorong__Gorong_14.setVisible(true);lyr_TITIKPER50m_15.setVisible(true);lyr_Bangunan_Air_16.setVisible(true);lyr_Bangunan_Bagi_17.setVisible(true);lyr_Bangunan_Sadap_18.setVisible(true);lyr_Sumur_Pompa_19.setVisible(true);lyr_Rumah_Pompa_20.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_GoogleSatellite_1,lyr_GoogleRoads_2,lyr_OpenTopoMap_3,lyr_SUNGAI_4,lyr_JALAN_5,lyr_LUAS_FUNGSIONAL_6,lyr_KETERANGANKERUSAKANSALURAN_7,group_JENISSALURAN,group_SKEMANOMENKLATUR,group_TITIKKETERANGAN,group_TITIKAKSESSORIS];
lyr_SUNGAI_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JALAN_5.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_LUAS_FUNGSIONAL_6.set('fieldAliases', {'Id': 'Id', 'NAMA_AREA': 'NAMA_AREA', 'LUAS': 'LUAS', });
lyr_KETERANGANKERUSAKANSALURAN_7.set('fieldAliases', {'Id': 'Id', 'Lokasi': 'Lokasi', 'Kategori': 'Kategori', 'Keterangan': 'Keterangan', 'Panjang': 'Panjang', });
lyr_SALURANSEKUNDER_8.set('fieldAliases', {'OID_': 'OID_', 'KET': 'KET', 'PANJANG': 'PANJANG', 'SEKUNDER': 'SEKUNDER', 'MENGALIRI': 'MENGALIRI', });
lyr_SALURANPRIMER_9.set('fieldAliases', {'OID_': 'OID_', 'KET': 'KET', 'PANJANG': 'PANJANG', 'MENGALIRI': 'MENGALIRI', 'PRIMER': 'PRIMER', });
lyr_AREA_NOMENKLATUR_10.set('fieldAliases', {'Id': 'Id', 'LUAS': 'LUAS', 'SATUAN': 'SATUAN', 'PEMBAGIAN': 'PEMBAGIAN', 'AREA': 'AREA', });
lyr_BANGUNAN_NOMENKLATUR_11.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'URUTAN': 'URUTAN', 'PEMBAGIAN': 'PEMBAGIAN', });
lyr_Tikungan_12.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'URUTAN': 'URUTAN', 'PANJANG': 'PANJANG', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', 'FOTO_4': 'FOTO_4', 'FOTO_5': 'FOTO_5', 'FOTO_6': 'FOTO_6', 'FOTO_7': 'FOTO_7', 'FOTO_8': 'FOTO_8', });
lyr_Beda_Pasangan_13.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'URUTAN': 'URUTAN', 'PANJANG': 'PANJANG', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', 'FOTO_4': 'FOTO_4', 'FOTO_5': 'FOTO_5', 'FOTO_6': 'FOTO_6', 'FOTO_7': 'FOTO_7', 'FOTO_8': 'FOTO_8', });
lyr_Gorong__Gorong_14.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'URUTAN': 'URUTAN', 'PANJANG': 'PANJANG', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', 'FOTO_4': 'FOTO_4', 'FOTO_5': 'FOTO_5', 'FOTO_6': 'FOTO_6', 'FOTO_7': 'FOTO_7', 'FOTO_8': 'FOTO_8', });
lyr_TITIKPER50m_15.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'URUTAN': 'URUTAN', 'PANJANG': 'PANJANG', 'FOTO 1': 'FOTO 1', 'FOTO 2': 'FOTO 2', 'FOTO 3': 'FOTO 3', 'FOTO 4': 'FOTO 4', 'FOTO 5': 'FOTO 5', 'FOTO 6': 'FOTO 6', 'FOTO 7': 'FOTO 7', 'FOTO 8': 'FOTO 8', });
lyr_Bangunan_Air_16.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'URUTAN': 'URUTAN', 'PANJANG': 'PANJANG', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', 'FOTO_4': 'FOTO_4', 'FOTO_5': 'FOTO_5', 'FOTO_6': 'FOTO_6', 'FOTO_7': 'FOTO_7', 'FOTO_8': 'FOTO_8', });
lyr_Bangunan_Bagi_17.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'URUTAN': 'URUTAN', 'PANJANG': 'PANJANG', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', 'FOTO_4': 'FOTO_4', 'FOTO_5': 'FOTO_5', 'FOTO_6': 'FOTO_6', 'FOTO_7': 'FOTO_7', 'FOTO_8': 'FOTO_8', });
lyr_Bangunan_Sadap_18.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'URUTAN': 'URUTAN', 'PANJANG': 'PANJANG', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', 'FOTO_4': 'FOTO_4', 'FOTO_5': 'FOTO_5', 'FOTO_6': 'FOTO_6', 'FOTO_7': 'FOTO_7', 'FOTO_8': 'FOTO_8', });
lyr_Sumur_Pompa_19.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'URUTAN': 'URUTAN', 'PANJANG': 'PANJANG', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', 'FOTO_4': 'FOTO_4', 'FOTO_5': 'FOTO_5', 'FOTO_6': 'FOTO_6', 'FOTO_7': 'FOTO_7', 'FOTO_8': 'FOTO_8', });
lyr_Rumah_Pompa_20.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'URUTAN': 'URUTAN', 'PANJANG': 'PANJANG', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', 'FOTO_4': 'FOTO_4', 'FOTO_5': 'FOTO_5', 'FOTO_6': 'FOTO_6', 'FOTO_7': 'FOTO_7', 'FOTO_8': 'FOTO_8', });
lyr_SUNGAI_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_JALAN_5.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_LUAS_FUNGSIONAL_6.set('fieldImages', {'Id': 'Range', 'NAMA_AREA': 'TextEdit', 'LUAS': 'TextEdit', });
lyr_KETERANGANKERUSAKANSALURAN_7.set('fieldImages', {'Id': 'Range', 'Lokasi': 'TextEdit', 'Kategori': 'TextEdit', 'Keterangan': 'TextEdit', 'Panjang': 'TextEdit', });
lyr_SALURANSEKUNDER_8.set('fieldImages', {'OID_': 'TextEdit', 'KET': 'TextEdit', 'PANJANG': 'TextEdit', 'SEKUNDER': '', 'MENGALIRI': '', });
lyr_SALURANPRIMER_9.set('fieldImages', {'OID_': 'TextEdit', 'KET': 'TextEdit', 'PANJANG': 'TextEdit', 'MENGALIRI': '', 'PRIMER': '', });
lyr_AREA_NOMENKLATUR_10.set('fieldImages', {'Id': 'Range', 'LUAS': 'TextEdit', 'SATUAN': 'TextEdit', 'PEMBAGIAN': 'TextEdit', 'AREA': 'TextEdit', });
lyr_BANGUNAN_NOMENKLATUR_11.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'URUTAN': 'TextEdit', 'PEMBAGIAN': 'TextEdit', });
lyr_Tikungan_12.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'URUTAN': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'ExternalResource', 'FOTO_3': 'ExternalResource', 'FOTO_4': 'ExternalResource', 'FOTO_5': 'ExternalResource', 'FOTO_6': 'ExternalResource', 'FOTO_7': 'ExternalResource', 'FOTO_8': 'ExternalResource', });
lyr_Beda_Pasangan_13.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'URUTAN': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'ExternalResource', 'FOTO_3': 'ExternalResource', 'FOTO_4': 'ExternalResource', 'FOTO_5': 'ExternalResource', 'FOTO_6': 'ExternalResource', 'FOTO_7': 'ExternalResource', 'FOTO_8': 'ExternalResource', });
lyr_Gorong__Gorong_14.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'URUTAN': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'ExternalResource', 'FOTO_3': 'ExternalResource', 'FOTO_4': 'ExternalResource', 'FOTO_5': 'ExternalResource', 'FOTO_6': 'ExternalResource', 'FOTO_7': 'ExternalResource', 'FOTO_8': 'ExternalResource', });
lyr_TITIKPER50m_15.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'URUTAN': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO 1': 'ExternalResource', 'FOTO 2': 'ExternalResource', 'FOTO 3': 'ExternalResource', 'FOTO 4': 'ExternalResource', 'FOTO 5': 'ExternalResource', 'FOTO 6': 'ExternalResource', 'FOTO 7': 'ExternalResource', 'FOTO 8': 'ExternalResource', });
lyr_Bangunan_Air_16.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'URUTAN': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'ExternalResource', 'FOTO_3': 'ExternalResource', 'FOTO_4': 'ExternalResource', 'FOTO_5': 'ExternalResource', 'FOTO_6': 'ExternalResource', 'FOTO_7': 'ExternalResource', 'FOTO_8': 'ExternalResource', });
lyr_Bangunan_Bagi_17.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'URUTAN': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'ExternalResource', 'FOTO_3': 'ExternalResource', 'FOTO_4': 'ExternalResource', 'FOTO_5': 'ExternalResource', 'FOTO_6': 'ExternalResource', 'FOTO_7': 'ExternalResource', 'FOTO_8': 'ExternalResource', });
lyr_Bangunan_Sadap_18.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'URUTAN': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'ExternalResource', 'FOTO_3': 'ExternalResource', 'FOTO_4': 'ExternalResource', 'FOTO_5': 'ExternalResource', 'FOTO_6': 'ExternalResource', 'FOTO_7': 'ExternalResource', 'FOTO_8': 'ExternalResource', });
lyr_Sumur_Pompa_19.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'URUTAN': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'ExternalResource', 'FOTO_3': 'ExternalResource', 'FOTO_4': 'ExternalResource', 'FOTO_5': 'ExternalResource', 'FOTO_6': 'ExternalResource', 'FOTO_7': 'ExternalResource', 'FOTO_8': 'ExternalResource', });
lyr_Rumah_Pompa_20.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'URUTAN': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'ExternalResource', 'FOTO_3': 'ExternalResource', 'FOTO_4': 'ExternalResource', 'FOTO_5': 'ExternalResource', 'FOTO_6': 'ExternalResource', 'FOTO_7': 'ExternalResource', 'FOTO_8': 'ExternalResource', });
lyr_SUNGAI_4.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_JALAN_5.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_LUAS_FUNGSIONAL_6.set('fieldLabels', {'Id': 'hidden field', 'NAMA_AREA': 'inline label - visible with data', 'LUAS': 'inline label - visible with data', });
lyr_KETERANGANKERUSAKANSALURAN_7.set('fieldLabels', {'Id': 'hidden field', 'Lokasi': 'inline label - visible with data', 'Kategori': 'inline label - visible with data', 'Keterangan': 'inline label - visible with data', 'Panjang': 'inline label - visible with data', });
lyr_SALURANSEKUNDER_8.set('fieldLabels', {'OID_': 'hidden field', 'KET': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'SEKUNDER': 'no label', 'MENGALIRI': 'no label', });
lyr_SALURANPRIMER_9.set('fieldLabels', {'OID_': 'hidden field', 'KET': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'MENGALIRI': 'no label', 'PRIMER': 'no label', });
lyr_AREA_NOMENKLATUR_10.set('fieldLabels', {'Id': 'no label', 'LUAS': 'inline label - visible with data', 'SATUAN': 'inline label - visible with data', 'PEMBAGIAN': 'inline label - visible with data', 'AREA': 'inline label - visible with data', });
lyr_BANGUNAN_NOMENKLATUR_11.set('fieldLabels', {'OID_': 'no label', 'Name': 'no label', 'X': 'no label', 'Y': 'no label', 'BUJUR': 'no label', 'LINTANG': 'no label', 'PANJANG': 'no label', 'URUTAN': 'no label', 'PEMBAGIAN': 'no label', });
lyr_Tikungan_12.set('fieldLabels', {'OID_': 'hidden field', 'Name': 'inline label - visible with data', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'URUTAN': 'hidden field', 'PANJANG': 'inline label - visible with data', 'FOTO_1': 'no label', 'FOTO_2': 'no label', 'FOTO_3': 'no label', 'FOTO_4': 'no label', 'FOTO_5': 'no label', 'FOTO_6': 'no label', 'FOTO_7': 'no label', 'FOTO_8': 'no label', });
lyr_Beda_Pasangan_13.set('fieldLabels', {'OID_': 'hidden field', 'Name': 'inline label - visible with data', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'URUTAN': 'hidden field', 'PANJANG': 'inline label - visible with data', 'FOTO_1': 'no label', 'FOTO_2': 'no label', 'FOTO_3': 'no label', 'FOTO_4': 'no label', 'FOTO_5': 'no label', 'FOTO_6': 'no label', 'FOTO_7': 'no label', 'FOTO_8': 'no label', });
lyr_Gorong__Gorong_14.set('fieldLabels', {'OID_': 'hidden field', 'Name': 'inline label - visible with data', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'URUTAN': 'hidden field', 'PANJANG': 'inline label - visible with data', 'FOTO_1': 'no label', 'FOTO_2': 'no label', 'FOTO_3': 'no label', 'FOTO_4': 'no label', 'FOTO_5': 'no label', 'FOTO_6': 'no label', 'FOTO_7': 'no label', 'FOTO_8': 'no label', });
lyr_TITIKPER50m_15.set('fieldLabels', {'OID_': 'hidden field', 'Name': 'inline label - visible with data', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'URUTAN': 'hidden field', 'PANJANG': 'inline label - visible with data', 'FOTO 1': 'no label', 'FOTO 2': 'no label', 'FOTO 3': 'no label', 'FOTO 4': 'no label', 'FOTO 5': 'no label', 'FOTO 6': 'no label', 'FOTO 7': 'no label', 'FOTO 8': 'no label', });
lyr_Bangunan_Air_16.set('fieldLabels', {'OID_': 'hidden field', 'Name': 'inline label - visible with data', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'URUTAN': 'hidden field', 'PANJANG': 'inline label - visible with data', 'FOTO_1': 'no label', 'FOTO_2': 'no label', 'FOTO_3': 'no label', 'FOTO_4': 'no label', 'FOTO_5': 'no label', 'FOTO_6': 'no label', 'FOTO_7': 'no label', 'FOTO_8': 'no label', });
lyr_Bangunan_Bagi_17.set('fieldLabels', {'OID_': 'hidden field', 'Name': 'inline label - visible with data', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'URUTAN': 'hidden field', 'PANJANG': 'no label', 'FOTO_1': 'no label', 'FOTO_2': 'no label', 'FOTO_3': 'no label', 'FOTO_4': 'no label', 'FOTO_5': 'no label', 'FOTO_6': 'no label', 'FOTO_7': 'no label', 'FOTO_8': 'no label', });
lyr_Bangunan_Sadap_18.set('fieldLabels', {'OID_': 'hidden field', 'Name': 'inline label - visible with data', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'URUTAN': 'hidden field', 'PANJANG': 'inline label - visible with data', 'FOTO_1': 'no label', 'FOTO_2': 'no label', 'FOTO_3': 'no label', 'FOTO_4': 'no label', 'FOTO_5': 'no label', 'FOTO_6': 'no label', 'FOTO_7': 'no label', 'FOTO_8': 'no label', });
lyr_Sumur_Pompa_19.set('fieldLabels', {'OID_': 'hidden field', 'Name': 'inline label - visible with data', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'URUTAN': 'hidden field', 'PANJANG': 'inline label - visible with data', 'FOTO_1': 'no label', 'FOTO_2': 'no label', 'FOTO_3': 'no label', 'FOTO_4': 'no label', 'FOTO_5': 'no label', 'FOTO_6': 'no label', 'FOTO_7': 'no label', 'FOTO_8': 'no label', });
lyr_Rumah_Pompa_20.set('fieldLabels', {'OID_': 'hidden field', 'Name': 'inline label - visible with data', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'URUTAN': 'hidden field', 'PANJANG': 'inline label - visible with data', 'FOTO_1': 'no label', 'FOTO_2': 'no label', 'FOTO_3': 'no label', 'FOTO_4': 'no label', 'FOTO_5': 'no label', 'FOTO_6': 'no label', 'FOTO_7': 'no label', 'FOTO_8': 'no label', });
lyr_Rumah_Pompa_20.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});