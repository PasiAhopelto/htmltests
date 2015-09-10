var mouseDownOnElement = 0;
var mouseAtX = 0;
var mouseAtY = 0;
var translateToX = 0;
var translateToY = 0;

function mouseDown(event) {
	mouseDownOnElement = event.target;
	mouseAtX = event.clientX - translateToX;
	mouseAtY = event.clientY - translateToY;
	mouseDownOnElement.setAttributeNS(null, "onmousemove", "dragWithMouse(event)");
	mouseDownOnElement.setAttributeNS(null, "onmouseout", "mouseUp(event)");
	mouseDownOnElement.setAttributeNS(null, "onmouseup", "mouseUp(event)");
}

function dragWithMouse(event) {
	translateToX = event.clientX - mouseAtX;
	translateToY = event.clientY - mouseAtY;
	mouseDownOnElement.setAttributeNS(null, "transform", "translate(" + translateToX + " " + translateToY + ")");
}

function mouseUp(event){
	if(mouseDownOnElement != 0) {
		mouseDownOnElement.removeAttributeNS(null, "onmousemove");
		mouseDownOnElement.removeAttributeNS(null, "onmouseout");
		mouseDownOnElement.removeAttributeNS(null, "onmouseup");
		mouseDownOnElement = 0;
	}
}
