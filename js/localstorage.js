$(document).ready(function() {
	updateStatus();
});

function statusInEnglish() {
	return Modernizr.localstorage ? "enabled" : "disabled";
}

function updateStatus() {
	$('#status').html('Local storage is ' + statusInEnglish());
}