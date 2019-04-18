/* 
Create layout for game 
*/

function simon_layout() {
	let container_width = $("#game-container").width();
	$("#game-container").height(container_width);
	$("#game-overlay").height(container_width).width(container_width);
	$("#game-container .col-6").height(container_width / 2);

	$("#game-centre")
		.height(container_width / 2)
		.width(container_width / 2);
	let game_centre = $("#game-centre").width();
	$("#game-centre")
		.css("left", `${(container_width / 2) - (game_centre / 2) + 15}` + 'px')
		.css("top", `${(container_width / 2) - (game_centre / 2)}` + 'px');
}

/* 
Gmae menu
*/

function new_game() {
	console.log(1)
}

function load_game() {
	console.log(2)
}

function statistics() {
	console.log(3)
}

function settings() {
	console.log(4)
}

/* 
Create a game round
*/

function GameRound(game_save) {
	
}