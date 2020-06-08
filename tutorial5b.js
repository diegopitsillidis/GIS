function draw_map5() {
	var map_centre5 = {lat: 51.6427, lng: -3.9346};
	var map_ops5 = {
		center: map_centre5,
		zoom:8,
		mapTypeId:google.maps.MapTypeId.ROADMAP
	};
	/*var map_centre = map.getCenter();*/
	
	var map5 = new google.maps.Map(document.getElementById("map_space"),map_ops5);
	
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
}
