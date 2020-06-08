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