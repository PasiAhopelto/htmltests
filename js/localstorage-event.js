$(document).ready(function() {
	window.addEventListener('storage', valueChangeListener, false);
});

function valueChangeListener(event) {
	$('#info').html(event.oldValue + ' -> ' + event.newValue);
}
