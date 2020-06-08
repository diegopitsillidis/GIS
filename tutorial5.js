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
}
