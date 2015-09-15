var canvas = document.getElementById("picture");
var context = canvas.getContext("2d");

drawRectangle();
drawText();
drawLines(); 

function drawRectangle() {
	context.fillRect(50, 50, 150, 150);
}

function drawText() {
	context.font = "48px sans-serif";
	context.fillText("Text", 200, 200);
}

function drawLines() {
	for (var x = 1; x < 600; x += 10) {
		context.moveTo(0, x);
		context.lineTo(x, x);
	}
	context.strokeStyle = "#eee";
	context.stroke();
}