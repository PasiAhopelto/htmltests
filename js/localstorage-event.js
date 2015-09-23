$(document).ready(function() {
	window.addEventListener('storage', valueChangeListener, false);
});

function valueChangeListener(event) {
	console.log("A")
	$('#info').html('Value changed from ' + event.oldValue + ' to ' + event.newValue);
}
