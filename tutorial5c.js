function draw_map5() {
	var map_centre5 = {lat: 51.6427, lng: -3.9346};
	var map_ops5 = {
		center: map_centre5,
		zoom:8,
		mapTypeId:google.maps.MapTypeId.ROADMAP
	};
	/*var map_centre = map.getCenter();*/
	
	var map5 = new google.maps.Map(document.getElementById("map_space"),map_ops5);
	
	/* --- Markers --- */
	/*Principaility Stadium*/
	var mkr1 = new google.maps.Marker({
		position:{lat:51.478,lng:-3.182},
		title:'Principaility Stadium',
		map:map5
	});
	/*Liberty Stadium*/
	var mkr2 = new google.maps.Marker({
		position:{lat:51.642,lng:-3.935},
		title: 'Liberty Stadium',
		map:map5
	});
	
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
	
	var iw4 = new google.maps.InfoWindow({
		content: '<b>Principaility</b><br><a href="https://en.wikipedia.org/wiki/Millennium_Stadium">Wikipedia</a>',
		position: {lat:51.457, lng:-3.158}
	});
	var iw5 = new google.maps.InfoWindow({
		content: '<b>Liberty Stadium</b><br><a href="https://en.wikipedia.org/wiki/Liberty_Stadium">Wikipedia</a>',
		position: {lat:51.457, lng:-3.158}
	});
	
	google.maps.event.addListener(mkr1,'click', function(){
		map5.panTo(mkr1.position);
		map5.setZoom(10);
		iw4.open(map5,mkr1)
	});
	
	google.maps.event.addListener(mkr2,'click', function(){
		map5.panTo(mkr2.position);
		map5.setZoom(10);
		iw4.open(map5,mkr2)
	});
	
	google.maps.event.addListener(map5,'click', function(event){
		map5.panTo(new google.maps.LatLng(event.latLng.lat(), event.latLng.lng));
		map5.setZoom(7);
		iw1.close();
		iw2.close();
	});
}