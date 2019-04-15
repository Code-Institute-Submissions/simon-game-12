/* 
Create layout for game 
*/

function simon_layout() {
	let container_width = $("#game-container").width();
	$("#game-container").height(container_width);
	$("#game-overlay").height(container_width).width(container_width);
	$("#game-overlay-content").height(container_width).width(container_width);
	$("#game-col-1").height(container_width / 2);
	$("#game-col-2").height(container_width / 2);
	$("#game-col-3").height(container_width / 2);
	$("#game-col-4").height(container_width / 2);

	$("#game-centre")
		.height(container_width / 2)
		.width(container_width / 2);
	let game_centre = $("#game-centre").width();
	$("#game-centre")
		.css("left", `${(container_width / 2) - (game_centre / 2) + 15}` + 'px')
		.css("top", `${(container_width / 2) - (game_centre / 2)}` + 'px');
}