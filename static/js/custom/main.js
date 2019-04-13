
/*
General
*/

$(document).ready(function () {
	/* 
	Create the game content depends on user screen size
	*/
	(function () {
		let container_width = $("#game-container").width();
		$("#game-container").height(container_width);
		$("#game-col-1").height(container_width / 2);
		$("#game-col-2").height(container_width / 2);
		$("#game-col-3").height(container_width / 2);
		$("#game-col-4").height(container_width / 2);
		
		$("#game-centre")
			.height(container_width / 2)
			.width(container_width / 2)
		let game_centre = $("#game-centre").width()
		$("#game-centre")
			.css("left", `${(container_width / 2) - (game_centre /2) + 15}` + 'px')
			.css("top", `${(container_width / 2) - (game_centre / 2)}` + 'px');
		
	})();
});
