function draw_map4() {
	var map_centre4 = {lat: 52.417, lng: -3.573};
	var map_ops4 = {
		center: map_centre4,
		zoom:7,
		mapTypeId:google.maps.MapTypeId.ROADMAP
	};
	/*var map_centre = map.getCenter();*/
	var map4 = new google.maps.Map(document.getElementById("map_space"),map_ops4);
}

function draw_map5() {
	var map_centre5 = {lat: 51.6427, lng: -3.9346};
	var map_ops5 = {
		center: map_centre5,
		zoom:8,
		mapTypeId:google.maps.MapTypeId.ROADMAP
	};
	/*var map_centre = map.getCenter();*/
	
	var map5 = new google.maps.Map(document.getElementById("map_space"),map_ops5);
	
	/*---Liberty Stadium---*/
	
	var liberty = 
	{
		url: 'https://ces-web2.southwales.ac.uk/students/17136733/year3/GIS/images/liberty.png',
		size: new google.maps.Size(227,200),
		origin: new google.maps.Point(0,0),
		anchor: new google.maps.Point(17,30),
		scaledSize: new google.maps.Size(25, 25)
	};
	var markerops5 = {position: map_centre5, map:map5, icon:liberty, title:"Liberty Stadium"}
	var marker5 = new google.maps.Marker(markerops5);
	
	/*---Principality Stadium---*/
	
	var principality = 
	{
		url: 'https://ces-web2.southwales.ac.uk/students/17136733/year3/GIS/images/principality.png',
		size: new google.maps.Size(1170,702),
		origin: new google.maps.Point(0,0),
		anchor: new google.maps.Point(17,30),
		scaledSize: new google.maps.Size(30, 15)
	};
	var marker2ops5 = {position: new google.maps.LatLng(51.4782, -3.1826), map:map5, icon:principality, title:"Pricipality Stadium"}
	var marker5 = new google.maps.Marker(marker2ops5);
	
	/*---Cardiff Castle---*/
	
	var castle = 
	{
		url: 'https://ces-web2.southwales.ac.uk/students/17136733/year3/GIS/images/castle.png',
		size: new google.maps.Size(512,512),
		origin: new google.maps.Point(0,0),
		anchor: new google.maps.Point(17,30),
		scaledSize: new google.maps.Size(25, 25)
	};
	var castle1ops5 = {position: new google.maps.LatLng(51.4822, -3.1812), map:map5, icon:castle, title:"Cardiff Castle"}
	var marker5 = new google.maps.Marker(castle1ops5);
	
	/*---Caerphilly Castle---*/
	
	var castle2ops5 = {position: new google.maps.LatLng(51.5761, -3.2202), map:map5, icon:castle, title:"Caerphilly Castle"}
	var marker5 = new google.maps.Marker(castle2ops5);
	
	/*---Ruperra Castle---*/
	
	var castle3ops5 = {position: new google.maps.LatLng(51.5703, -3.1272), map:map5, icon:castle, title:"Ruperra Castle"}
	var marker5 = new google.maps.Marker(castle3ops5);
	
	/*---Tretower Castle---*/
	
	var castle4ops5 = {position: new google.maps.LatLng(51.8838, -3.1856), map:map5, icon:castle, title:"Tretower Castle"}
	var marker5 = new google.maps.Marker(castle4ops5);
	

	/*---Dublin---*/
	var my_path = [
	{lat:51.3982,lng: -3.3455},
	{lat:53.4264,lng: -6.2499}						
	];		
	
	var plotline = new google.maps.Polyline({
		path: my_path,
		strokeColor: '#202080',
		strokeOpacity: 0.7,
		strokeWeight: 5
	});
	plotline.setMap(map5);
	
	/*---Edinburgh---*/
	var my_path = [
	{lat:51.3982,lng: -3.3455},
	{lat:55.9508,lng: -3.3615}						
	];	
	
	var plotline = new google.maps.Polyline({
		path: my_path,
		strokeColor: '#202080',
		strokeOpacity: 0.7,
		strokeWeight: 5
	});
	plotline.setMap(map5);
	
	/*---Leeds---*/
	var my_path = [
	{lat:51.3982,lng: -3.3455},
	{lat:53.8679,lng: -1.6615}						
	];	
	
	var plotline = new google.maps.Polyline({
		path: my_path,
		strokeColor: '#202080',
		strokeOpacity: 0.7,
		strokeWeight: 5
	});
	plotline.setMap(map5);
	
	/*---Bangor---*/
	var my_path = [
	{lat:51.3982,lng: -3.3455},
	{lat:53.2274,lng: -4.1293}						
	];	
	
	var plotline = new google.maps.Polyline({
		path: my_path,
		strokeColor: '#202080',
		strokeOpacity: 0.7,
		strokeWeight: 5
	});
	plotline.setMap(map5);
	
	/*---Southampton---*/
	var my_path = [
	{lat:51.3982,lng: -3.3455},
	{lat:50.9515,lng: -1.3577}						
	];	
	
	var plotline = new google.maps.Polyline({
		path: my_path,
		strokeColor: '#202080',
		strokeOpacity: 0.7,
		strokeWeight: 5
	});
	plotline.setMap(map5);
	
	/*---Stanstead---*/
	var my_path = [
	{lat:51.3982,lng: -3.3455},
	{lat:51.8860,lng: 0.2389}						
	];	
	
	var plotline = new google.maps.Polyline({
		path: my_path,
		strokeColor: '#202080',
		strokeOpacity: 0.7,
		strokeWeight: 5
	});
	plotline.setMap(map5);
	
	/*---Exeter---*/
	var my_path = [
	{lat:51.3982,lng: -3.3455},
	{lat:50.7344,lng: -3.4204}						
	];	
	
	var plotline = new google.maps.Polyline({
		path: my_path,
		strokeColor: '#202080',
		strokeOpacity: 0.7,
		strokeWeight: 5
	});
	plotline.setMap(map5);
	
	/*---Wind Farms---*/
	var area1 = [
	{lat:51.86,lng: -3.95},
	{lat:51.93,lng: -3.85},
	{lat:52.01,lng: -3.72},
	{lat:51.96,lng: -3.65},					
	{lat:51.87,lng: -3.60},
	{lat:51.86,lng: -3.76},
	{lat:51.84,lng: -3.91},
	{lat:51.86,lng: -3.95}	
	];
	
	var plotline = new google.maps.Polyline({
		path: area1,
		strokeColor: '#208020',
		strokeOpacity: 0.7,
		strokeWeight: 5
	});
	plotline.setMap(map5);
	
	var area2 = [
	{lat:53.10,lng: -3.90},
	{lat:52.81,lng: -3.59},
	{lat:52.75,lng: -3.82},
	{lat:52.83,lng: -4.05},
	{lat:53.10,lng: -3.90}
	];
	
	var plotline = new google.maps.Polyline({
		path: area2,
		strokeColor: '#208020',
		strokeOpacity: 0.7,
		strokeWeight: 5
	});
	plotline.setMap(map5);
	
	/* --- Info Windows --- */
	var iw1 = new google.maps.InfoWindow({
		content: '<b>Holyhead Port</b><br><a href="https://en.wikipedia.org/wiki/Port_of_Holyhead">Wikipedia</a>' ,
		position: {lat:53.309, lng:-4.629}
	});
	var iw2 = new google.maps.InfoWindow({
		content: '<b>Fishguard Port</b><br><a href="https://en.wikipedia.org/wiki/Fishguard">Wikipedia</a>',
		position: {lat:52.009, lng:-4.986}
	});
	var iw3 = new google.maps.InfoWindow({
		content: '<b>Cardiff Port</b><br><a href="https://en.wikipedia.org/wiki/Cardiff_Docks">Wikipedia</a>',
		position: {lat:51.457, lng:-3.158}
	});
	iw1.open(map5);
	iw2.open(map5);
	iw3.open(map5);

}

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


