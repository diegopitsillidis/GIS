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