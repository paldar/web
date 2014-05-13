var PLAYER_1 = 0;
var PLAYER_2 = 1;
var EMPTY = 2;

/**
 * The class for a Blokus square.
 */
var OthelloBoard = Class.create({
	
	/**
	 * The initializer. 
	 * 		(x, y) - top left coordinate.
	 * 		sideLength - the length af the side of the square
	 */
	initialize: function(numRows, numCols) {
		this.numRows = numRows;
		this.numCols = numCols;
		
		this.gameData = [];
		for (var i = 0; i < this.numRows; i++) {
			var row = [];
			for (var j = 0; j < this.numCols; j++) {
				row.push(new OthelloTile(i, j, EMPTY));
	        };
			this.gameData.push(row);
        };
	},
	
	/**
	 * Get the number of rows.
	 */
	getNumRows: function() {
		return this.numRows;
	},
	
	/**
	 * Get the number of cols.
	 */
	getNumCols: function() {
		return this.numCols;
	},
	
	/**
	 * Gets the tile at a specified pair of indices.
	 */
	getTileAt: function(i, j) {
		return (this.gameData[i])[j];
	},
	
	/**
	 * The toString for a square.
	 */
	toString: function() {
		return "An Othello Board"; 
	},
	
	/**
	 * Gets the array of tiles.
	 */
	getGameData: function() {
		return this.gameData;
	},
	
	/**
	 * Tells if a tile is off the board.
	 */
	isOffBoard: function(i, j) {
		return (i < 0) || (j < 0) ||
			(i > (this.numRows-1)) || (j > (this.numCols-1));
	}
});