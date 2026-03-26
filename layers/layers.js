var wms_layers = [];


        var lyr_Satellitegoogle_0 = new ol.layer.Tile({
            'title': 'Satellite google',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_StradePosta_1 = new ol.format.GeoJSON();
var features_StradePosta_1 = format_StradePosta_1.readFeatures(json_StradePosta_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StradePosta_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StradePosta_1.addFeatures(features_StradePosta_1);
var lyr_StradePosta_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StradePosta_1, 
                style: style_StradePosta_1,
                popuplayertitle: 'Strade Posta',
                interactive: true,
    title: 'Strade Posta<br />\
    <img src="styles/legend/StradePosta_1_0.png" /> Spazzamento manuale 1 volta ogni 3 settimane<br />' });
var format_StradeLeonessacopia_2 = new ol.format.GeoJSON();
var features_StradeLeonessacopia_2 = format_StradeLeonessacopia_2.readFeatures(json_StradeLeonessacopia_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StradeLeonessacopia_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StradeLeonessacopia_2.addFeatures(features_StradeLeonessacopia_2);
var lyr_StradeLeonessacopia_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StradeLeonessacopia_2, 
                style: style_StradeLeonessacopia_2,
                popuplayertitle: 'Strade Leonessa copia',
                interactive: true,
    title: 'Strade Leonessa copia<br />\
    <img src="styles/legend/StradeLeonessacopia_2_0.png" /> Spazzamento manuale 1 volta ogni 2 settimane<br />' });
var format_StradeLeonessa_3 = new ol.format.GeoJSON();
var features_StradeLeonessa_3 = format_StradeLeonessa_3.readFeatures(json_StradeLeonessa_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StradeLeonessa_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StradeLeonessa_3.addFeatures(features_StradeLeonessa_3);
var lyr_StradeLeonessa_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StradeLeonessa_3, 
                style: style_StradeLeonessa_3,
                popuplayertitle: 'Strade Leonessa',
                interactive: true,
    title: 'Strade Leonessa<br />\
    <img src="styles/legend/StradeLeonessa_3_0.png" /> Spazzamento meccanico 1 volta ogni 2 settimane<br />\
    <img src="styles/legend/StradeLeonessa_3_1.png" /> Spazzamento meccanico 1 volta ogni 3 mesi<br />' });
var format_PiazzeLeonessacopia_4 = new ol.format.GeoJSON();
var features_PiazzeLeonessacopia_4 = format_PiazzeLeonessacopia_4.readFeatures(json_PiazzeLeonessacopia_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PiazzeLeonessacopia_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PiazzeLeonessacopia_4.addFeatures(features_PiazzeLeonessacopia_4);
var lyr_PiazzeLeonessacopia_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PiazzeLeonessacopia_4, 
                style: style_PiazzeLeonessacopia_4,
                popuplayertitle: 'Piazze Leonessa copia',
                interactive: true,
    title: 'Piazze Leonessa copia<br />\
    <img src="styles/legend/PiazzeLeonessacopia_4_0.png" /> Spazzamento manuale 1 volta ogni 2 settimane<br />' });
var format_PiazzeLeonessa_5 = new ol.format.GeoJSON();
var features_PiazzeLeonessa_5 = format_PiazzeLeonessa_5.readFeatures(json_PiazzeLeonessa_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PiazzeLeonessa_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PiazzeLeonessa_5.addFeatures(features_PiazzeLeonessa_5);
var lyr_PiazzeLeonessa_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PiazzeLeonessa_5, 
                style: style_PiazzeLeonessa_5,
                popuplayertitle: 'Piazze Leonessa',
                interactive: true,
    title: 'Piazze Leonessa<br />\
    <img src="styles/legend/PiazzeLeonessa_5_0.png" /> Spazzamento meccanico 1 volta ogni 2 settimane<br />\
    <img src="styles/legend/PiazzeLeonessa_5_1.png" /> Spazzamento meccanico 1 volta ogni 3 mesi<br />\
    <img src="styles/legend/PiazzeLeonessa_5_2.png" /> Spazzamento meccanico 1 volta al mese<br />' });
