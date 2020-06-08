function draw_mapBing() {
	var myStyle = {
            "elements": {
                "waterPoint": { "iconColor": "#a1e0ff" },
                "transportation": { "strokeColor": "#aa6de0" },
                "road": { "fillColor": "#b892db" },
                "railway": { "strokeColor": "#a495b2" },
                "structure": { "fillColor": "#ffffff" },
                "runway": { "fillColor": "#ff7fed" },
                "area": { "fillColor": "#f39ebd" },
                "political": { "borderStrokeColor": "#fe6850", "borderOutlineColor": "#55ffff" },
                "point": { "iconColor": "#ffffff", "fillColor": "#000000", "strokeColor": "#DB4680" },
                "transit": { "fillColor": "#AA6DE0" }
            },
            "version": "1.0" 
    };
	
	mapBing = new Microsoft.Maps.Map('#map_space', {
        credentials: 'ArfLwxqrnk9X0SYQcFZjuVL6W_L-rkOflflXkCGsNf-1pScLnbD9tdTtw2qD0tvD',
		center: new Microsoft.Maps.Location(52.417, -3.573),
		zoom:7,
        customMapStyle: myStyle
    });
	
	//Load GeoJson Module
	Microsoft.Maps.loadModule('Microsoft.Maps.GeoJson', function () {
		//Parse GeoJson objects into Bing maps
		var pins = Microsoft.Maps.GeoJson.read(Deaths, {
		});
		
		//Add the pins to the map
		mapBing.entities.push(pins);
	});
}
