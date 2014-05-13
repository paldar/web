var canvas = $('drawingBoard');
var nameSpace = canvas.getAttribute("xmlns");

var controller = new OthelloController(numRows, numCols, nameSpace);
var view = new OthelloView(controller, canvas, sideLength, xo, yo);

controller.setView(view);
controller.startGame();