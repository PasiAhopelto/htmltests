function updateLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(updateMap)
    } else {
        coordinatesPanel.innerHTML = "Geolocation not supported."
    }
}

function updateMap(position) {
    var map = new google.maps.Map(mapPanel, { 
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    var geoLocator = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    var infowindow = new google.maps.InfoWindow({
        map: map,
        position: geoLocator,
        content: 'You are here'
    });
    map.setCenter(geoLocator);
}

var mapPanel = document.getElementById("mapPanel");
