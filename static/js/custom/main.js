
/*
Document ready / Events listeners
*/

$(document).ready(function () {
	// Create layout for the game
	simon_layout();
	// Adjust layout of the game if screen size change
	$(window).resize(function () {
		simon_layout();
	});
	// Game menu
	$("#new-game").click(function () { 
		return new_game()	
	});
	$("#load-game").click(function () {
		return load_game()
	});
	$("#statistics").click(function () {
		return statistics()
	});
	$("#settings").click(function () {
		return settings()
	});
});