//-----BING MAP -------
function draw_mapBing() {
	var map_opsBing = {
		credentials: 'ArfLwxqrnk9X0SYQcFZjuVL6W_L-rkOflflXkCGsNf-1pScLnbD9tdTtw2qD0tvD',
		center: new Microsoft.Maps.Location(52.417, -3.573),
		zoom:7,
		mapTypeId:Microsoft.Maps.MapTypeId.road
	};
	
	//---PIN
	var pin = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(51.4782, -3.1826), {
            title: 'Principality stadium',
            subTitle: 'Cardiff',
            text: '1'
    });

	var mapBing = new Microsoft.Maps.Map(document.getElementById("map_space"),map_opsBing);
	mapBing.entities.push(pin);
	
	//---POLYLINE
	//Create array of locations
    var coors = [new Microsoft.Maps.Location(51.3982,-3.3455), new Microsoft.Maps.Location(55.9508,-3.36155)];
    //Create a polyline
    var line = new Microsoft.Maps.Polyline(coors, {
        strokeColor: 'red',
        strokeThickness: 3,
        strokeDashArray: [4, 4]
    });
    //Add the polyline to map
    mapBing.entities.push(line);
	
	//---POLYGON
	var center = mapBing.getCenter();

        //Create array of locations to form a ring.
        var exteriorRing = [
            center,
            new Microsoft.Maps.Location(center.latitude - 0.5, center.longitude - 1),
            new Microsoft.Maps.Location(center.latitude - 0.5, center.longitude + 1),
            center
        ];

        //Create a polygon
        var polygon = new Microsoft.Maps.Polygon(exteriorRing, {
            fillColor: 'rgba(0, 255, 0, 0.5)',
            strokeColor: 'red',
            strokeThickness: 2
        });

        //Add the polygon to map
        mapBing.entities.push(polygon);
		
		//info box
		var infobox = new Microsoft.Maps.Infobox(center, {
            title: 'Map Center',
            description: 'Wales'
        });
	infobox.setMap(mapBing);
}


