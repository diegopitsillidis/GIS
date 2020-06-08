function draw_mapBing2() {
	var map_opsBing2 = {
		credentials: 'ArfLwxqrnk9X0SYQcFZjuVL6W_L-rkOflflXkCGsNf-1pScLnbD9tdTtw2qD0tvD',
		center: new Microsoft.Maps.Location(52.417, -3.573),
		zoom:7,
		mapTypeId:Microsoft.Maps.MapTypeId.road
	};
	
	var mapBing2 = new Microsoft.Maps.Map(document.getElementById("map_space"),map_opsBing2);
	
	//Load GeoJson Module
	Microsoft.Maps.loadModule('Microsoft.Maps.GeoJson', function () {
		//Parse GeoJson objects into a Bing Maps shape
		var shape = Microsoft.Maps.GeoJson.read(myGeoJson, {
			pointOptions: {
				color: 'blue'
			}
		});
		
		//Add the shape to the map
		mapBing2.entities.push(shape);
		
		//Parse GeoJson objects into a Bing Maps shape
		var shape2 = Microsoft.Maps.GeoJson.read(myGeoJson2, {
			pointOptions: {
				color: 'blue'
			}
		});
		
		//Add the shape to the map
		mapBing2.entities.push(shape2);
	});
}