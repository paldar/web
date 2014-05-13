/**
 * Controller for game play.
 */
var OthelloController = Class.create({
	
	/**
	 * The constructor.
	 */
    initialize: function(numRows, numCols, nameSpace) {
        this.nameSpace = nameSpace;
        this.currentPlayer = PLAYER_1;
        this.board = new OthelloBoard(numRows, numCols);
    },
    
    /**
     * Start the game.
     */
    startGame: function() {
		// Draw the board
    	this.getView().drawBoard(this.board);
    	
    	// Draw the initial pieces
    	var numRows = this.board.getNumRows();
    	var numCols = this.board.getNumCols();
		for (var i = 0; i < 2; i++) {
			for (var j = 0; j < 2; j++) {
				var xInd = Math.floor((numRows-1)/2) + i;
				var yInd = Math.floor((numCols-1)/2) + j;
				var tile = this.board.getTileAt(xInd, yInd);
				tile.setOwner((i+j)%2);
				var color = (i+j)%2 == PLAYER_1 ? "white" : "black";
				this.getView().colorTile(tile, color, "1");
			};
		};
		
		this.updatePlayerScores();
    },
    
    /**
     * On-click for tiles.
     */
    tileClicked: function(i, j) {
    	if (this.moveIsLeagalForCurrentPlayer(i, j)) {
    		this.makeMove(i, j);
    	}
    },
    
    /**
     * Make a move which is assumed to be valid at this point.
     */
    makeMove: function(i, j) {
    	var t = this.board.getTileAt(i, j);
    	this.getView().colorTile(t, this.getCurPlayerColor(), "1");
		t.setOwner(this.currentPlayer);

		for (var a = -1; a < 2; a++) {
			for (var b = -1; b < 2; b++) {
				if (a != 0 || b != 0) {
					if (this.existsCurrentPlayersTileAtDirection(i, j, a, b)) {
						var iCopy = i;
						var jCopy = j;
						var tile = this.board.getTileAt(iCopy, jCopy);
						do {
							this.getView().colorTile(tile, this.getCurPlayerColor(), "1");
							tile.setOwner(this.currentPlayer);
					
							// Update
							iCopy += a;
							jCopy += b;
							if (this.board.isOffBoard(iCopy, jCopy)) {
								break;
							};
					
							tile = this.board.getTileAt(iCopy, jCopy);
						} while (tile.getOwner() != EMPTY && (tile.getOwner() != this.currentPlayer));	
					};
				};
			};
		};
		
		this.nextPlayersTurn();
		
		this.updatePlayerScores();
    },
    
    /**
     * Update the player scores off to the right of the board. 
     */
    updatePlayerScores: function() {
    	var numP1Tiles = 0;
    	var numP2Tiles = 0;
    	for (var i = 0; i < this.board.getNumRows(); i++) {
			for (var j = 0; j < this.board.getNumCols(); j++) {
				var tile = this.board.getTileAt(i, j);
				if (tile.getOwner() == PLAYER_1) {
					numP1Tiles += 1;
				} else if (tile.getOwner() == PLAYER_2) {
					numP2Tiles += 1;
				};
	        };
        };
        
        $("Player_1_Score").textContent = ("" + numP1Tiles);
        $("Player_2_Score").textContent = ("" + numP2Tiles);
    },
    
    /**
     * Tells if there exists a current players tile in the
     * specified direction. 
     */
    existsCurrentPlayersTileAtDirection: function(i, j, dx, dy) {
    	var tile = this.board.getTileAt(i, j);
		do {
			// Update
			i += dx;
			j += dy;
			if (this.board.isOffBoard(i, j)) {
				break;
			}
			
			tile = this.board.getTileAt(i, j);
			
			// Return true if we found one 
			if (tile.getOwner() == this.currentPlayer) {
				return true;
			}
		} while (tile.getOwner() != EMPTY);
		return false;
    },
    
    /**
     * Alternates whose turn it is.
     */
    nextPlayersTurn: function() {
    	this.currentPlayer = 1 - this.currentPlayer;
    },
    
    /**
     * Tells if a move is legal for a given player.
     */
    moveIsLeagalForCurrentPlayer: function(i, j) {
    	var tile = this.board.getTileAt(i, j);
    	if (tile.getOwner() != EMPTY) {
    		return false;
    	};
    	
    	for (var a = -1; a < 2; a++) {
			for (var b = -1; b < 2; b++) {
				if (a != 0 || b != 0) {
					if (this.existsCurrentPlayersTileAtDirection(i, j, a, b)) {
						if (this.board.getTileAt(i+a, j+b).getOwner() != this.currentPlayer) {
							return true;
						};
					};
				};
			};
		};
    	
    	return false;
    },
    
    mousedOver: function(i, j) {
    	if (this.moveIsLeagalForCurrentPlayer(i, j)) {
    		var tile = this.board.getTileAt(i, j);
    		this.getView().colorTile(tile, this.getCurPlayerColor(), "0.25");
		};
    },
    
    mouseOut: function(i, j) {
    	var tile = this.board.getTileAt(i, j);
    	if (tile.getOwner() == EMPTY) {
    		this.getView().colorTile(tile, "green", "1");
    	};
    },
    
    getCurPlayerColor: function() {
    	return this.getPlayerColor(this.currentPlayer);
    },
    
    getPlayerColor: function(player) {
    	if (player == EMPTY) {
    		return "green";
    	}
    	return (player == PLAYER_1) ? "white" : "black";
    },
    
    /**
     * Set the view. 
     */
    setView: function(view) {
    	this.view = view;
    },
    
    /**
     * Get the view. 
     */
    getView: function() {
    	return this.view;
    },
    
    /**
     * Get the players.
     */
    getPlayers: function() {
    	return this.players;
    },
    
    /**
     * Get the nameSpace.
     */
    getNameSpace: function() {
    	return this.nameSpace;
    }

});