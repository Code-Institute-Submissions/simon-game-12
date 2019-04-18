/* 
Create layout for game 
*/

function simon_layout() {
	let container_width = $("#game-container").width();
	$("#game-container").height(container_width);
	$("#game-menu").height(container_width).width(container_width);
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
	$("#game-centre h2").fadeOut(1000);
	$("#game-overlay").html(new_game_template()).fadeIn(1000);
	$("#game-overlay input[type=checkbox]").change(function () {
		let checked = $(".form-check-input:checkbox:checked");
		if (checked.length == 0) {
			js_alerts("danger", "The game can get much harder with sounds off!")
		}
	});

	console.log(1)
}

function create_game(form) {
	$("#game-centre h2").fadeIn(1000);
	if ($(".form-check-input:checkbox:checked")) {

	}

	return false
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
Create random sequents of element
*/

function random_ele() {
	return Math.floor(Math.random() * 4)
}

/* 
Create a game round
*/

function GameRound(game_save) {
	
}