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
				this.drawTile(tile, true);
			}
		}
		
		// For the scoring board
		for (var i = 0; i < 2; i++) {
			for (var j = 0; j < 2; j++) {
				var player = EMPTY;
				if (i == 0) {
					player = j;
				}
				
				var tile = new OthelloTile(
						board.getNumRows() + 1 + i, 3 + j, player);
				this.drawTile(tile, false);
				this.colorTile(tile, this.controller.getPlayerColor(player), "1");
				
				if (i == 1) {
					var playerText = document.createElementNS(this.controller.getNameSpace(), "text");
					playerText.setAttributeNS(null, "x", this.xo + this.sideLength*(tile.getI()) + 0.25*this.sideLength);
					playerText.setAttributeNS(null, "y", this.yo + this.sideLength*(tile.getJ()) + 0.7*this.sideLength);
					playerText.setAttributeNS(null, "font-size", 36);
					var id = "Player_" + (j + 1) + "_Score";
					playerText.setAttributeNS(null, "id", id);
					this.canvas.appendChild(playerText);
				}
				
			};
		};
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
    drawTile: function(tile, setOnClicks) {
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
		circ.setAttributeNS(null, "r", this.sideLength/2 - 3);
		
		
		if (setOnClicks) {
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
		}
		
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
    
});