var format_StradeMicigliano_6 = new ol.format.GeoJSON();
var features_StradeMicigliano_6 = format_StradeMicigliano_6.readFeatures(json_StradeMicigliano_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StradeMicigliano_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StradeMicigliano_6.addFeatures(features_StradeMicigliano_6);
var lyr_StradeMicigliano_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StradeMicigliano_6, 
                style: style_StradeMicigliano_6,
                popuplayertitle: 'Strade Micigliano',
                interactive: true,
    title: 'Strade Micigliano<br />\
    <img src="styles/legend/StradeMicigliano_6_0.png" /> Spazamento strade Micigliano 1 volta a settimana<br />' });
var format_Spazzamentomanuale1settimana_7 = new ol.format.GeoJSON();
var features_Spazzamentomanuale1settimana_7 = format_Spazzamentomanuale1settimana_7.readFeatures(json_Spazzamentomanuale1settimana_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Spazzamentomanuale1settimana_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Spazzamentomanuale1settimana_7.addFeatures(features_Spazzamentomanuale1settimana_7);
var lyr_Spazzamentomanuale1settimana_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Spazzamentomanuale1settimana_7, 
                style: style_Spazzamentomanuale1settimana_7,
                popuplayertitle: 'Spazzamento manuale 1/settimana',
                interactive: true,
                title: '<img src="styles/legend/Spazzamentomanuale1settimana_7.png" /> Spazzamento manuale 1/settimana'
            });
var format_StradeBorbona_8 = new ol.format.GeoJSON();
var features_StradeBorbona_8 = format_StradeBorbona_8.readFeatures(json_StradeBorbona_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StradeBorbona_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StradeBorbona_8.addFeatures(features_StradeBorbona_8);
var lyr_StradeBorbona_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StradeBorbona_8, 
                style: style_StradeBorbona_8,
                popuplayertitle: 'Strade Borbona',
                interactive: true,
    title: 'Strade Borbona<br />\
    <img src="styles/legend/StradeBorbona_8_0.png" /> Spazzamento manuale 1 volta ogni 3 mesi<br />\
    <img src="styles/legend/StradeBorbona_8_1.png" /> Spazzamento manuale 1 volta al mese<br />' });
var format_PiazzeBorbona_9 = new ol.format.GeoJSON();
var features_PiazzeBorbona_9 = format_PiazzeBorbona_9.readFeatures(json_PiazzeBorbona_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PiazzeBorbona_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PiazzeBorbona_9.addFeatures(features_PiazzeBorbona_9);
var lyr_PiazzeBorbona_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PiazzeBorbona_9, 
                style: style_PiazzeBorbona_9,
                popuplayertitle: 'Piazze Borbona ',
                interactive: true,
    title: 'Piazze Borbona <br />\
    <img src="styles/legend/PiazzeBorbona_9_0.png" /> Spazzamento manuale 1 volta ogni 2 settimane<br />\
    <img src="styles/legend/PiazzeBorbona_9_1.png" /> Spazzamento manuale 1 volta ogni 3 mesi<br />\
    <img src="styles/legend/PiazzeBorbona_9_2.png" /> Spazzamento manuale 1 volta al mese<br />' });
var group_Borbona = new ol.layer.Group({
                                layers: [lyr_StradeBorbona_8,lyr_PiazzeBorbona_9,],
                                fold: 'close',
                                title: 'Borbona'});
var group_Micigliano = new ol.layer.Group({
                                layers: [lyr_StradeMicigliano_6,lyr_Spazzamentomanuale1settimana_7,],
                                fold: 'close',
                                title: 'Micigliano'});
var group_Leonessa = new ol.layer.Group({
                                layers: [lyr_StradeLeonessacopia_2,lyr_StradeLeonessa_3,lyr_PiazzeLeonessacopia_4,lyr_PiazzeLeonessa_5,],
                                fold: 'close',
                                title: 'Leonessa'});
var group_Posta = new ol.layer.Group({
                                layers: [lyr_StradePosta_1,],
                                fold: 'close',
                                title: 'Posta'});

