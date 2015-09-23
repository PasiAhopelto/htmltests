$(document).ready(function() {
	updateStatus();
	storeAndGet();
});

function statusInEnglish() {
	return Modernizr.localstorage ? "enabled" : "disabled";
}

function updateStatus() {
	$('#status').html('Local storage is ' + statusInEnglish());
}

function storeAndGet() {
	if(Modernizr.localstorage) {
		localStorage.setItem("test", new Date());
		$('#values').html(localStorage.getItem("test"));
	}
}
