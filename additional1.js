var map_centre = {lat: 51.6427, lng: -3.9346};
function draw_map() {
	var map_ops = {
		center: map_centre,
		zoom:8,
		//mapTypeId: google.maps.MapTypeId.ROADMAP
		disableDefaultUI: true, 
		mapTypeControl: true,
		zoomControl: true,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.SMALL,
			position: google.maps.ControlPosition.RIGHT
		},
		scaleControl: true,
		streetViewControl: true,
		streetViewControlOptions: {
			position: google.maps.ControlPosition.TOP_CENTER
		},
		fullscreenControl: true,
		fullscreenControlOptions: {
			position: google.maps.ControlPosition.TOP_CENTER
		},
		rotateControl: true,
		rotateControlOptions: {
			position: google.maps.ControlPosition.TOP_CENTER
		},
		
	};
	
	var map = new google.maps.Map(document.getElementById("map_space"),map_ops);
	
		// Create the DIV to hold the control and call the CenterControl()
        // constructor passing in this DIV.
        var centerControlDiv = document.createElement('div');
        var centerControl = new CenterControl(centerControlDiv, map);

        centerControlDiv.index = 1;
        map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);
	
	
	
	//postcode boundaries
	var srcPostbound = 'https://www.freemaptools.com/download/postcode-boundaries/postcode-boundaries.kml';
	var kmlLayerPostbound = new google.maps.KmlLayer(srcPostbound, {map: map});
}

function CenterControl(controlDiv, map) {

        // CSS for the control border.
        var controlUI = document.createElement('div');
        controlUI.style.backgroundColor = '#fff';
        controlUI.style.border = '2px solid #fff';
        controlUI.style.borderRadius = '3px';
        controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
        controlUI.style.cursor = 'pointer';
        controlUI.style.marginBottom = '22px';
		controlUI.style.marginTop = '8px';
        controlUI.style.textAlign = 'centre';
        controlUI.title = 'Click to recentre the map';
        controlDiv.appendChild(controlUI);

        // CSS for the control interior.
        var controlText = document.createElement('div');
        controlText.style.color = 'rgb(25,25,25)';
        controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
        controlText.style.fontSize = '16px';
        controlText.style.lineHeight = '38px';
        controlText.style.paddingLeft = '5px';
        controlText.style.paddingRight = '5px';
        controlText.innerHTML = 'Centre Map';
        controlUI.appendChild(controlText);

        // click event listeners
        controlUI.addEventListener('click', function() {
          map.setCenter(map_centre);
        });

      }