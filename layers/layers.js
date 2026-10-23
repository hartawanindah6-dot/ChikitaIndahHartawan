var wms_layers = [];


        var lyr_citra_0 = new ol.layer.Tile({
            'title': 'citra',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_shp_kecamatan_ungaran_barat_1 = new ol.format.GeoJSON();
var features_shp_kecamatan_ungaran_barat_1 = format_shp_kecamatan_ungaran_barat_1.readFeatures(json_shp_kecamatan_ungaran_barat_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_shp_kecamatan_ungaran_barat_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_shp_kecamatan_ungaran_barat_1.addFeatures(features_shp_kecamatan_ungaran_barat_1);
var lyr_shp_kecamatan_ungaran_barat_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_shp_kecamatan_ungaran_barat_1, 
                style: style_shp_kecamatan_ungaran_barat_1,
                popuplayertitle: 'shp_kecamatan_ungaran_barat',
                interactive: true,
    title: 'shp_kecamatan_ungaran_barat<br />\
    <img src="styles/legend/shp_kecamatan_ungaran_barat_1_0.png" /> Bandarjo<br />\
    <img src="styles/legend/shp_kecamatan_ungaran_barat_1_1.png" /> Branjang<br />\
    <img src="styles/legend/shp_kecamatan_ungaran_barat_1_2.png" /> Candirejo<br />\
    <img src="styles/legend/shp_kecamatan_ungaran_barat_1_3.png" /> Genuk<br />\
    <img src="styles/legend/shp_kecamatan_ungaran_barat_1_4.png" /> Gogik<br />\
    <img src="styles/legend/shp_kecamatan_ungaran_barat_1_5.png" /> Kalisidi<br />\
    <img src="styles/legend/shp_kecamatan_ungaran_barat_1_6.png" /> Keji<br />\
    <img src="styles/legend/shp_kecamatan_ungaran_barat_1_7.png" /> Langensari<br />\
    <img src="styles/legend/shp_kecamatan_ungaran_barat_1_8.png" /> Lerep<br />\
    <img src="styles/legend/shp_kecamatan_ungaran_barat_1_9.png" /> Nyatnyono<br />\
    <img src="styles/legend/shp_kecamatan_ungaran_barat_1_10.png" /> Ungaran<br />\
    <img src="styles/legend/shp_kecamatan_ungaran_barat_1_11.png" /> <br />' });

lyr_citra_0.setVisible(true);lyr_shp_kecamatan_ungaran_barat_1.setVisible(true);
var layersList = [lyr_citra_0,lyr_shp_kecamatan_ungaran_barat_1];
lyr_shp_kecamatan_ungaran_barat_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'NAMOBJ': 'NAMOBJ', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', });
lyr_shp_kecamatan_ungaran_barat_1.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'NAMOBJ': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', });
lyr_shp_kecamatan_ungaran_barat_1.set('fieldLabels', {'OBJECTID_1': 'no label', 'NAMOBJ': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', });
lyr_shp_kecamatan_ungaran_barat_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});