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
	$("#game-centre h2").fadeOut(500);
	$("#game-overlay").html(new_game_template()).fadeIn(500);
	$("#game-overlay input[type=checkbox]").change(function () {
		let checked = $(".form-check-input:checkbox:checked");
		if (checked.length == 0) {
			let display = $("#js-alerts").css("display")
			if (display == "none") {
				let message = "The game can get much harder with sounds off!"
				if ($(".alert p").text() != message) {
					js_alerts("danger", message)
				}				
			}
			
		}
	});
}

function create_game() {
	$("#game-centre h2").fadeIn(1000);
	let name = $("#game-overlay input[name=name]").val().split()
	let difficulty = $("#difficulty").val()
	let sound_on = $(".form-check-input:checkbox").val()
	if (name[0].length <= 3) {
		let message = "Profile name must be longer then 3 characters!"
		if ($(".alert p").text() != message) {
			js_alerts("danger", message)
		}
		return false
	} else if (difficulty == "difficulty" ) {
		let message = "Please choose difficulty of the game!"
		if ($(".alert p").text() != message) {
			js_alerts("danger", message)
		}
		return false
	} else {
		let params = {
			"id" : 1,
			"name" : name[0],
			"difficulty": difficulty,
			"sound_on": sound_on,
		}
		create_data(params)
	}
	return false
}

function load_game() {
	if (load_data()) {

	} else {
		gc_alerts("danger", "No profiles found!")
	}
}

function statistics() {
	if (load_data()) {
		
	} else {
		gc_alerts("danger", "Please try to finish a game first!")
	}
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