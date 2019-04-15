
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
});
