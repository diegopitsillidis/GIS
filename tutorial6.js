function draw_map6() {
	var map_centre6 = {lat: 51.6427, lng: -3.9346};
	var map_ops6 = {
		center: map_centre6,
		zoom:8,
		//mapTypeId: google.maps.MapTypeId.ROADMAP
		disableDefaultUI: true, 
		mapTypeControl: true,
		mapTypeControlOptions: {
			mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'styled'],
			style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
			position: google.maps.ControlPosition.RIGHT
			},
		zoomControl: true,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.SMALL,
			position: google.maps.ControlPosition.RIGHT
			}
	};
	
	var mystyle = [
		{
       featureType: 'road',
       elementType: 'all',
       stylers: [
         { visibility: 'off' }
       ]
     } ,
     {
       featureType: 'administrative.locality',
       elementType: 'all',
       stylers: [
          { lightness: 40 }, 
          { visibility: 'on' }
       ]
      }

	];
	
	var styledMapType = new google.maps.StyledMapType(mystyle,{
      map: map6,
      name: 'MyStyle'
    });
		
	var map6 = new google.maps.Map(document.getElementById("map_space"),map_ops6);
	
	map6.mapTypes.set('styled', styledMapType);
	map6.setMapTypeId('styled');
	
	//newyork
	var src = "https://ces-web2.southwales.ac.uk/students/17136733/year3/GIS/newyork.kml";
	var kmlLayer = new google.maps.KmlLayer(src, {
		preserveViewport: true,
		map: map6
	});
	
	//councils
	var srcCouncils = "https://ces-web2.southwales.ac.uk/students/17136733/year3/GIS/councils.kml";
	var kmlLayerCouncils = new google.maps.KmlLayer(srcCouncils, {
		preserveViewport: true,
		map: map6
	});
	
	//earthquakes
	var srcEarthquakes = 'http://quakes.bgs.ac.uk/earthquakes/recent_uk_events.kml';
	var kmlLayerEarthquakes = new google.maps.KmlLayer(srcEarthquakes, {map: map6});
	
	//flight paths --- does not work
	//need to make airplane routes thick red line
	var srcFlights = "https://ces-web2.southwales.ac.uk/students/17136733/year3/GIS/flights.kml";
	var kmlLayerFlights = new google.maps.KmlLayer(srcFlights, {
		preserveViewport: true,
		map: map6
	});
}