lyr_Satellitegoogle_0.setVisible(true);lyr_StradePosta_1.setVisible(true);lyr_StradeLeonessacopia_2.setVisible(true);lyr_StradeLeonessa_3.setVisible(true);lyr_PiazzeLeonessacopia_4.setVisible(true);lyr_PiazzeLeonessa_5.setVisible(true);lyr_StradeMicigliano_6.setVisible(true);lyr_Spazzamentomanuale1settimana_7.setVisible(true);lyr_StradeBorbona_8.setVisible(true);lyr_PiazzeBorbona_9.setVisible(true);
var layersList = [lyr_Satellitegoogle_0,group_Posta,group_Leonessa,group_Micigliano,group_Borbona];
lyr_StradePosta_1.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'footway': 'footway', 'oneway:bus': 'oneway:bus', 'oneway:bicycle': 'oneway:bicycle', 'ford': 'ford', 'turn:lanes:forward': 'turn:lanes:forward', 'lanes:forward': 'lanes:forward', 'motor_vehicle': 'motor_vehicle', 'alt_name': 'alt_name', 'bicycle': 'bicycle', 'source:name': 'source:name', 'maxspeed': 'maxspeed', 'service': 'service', 'access': 'access', 'bridge:name': 'bridge:name', 'bridge': 'bridge', 'tunnel:name': 'tunnel:name', 'tunnel': 'tunnel', 'maxheight:signed': 'maxheight:signed', 'layer': 'layer', 'sidewalk': 'sidewalk', 'cycleway': 'cycleway', 'foot': 'foot', 'note:it': 'note:it', 'description': 'description', 'sac_scale': 'sac_scale', 'tracktype': 'tracktype', 'surface': 'surface', 'ref': 'ref', 'oneway': 'oneway', 'name': 'name', 'lanes': 'lanes', 'Spazzamento manuale': 'Spazzamento manuale', });
lyr_StradeLeonessacopia_2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'old_ref': 'old_ref', 'description': 'description', 'width': 'width', 'tactile_paving': 'tactile_paving', 'ramp': 'ramp', 'handrail': 'handrail', 'cycleway:right': 'cycleway:right', 'service': 'service', 'passage_type': 'passage_type', 'junction': 'junction', 'piste:type': 'piste:type', 'piste:difficulty': 'piste:difficulty', 'tracktype': 'tracktype', 'motor_vehicle': 'motor_vehicle', 'incline': 'incline', 'horse': 'horse', 'foot': 'foot', 'bicycle': 'bicycle', 'note:it': 'note:it', 'bridge': 'bridge', 'trail_visibility': 'trail_visibility', 'sac_scale': 'sac_scale', 'tunnel': 'tunnel', 'layer': 'layer', 'ref': 'ref', 'lanes': 'lanes', 'surface': 'surface', 'smoothness': 'smoothness', 'sidewalk:both:surface': 'sidewalk:both:surface', 'sidewalk': 'sidewalk', 'oneway': 'oneway', 'name': 'name', 'lit': 'lit', 'lane_markings': 'lane_markings', 'cycleway:both': 'cycleway:both', 'Frequenza lavaggio': 'Frequenza lavaggio', 'Frequenza spazzamento meccanico': 'Frequenza spazzamento meccanico', 'Frequenza spazzamento manuale': 'Frequenza spazzamento manuale', });
lyr_StradeLeonessa_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'old_ref': 'old_ref', 'description': 'description', 'width': 'width', 'tactile_paving': 'tactile_paving', 'ramp': 'ramp', 'handrail': 'handrail', 'cycleway:right': 'cycleway:right', 'service': 'service', 'passage_type': 'passage_type', 'junction': 'junction', 'piste:type': 'piste:type', 'piste:difficulty': 'piste:difficulty', 'tracktype': 'tracktype', 'motor_vehicle': 'motor_vehicle', 'incline': 'incline', 'horse': 'horse', 'foot': 'foot', 'bicycle': 'bicycle', 'note:it': 'note:it', 'bridge': 'bridge', 'trail_visibility': 'trail_visibility', 'sac_scale': 'sac_scale', 'tunnel': 'tunnel', 'layer': 'layer', 'ref': 'ref', 'lanes': 'lanes', 'surface': 'surface', 'smoothness': 'smoothness', 'sidewalk:both:surface': 'sidewalk:both:surface', 'sidewalk': 'sidewalk', 'oneway': 'oneway', 'name': 'name', 'lit': 'lit', 'lane_markings': 'lane_markings', 'cycleway:both': 'cycleway:both', 'Frequenza lavaggio': 'Frequenza lavaggio', 'Frequenza spazzamento meccanico': 'Frequenza spazzamento meccanico', 'Frequenza spazzamento manuale': 'Frequenza spazzamento manuale', });
lyr_PiazzeLeonessacopia_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Piazza': 'Piazza', 'S. mecc.': 'S. mecc.', 'S. manua': 'S. manua', 'Lav strad': 'Lav strad', });
lyr_PiazzeLeonessa_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Piazza': 'Piazza', 'S. mecc.': 'S. mecc.', 'S. manua': 'S. manua', 'Lav strad': 'Lav strad', });
lyr_StradeMicigliano_6.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'tunnel:name': 'tunnel:name', 'condition': 'condition', 'maxspeed': 'maxspeed', 'construction': 'construction', 'junction': 'junction', 'layer': 'layer', 'bridge': 'bridge', 'foot': 'foot', 'embankment': 'embankment', 'tunnel': 'tunnel', 'access': 'access', 'oneway': 'oneway', 'tracktype': 'tracktype', 'note:it': 'note:it', 'trail_visibility': 'trail_visibility', 'sac_scale': 'sac_scale', 'service': 'service', 'surface': 'surface', 'ref': 'ref', 'name': 'name', 'lanes': 'lanes', 'Frequenza manuale': 'Frequenza manuale', });
lyr_Spazzamentomanuale1settimana_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Piazza': 'Piazza', 'Pulizia': 'Pulizia', });
lyr_StradeBorbona_8.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'oneway': 'oneway', 'service': 'service', 'alt_name': 'alt_name', 'ref': 'ref', 'tracktype': 'tracktype', 'layer': 'layer', 'bridge': 'bridge', 'surface': 'surface', 'name': 'name', 'Frequenza di spazzamento': 'Frequenza di spazzamento', });
lyr_PiazzeBorbona_9.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Piazza': 'Piazza', 'Frequenza': 'Frequenza', });
lyr_StradePosta_1.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'footway': 'TextEdit', 'oneway:bus': 'TextEdit', 'oneway:bicycle': 'TextEdit', 'ford': 'TextEdit', 'turn:lanes:forward': 'TextEdit', 'lanes:forward': 'TextEdit', 'motor_vehicle': 'TextEdit', 'alt_name': 'TextEdit', 'bicycle': 'TextEdit', 'source:name': 'TextEdit', 'maxspeed': 'TextEdit', 'service': 'TextEdit', 'access': 'TextEdit', 'bridge:name': 'TextEdit', 'bridge': 'TextEdit', 'tunnel:name': 'TextEdit', 'tunnel': 'TextEdit', 'maxheight:signed': 'TextEdit', 'layer': 'TextEdit', 'sidewalk': 'TextEdit', 'cycleway': 'TextEdit', 'foot': 'TextEdit', 'note:it': 'TextEdit', 'description': 'TextEdit', 'sac_scale': 'TextEdit', 'tracktype': 'TextEdit', 'surface': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'name': 'TextEdit', 'lanes': 'TextEdit', 'Spazzamento manuale': 'TextEdit', });
lyr_StradeLeonessacopia_2.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'old_ref': 'TextEdit', 'description': 'TextEdit', 'width': 'TextEdit', 'tactile_paving': 'TextEdit', 'ramp': 'TextEdit', 'handrail': 'TextEdit', 'cycleway:right': 'TextEdit', 'service': 'TextEdit', 'passage_type': 'TextEdit', 'junction': 'TextEdit', 'piste:type': 'TextEdit', 'piste:difficulty': 'TextEdit', 'tracktype': 'TextEdit', 'motor_vehicle': 'TextEdit', 'incline': 'TextEdit', 'horse': 'TextEdit', 'foot': 'TextEdit', 'bicycle': 'TextEdit', 'note:it': 'TextEdit', 'bridge': 'TextEdit', 'trail_visibility': 'TextEdit', 'sac_scale': 'TextEdit', 'tunnel': 'TextEdit', 'layer': 'TextEdit', 'ref': 'TextEdit', 'lanes': 'TextEdit', 'surface': 'TextEdit', 'smoothness': 'TextEdit', 'sidewalk:both:surface': 'TextEdit', 'sidewalk': 'TextEdit', 'oneway': 'TextEdit', 'name': 'TextEdit', 'lit': 'TextEdit', 'lane_markings': 'TextEdit', 'cycleway:both': 'TextEdit', 'Frequenza lavaggio': 'TextEdit', 'Frequenza spazzamento meccanico': 'TextEdit', 'Frequenza spazzamento manuale': 'TextEdit', });
lyr_StradeLeonessa_3.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'old_ref': 'TextEdit', 'description': 'TextEdit', 'width': 'TextEdit', 'tactile_paving': 'TextEdit', 'ramp': 'TextEdit', 'handrail': 'TextEdit', 'cycleway:right': 'TextEdit', 'service': 'TextEdit', 'passage_type': 'TextEdit', 'junction': 'TextEdit', 'piste:type': 'TextEdit', 'piste:difficulty': 'TextEdit', 'tracktype': 'TextEdit', 'motor_vehicle': 'TextEdit', 'incline': 'TextEdit', 'horse': 'TextEdit', 'foot': 'TextEdit', 'bicycle': 'TextEdit', 'note:it': 'TextEdit', 'bridge': 'TextEdit', 'trail_visibility': 'TextEdit', 'sac_scale': 'TextEdit', 'tunnel': 'TextEdit', 'layer': 'TextEdit', 'ref': 'TextEdit', 'lanes': 'TextEdit', 'surface': 'TextEdit', 'smoothness': 'TextEdit', 'sidewalk:both:surface': 'TextEdit', 'sidewalk': 'TextEdit', 'oneway': 'TextEdit', 'name': 'TextEdit', 'lit': 'TextEdit', 'lane_markings': 'TextEdit', 'cycleway:both': 'TextEdit', 'Frequenza lavaggio': 'TextEdit', 'Frequenza spazzamento meccanico': 'TextEdit', 'Frequenza spazzamento manuale': 'TextEdit', });
lyr_PiazzeLeonessacopia_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Piazza': 'TextEdit', 'S. mecc.': 'TextEdit', 'S. manua': 'TextEdit', 'Lav strad': 'TextEdit', });
lyr_PiazzeLeonessa_5.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Piazza': 'TextEdit', 'S. mecc.': 'TextEdit', 'S. manua': 'TextEdit', 'Lav strad': 'TextEdit', });
lyr_StradeMicigliano_6.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'tunnel:name': 'TextEdit', 'condition': 'TextEdit', 'maxspeed': 'TextEdit', 'construction': 'TextEdit', 'junction': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'foot': 'TextEdit', 'embankment': 'TextEdit', 'tunnel': 'TextEdit', 'access': 'TextEdit', 'oneway': 'TextEdit', 'tracktype': 'TextEdit', 'note:it': 'TextEdit', 'trail_visibility': 'TextEdit', 'sac_scale': 'TextEdit', 'service': 'TextEdit', 'surface': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'lanes': 'TextEdit', 'Frequenza manuale': 'TextEdit', });
lyr_Spazzamentomanuale1settimana_7.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Piazza': 'TextEdit', 'Pulizia': 'TextEdit', });
lyr_StradeBorbona_8.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'oneway': 'TextEdit', 'service': 'TextEdit', 'alt_name': 'TextEdit', 'ref': 'TextEdit', 'tracktype': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'surface': 'TextEdit', 'name': 'TextEdit', 'Frequenza di spazzamento': 'TextEdit', });
lyr_PiazzeBorbona_9.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Piazza': 'TextEdit', 'Frequenza': 'TextEdit', });
lyr_StradePosta_1.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'footway': 'no label', 'oneway:bus': 'no label', 'oneway:bicycle': 'no label', 'ford': 'no label', 'turn:lanes:forward': 'no label', 'lanes:forward': 'no label', 'motor_vehicle': 'no label', 'alt_name': 'no label', 'bicycle': 'no label', 'source:name': 'no label', 'maxspeed': 'no label', 'service': 'no label', 'access': 'no label', 'bridge:name': 'no label', 'bridge': 'no label', 'tunnel:name': 'no label', 'tunnel': 'no label', 'maxheight:signed': 'no label', 'layer': 'no label', 'sidewalk': 'no label', 'cycleway': 'no label', 'foot': 'no label', 'note:it': 'no label', 'description': 'no label', 'sac_scale': 'no label', 'tracktype': 'no label', 'surface': 'no label', 'ref': 'no label', 'oneway': 'no label', 'name': 'no label', 'lanes': 'no label', 'Spazzamento manuale': 'no label', });
lyr_StradeLeonessacopia_2.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'old_ref': 'no label', 'description': 'no label', 'width': 'no label', 'tactile_paving': 'no label', 'ramp': 'no label', 'handrail': 'no label', 'cycleway:right': 'no label', 'service': 'no label', 'passage_type': 'no label', 'junction': 'no label', 'piste:type': 'no label', 'piste:difficulty': 'no label', 'tracktype': 'no label', 'motor_vehicle': 'no label', 'incline': 'no label', 'horse': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'note:it': 'no label', 'bridge': 'no label', 'trail_visibility': 'no label', 'sac_scale': 'no label', 'tunnel': 'no label', 'layer': 'no label', 'ref': 'no label', 'lanes': 'no label', 'surface': 'no label', 'smoothness': 'no label', 'sidewalk:both:surface': 'no label', 'sidewalk': 'no label', 'oneway': 'no label', 'name': 'no label', 'lit': 'no label', 'lane_markings': 'no label', 'cycleway:both': 'no label', 'Frequenza lavaggio': 'no label', 'Frequenza spazzamento meccanico': 'no label', 'Frequenza spazzamento manuale': 'no label', });
lyr_StradeLeonessa_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'old_ref': 'no label', 'description': 'no label', 'width': 'no label', 'tactile_paving': 'no label', 'ramp': 'no label', 'handrail': 'no label', 'cycleway:right': 'no label', 'service': 'no label', 'passage_type': 'no label', 'junction': 'no label', 'piste:type': 'no label', 'piste:difficulty': 'no label', 'tracktype': 'no label', 'motor_vehicle': 'no label', 'incline': 'no label', 'horse': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'note:it': 'no label', 'bridge': 'no label', 'trail_visibility': 'no label', 'sac_scale': 'no label', 'tunnel': 'no label', 'layer': 'no label', 'ref': 'no label', 'lanes': 'no label', 'surface': 'no label', 'smoothness': 'no label', 'sidewalk:both:surface': 'no label', 'sidewalk': 'no label', 'oneway': 'no label', 'name': 'no label', 'lit': 'no label', 'lane_markings': 'no label', 'cycleway:both': 'no label', 'Frequenza lavaggio': 'no label', 'Frequenza spazzamento meccanico': 'no label', 'Frequenza spazzamento manuale': 'no label', });
lyr_PiazzeLeonessacopia_4.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Piazza': 'no label', 'S. mecc.': 'no label', 'S. manua': 'no label', 'Lav strad': 'no label', });
lyr_PiazzeLeonessa_5.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Piazza': 'no label', 'S. mecc.': 'no label', 'S. manua': 'no label', 'Lav strad': 'no label', });
lyr_StradeMicigliano_6.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'tunnel:name': 'no label', 'condition': 'no label', 'maxspeed': 'no label', 'construction': 'no label', 'junction': 'no label', 'layer': 'no label', 'bridge': 'no label', 'foot': 'no label', 'embankment': 'no label', 'tunnel': 'no label', 'access': 'no label', 'oneway': 'no label', 'tracktype': 'no label', 'note:it': 'no label', 'trail_visibility': 'no label', 'sac_scale': 'no label', 'service': 'no label', 'surface': 'no label', 'ref': 'no label', 'name': 'no label', 'lanes': 'no label', 'Frequenza manuale': 'no label', });
lyr_Spazzamentomanuale1settimana_7.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Piazza': 'no label', 'Pulizia': 'no label', });
lyr_StradeBorbona_8.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'oneway': 'no label', 'service': 'no label', 'alt_name': 'no label', 'ref': 'no label', 'tracktype': 'no label', 'layer': 'no label', 'bridge': 'no label', 'surface': 'no label', 'name': 'no label', 'Frequenza di spazzamento': 'no label', });
lyr_PiazzeBorbona_9.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Piazza': 'no label', 'Frequenza': 'no label', });
lyr_PiazzeBorbona_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});