/**
 * The class for a Blokus square.
 */
var OthelloTile = Class.create({
	
	/**
	 * The initializer. 
	 * 		(x, y) - top left coordinate.
	 * 		sideLength - the length af the side of the square
	 */
	initialize: function(i, j, owner) {
		this.i = i;
		this.j = j;
		this.owner = owner;
		this.circ = null;
	},
	
	/**
	 * Get row coordinate.
	 */
	getI: function() {
		return this.i;
	},
	
	/**
	 * Get column coordinate.
	 */
	getJ: function() {
		return this.j;
	},
	
	/**
	 * Set the circle for this tile.
	 */
	setCirc: function(circ) {
		this.circ = circ;
	},
	
	/**
	 * Get the circle for this tile.
	 */
	getCirc: function() {
		return this.circ;
	},
	
	/**
	 * Set the tile type (p1, p2, or none) for this tile.
	 */
	setOwner: function(owner) {
		this.owner = owner;
	},
	
	/**
	 * Get the tile type (p1, p2, or none) for this tile.
	 */
	getOwner: function() {
		return this.owner;
	},
	
	/**
	 * The toString for a square.
	 */
	toString: function() {
		return "A tile with with indices at (" + 
			this.j + ", " + this.i + ") and sideLength of " + this.sideLength; 
	},
	
	/**
	 * Sets the color for this square.
	 *
	setColor: function(color) {
		this.color = color;
		this.rect.setAttributeNS(null, "class", this.color + "Square");
	},*/
	
	/**
	 * Draws this.
	 *
	draw: function(canvas) {
		
		// should we put namespace into here instead of null?
		this.rect.setAttributeNS(null, "x", this.x);
		this.rect.setAttributeNS(null, "y", this.y);
		this.rect.setAttributeNS(null, "width", this.sideLength);
		this.rect.setAttributeNS(null, "height", this.sideLength);
		this.rect.setAttributeNS(null, "class", this.color + "Square");
		canvas.appendChild(this.rect);
		
		this.rect.setAttributeNS(null, "x", this.x);
		this.rect.setAttributeNS(null, "y", this.y);
		this.rect.setAttributeNS(null, "width", this.sideLength);
		this.rect.setAttributeNS(null, "height", this.sideLength);
		this.rect.setAttributeNS(null, "class", this.color + "Square");
		canvas.appendChild(this.rect);
		
		
		var selfTile = this;
		this.rect.onclick = function(event) {
			var r = selfTile.rect;
			
			if (selfTile.circ == null) {
				selfTile.circ = selfTile.makeNewDisc("red");
				console.log(selfTile.circ);
				selfTile.controller.getCanvas().appendChild(selfTile.circ);
			}
			
			var curClass = r.getAttribute("class");
			if (curClass.localeCompare("graySquare") == 0) {
				r.color = "blue";
			} else if (curClass.localeCompare("blueSquare") == 0) {
				r.color = "red";
			} else if (curClass.localeCompare("redSquare") == 0) {
				r.color = "gray";
			}
			r.setAttributeNS(null, "class", r.color + "Square");
			//console.log(this.x + ", " + this.y)
			//var curPlayer = this.controller.players[this.controller.currentPlayer];
			//curPlayer.handleClick(event);
		};
	},*/
	
	/*
	makeNewDisc: function(color) {
		var circle = document.createElementNS(this.controller.getNameSpace(), "circle");
		circle.setAttributeNS(null, "cx", this.x + this.sideLength/2);
		circle.setAttributeNS(null, "cy", this.y + this.sideLength/2);
		circle.setAttributeNS(null, "r", this.sideLength/2 - 3);
		circle.setAttributeNS(null, "fill", color);
		//circle.setAttributeNS(null, "class", color + "Square");
		return circle;
	}*/
});