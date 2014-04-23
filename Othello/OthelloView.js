var OthelloView = Class.create({
    
    initialize: function(controller, canvas, sideLength, xo, yo) {
    	this.controller = controller;
    	this.canvas = canvas;
    	this.sideLength = sideLength;
    	this.xo = xo;
    	this.yo = yo;
    },
    
    /**
     * Gets the controller.
     */
    getController: function() {
    	return this.controller;
    },
    
    /**
     * Draws the empty blokus board.
     */
    drawBoard: function(board) {
    	// Clear all current children
		this.clearChildren(this.canvas);
		
		// Draw the board
		for (var i = 0; i < board.getNumRows(); i++) {
			for (var j = 0; j < board.getNumCols(); j++) {
				var tile = board.getTileAt(i, j);
				this.drawTile(tile);
			}
		}
    },
    
    /**
     * Colors a tile according to the player index.
     */
    colorTile: function(tile, color, opacityStr) {
    	tile.getCirc().setAttributeNS(null, "fill", color);
    	tile.getCirc().setAttributeNS(null, "opacity", opacityStr);
    },
    
    /**
     * Draws an othello tile.
     */
    drawTile: function(tile) {
    	var rect = document.createElementNS(this.controller.getNameSpace(), "rect");
    	rect.setAttributeNS(null, "x", this.xo + this.sideLength*(tile.getI()));
		rect.setAttributeNS(null, "y", this.yo + this.sideLength*(tile.getJ()));
		rect.setAttributeNS(null, "width", this.sideLength);
		rect.setAttributeNS(null, "height", this.sideLength);
		rect.setAttributeNS(null, "fill", "green");
		rect.setAttributeNS(null, "stroke", "black");
		
		var circ = document.createElementNS(this.controller.getNameSpace(), "circle");
		circ.setAttributeNS(null, "cx", this.xo + this.sideLength*(tile.getI()) + this.sideLength/2);
		circ.setAttributeNS(null, "cy", this.yo + this.sideLength*(tile.getJ()) + this.sideLength/2);
		circ.setAttributeNS(null, "r", this.sideLength/2 -3);
		
		var self = this;
		var oncl = function() {
			self.controller.tileClicked(tile.getI(), tile.getJ());
		};
		
		rect.onclick = oncl;
		circ.onclick = oncl;

		circ.setAttributeNS(null, "onmouseover", "controller.mousedOver(" + tile.getI() + ", " +
				tile.getJ() + ");");
		circ.setAttributeNS(null, "onmouseout", "controller.mouseOut(" + tile.getI() + ", " +
				tile.getJ() + ");");
		
		tile.setCirc(circ);
		this.colorTile(tile, "green", "1");
		
		this.canvas.appendChild(rect);
		this.canvas.appendChild(circ);
    },
    
    clearChildren: function(element) {
		while (element.hasChildNodes()) {
			element.removeChild(element.firstChild);
		}
	},
	
	toString: function() {
		return "A OthelloView with: controller = " + this.controller; 
	}
    
    /**
     * Selects a piece.
     *
    selectPiece: function(piece) {
        this.selectedPiece = piece;
        this.selectedPiece.style.stroke = "Purple";
    },*/
    
    /**
     * Deselect piece.
     *
    deselectPiece: function() {
        this.selectedPiece.style.stroke = "Black";
        this.selectedPiece = undefined;
    },*/
    
    /**
     * Handles a mouse click.
     *
    getNextPositionFromClick: function(event, currentPlayer, containerElement) {
        var clickedPiece = event.target;
        if (this.selectedPiece == undefined) {
            //select the clicked piece, if appropriate
            if (currentPlayer == clickedPiece.player) {
                this.selectPiece(clickedPiece);
            }
            return null; //no new move from this
        } else {
            if (currentPlayer == clickedPiece.player) {
                this.deselectPiece();
                return null;
            } else {
                //measure the distance between centers
                //console.log(clickedPiece.cx.baseVal.value + ", " + this.selectedPiece.cx.baseVal.value);
                var xDistance = Math.abs(clickedPiece.cx.baseVal.value - this.selectedPiece.cx.baseVal.value);
                var yDistance = Math.abs(clickedPiece.cy.baseVal.value - this.selectedPiece.cy.baseVal.value);
                var pieceDistance = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
                if (pieceDistance < 105) {
                    var nextPieces = [[], []]; //nextPieces: 0th list will be blue, 1th red
                    var boardSvg = containerElement.lastChild;
                    var boardElements = boardSvg.childNodes;
                    for (var i = 0; i < boardElements.length; i++) {
                        if (boardElements[i] == this.selectedPiece) {
                            nextPieces[this.selectedPiece.player].push([(clickedPiece.cx.baseVal.value - 50) / 100, (clickedPiece.cy.baseVal.value - 50) / 100]);
                        } else if (boardElements[i] != clickedPiece && boardElements[i].player != undefined) {
                            var piece = boardElements[i];
                            nextPieces[piece.player].push([(piece.cx.baseVal.value - 50)/100, (piece.cy.baseVal.value - 50) / 100]);
                        }
                    }
                    this.deselectPiece();
                    return new Clobber(this.position.width, this.position.height, nextPieces[0], nextPieces[1]);
                    
                } else {
                    this.deselectPiece();
                    return null;
                }
            }
        }
    }*/
});