var mapPanel = document.getElementById("mapPanel");

function updateLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(updateMap)
    } else {
        mapPanel.innerHTML = "Geolocation not supported."
    }
}

function updateMap(position) {
    var infoWindow = new google.maps.InfoWindow({
        map: new google.maps.Map(mapPanel, { 
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
    	}),
    	position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
        content: 'Getting elevation...'
    });
    infoWindow.map.setCenter(infoWindow.position);
    new google.maps.ElevationService().getElevationForLocations( { 'locations': [ infoWindow.position ] }, function (results, status) {
	var elevation = 'You are at unknown elevation';
        if (status == google.maps.ElevationStatus.OK) {
	    elevation = 'You may be at ' + Math.round(results[0].elevation) + ' m elevation.';
	}
	else {
	    console.error('Failed to get elevation: ' + status);
	}
	infoWindow.setContent(elevation);
	infoWindow.open(infoWindow.map);
    });
}
