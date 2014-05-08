/**
 * A human interactive player.
 */
var HumanPlayer = Class.create({
    
	/**
     * Constructor
     */
    initialize: function(view, playerIndex) { 
    	//this.controller = controller;
        this.view = view;
        this.playerIndex = playerIndex;
    },
    
    /**
     * Whether this uses a view.
     */
    hasView: function() {
        return true;
    },
    
    /**
     * Returns the view.
     */
    getView: function() {
        return this.view;
    },
    
    /**
     * Chooses a move.
     */
    givePosition: function(position) {
        this.referee = referee;
        this.view.draw(this.referee.getViewContainer());
    },
   
    /**
     * Handle a mouse click, possibly getting a new position.
     */
    handleClick: function(event) {
    	/*
        var option = this.view.getNextPositionFromClick(
        		event, this.playerIndex, this.controller.getViewContainer());
        if (option == null) return;
        if (this.position.hasOption(this.playerIndex, option)) {
            //this.view.undraw();
            this.referee.moveTo(option);
        } else {
            console.log("Not a move option!");
            console.log(option.toString());
            return;
        }*/
    	console.log("Player " + this.playerIndex + " was asked to handle "
    			+ "a click event!");
    },
    
    /**
     * toString
     */
    toString: function() {
        return "A Human player.";
    }
    
});