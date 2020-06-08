function draw_map() {
	var map_centre = {lat: 51.6427, lng: -3.9346};
	var map_ops = {
		center: map_centre,
		zoom:8,
		mapTypeId:google.maps.MapTypeId.ROADMAP
	};
	
	var map = new google.maps.Map(document.getElementById("map_space"),map_ops);
	
	map.addListener('click', function(e) {
          placeMarkerAndPanTo(e.latLng, map);
    });
}

function placeMarkerAndPanTo(latLng, map) {
        var marker = new google.maps.Marker({
          position: latLng,
          map: map
        });
        map.panTo(latLng);
		
		google.maps.event.addListener(marker,'click', function(){
		map.panTo(marker.position);
		map.setZoom(12);
		var iw = new google.maps.InfoWindow({
			content: '<b>LatLng:</b><br>' + latLng.toString(),
			position: latLng
		}).open(map);
	});
}
