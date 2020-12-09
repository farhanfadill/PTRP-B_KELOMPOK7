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
var format_KotaSurakarta_1 = new ol.format.GeoJSON();
var features_KotaSurakarta_1 = format_KotaSurakarta_1.readFeatures(json_KotaSurakarta_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaSurakarta_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaSurakarta_1.addFeatures(features_KotaSurakarta_1);
var lyr_KotaSurakarta_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KotaSurakarta_1, 
                style: style_KotaSurakarta_1,
                interactive: true,
                title: '<img src="styles/legend/KotaSurakarta_1.png" /> Kota Surakarta'
            });
var format_KecamatanPasarKliwon_2 = new ol.format.GeoJSON();
var features_KecamatanPasarKliwon_2 = format_KecamatanPasarKliwon_2.readFeatures(json_KecamatanPasarKliwon_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KecamatanPasarKliwon_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KecamatanPasarKliwon_2.addFeatures(features_KecamatanPasarKliwon_2);
var lyr_KecamatanPasarKliwon_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KecamatanPasarKliwon_2, 
                style: style_KecamatanPasarKliwon_2,
                interactive: true,
                title: '<img src="styles/legend/KecamatanPasarKliwon_2.png" /> Kecamatan Pasar Kliwon'
            });
var format_BatasKecamatan_3 = new ol.format.GeoJSON();
var features_BatasKecamatan_3 = format_BatasKecamatan_3.readFeatures(json_BatasKecamatan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKecamatan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKecamatan_3.addFeatures(features_BatasKecamatan_3);
var lyr_BatasKecamatan_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasKecamatan_3, 
                style: style_BatasKecamatan_3,
                interactive: true,
                title: '<img src="styles/legend/BatasKecamatan_3.png" /> Batas Kecamatan'
            });
var format_BatasKelurahan_4 = new ol.format.GeoJSON();
var features_BatasKelurahan_4 = format_BatasKelurahan_4.readFeatures(json_BatasKelurahan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKelurahan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKelurahan_4.addFeatures(features_BatasKelurahan_4);
var lyr_BatasKelurahan_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasKelurahan_4, 
                style: style_BatasKelurahan_4,
                interactive: true,
                title: '<img src="styles/legend/BatasKelurahan_4.png" /> Batas Kelurahan'
            });
var format_PasarTitikAcuan_5 = new ol.format.GeoJSON();
var features_PasarTitikAcuan_5 = format_PasarTitikAcuan_5.readFeatures(json_PasarTitikAcuan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PasarTitikAcuan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PasarTitikAcuan_5.addFeatures(features_PasarTitikAcuan_5);
var lyr_PasarTitikAcuan_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PasarTitikAcuan_5, 
                style: style_PasarTitikAcuan_5,
                interactive: true,
                title: '<img src="styles/legend/PasarTitikAcuan_5.png" /> Pasar (Titik Acuan)'
            });
var format_IndustriMenengah_6 = new ol.format.GeoJSON();
var features_IndustriMenengah_6 = format_IndustriMenengah_6.readFeatures(json_IndustriMenengah_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndustriMenengah_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndustriMenengah_6.addFeatures(features_IndustriMenengah_6);
var lyr_IndustriMenengah_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IndustriMenengah_6, 
                style: style_IndustriMenengah_6,
                interactive: true,
                title: '<img src="styles/legend/IndustriMenengah_6.png" /> Industri Menengah'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_KotaSurakarta_1.setVisible(true);lyr_KecamatanPasarKliwon_2.setVisible(true);lyr_BatasKecamatan_3.setVisible(true);lyr_BatasKelurahan_4.setVisible(true);lyr_PasarTitikAcuan_5.setVisible(true);lyr_IndustriMenengah_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_KotaSurakarta_1,lyr_KecamatanPasarKliwon_2,lyr_BatasKecamatan_3,lyr_BatasKelurahan_4,lyr_PasarTitikAcuan_5,lyr_IndustriMenengah_6];
lyr_KotaSurakarta_1.set('fieldAliases', {'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', });
lyr_KecamatanPasarKliwon_2.set('fieldAliases', {'WADMKC': 'WADMKC', });
lyr_BatasKecamatan_3.set('fieldAliases', {'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', });
lyr_BatasKelurahan_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', });
lyr_PasarTitikAcuan_5.set('fieldAliases', {'Name': 'Name', 'Gambar': 'Gambar', });
lyr_IndustriMenengah_6.set('fieldAliases', {'title': 'title', 'label': 'label', 'distance': 'distance', });
lyr_KotaSurakarta_1.set('fieldImages', {'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', });
lyr_KecamatanPasarKliwon_2.set('fieldImages', {'WADMKC': 'TextEdit', });
lyr_BatasKecamatan_3.set('fieldImages', {'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', });
lyr_BatasKelurahan_4.set('fieldImages', {'NAMOBJ': 'TextEdit', });
lyr_PasarTitikAcuan_5.set('fieldImages', {'Name': 'TextEdit', 'Gambar': 'ExternalResource', });
lyr_IndustriMenengah_6.set('fieldImages', {'title': 'TextEdit', 'label': 'TextEdit', 'distance': 'TextEdit', });
lyr_KotaSurakarta_1.set('fieldLabels', {'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', });
lyr_KecamatanPasarKliwon_2.set('fieldLabels', {'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', });
lyr_BatasKecamatan_3.set('fieldLabels', {'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', });
lyr_BatasKelurahan_4.set('fieldLabels', {'NAMOBJ': 'no label', });
lyr_PasarTitikAcuan_5.set('fieldLabels', {'Name': 'no label', 'Gambar': 'header label', });
lyr_IndustriMenengah_6.set('fieldLabels', {'title': 'no label', 'label': 'no label', 'distance': 'no label', });
lyr_IndustriMenengah_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});