/* 
Create layout for game 
*/

function simon_layout() {
	let container_width = $("#game-container").width();
	$("#game-container").height(container_width);
	$("#game-menu").height(container_width).width(container_width);
	$("#game-overlay").height(container_width).width(container_width);
	$("#game-container .col-6").height(container_width / 2);
	$(".wrapper").height(container_width);	

	$("#game-centre")
		.height(container_width / 2)
		.width(container_width / 2);
	let game_centre = $("#game-centre").width();
	$("#game-centre")
		.css("left", `${(container_width / 2) - (game_centre / 2) + 15}` + 'px')
		.css("top", `${(container_width / 2) - (game_centre / 2)}` + 'px');
}

/* 
Game menu
*/

function new_game() {
	flash_play(0)
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


/* 
Game centre
*/

function game_centre_h2() {
	$('#game-centre h2').html(`
		<b>SIMON </b><i class="fab fa-js-square fa-2x"></i>
	`)
		.fadeIn(500);
	return false
}


function load_game() {
	flash_play(1)
	$("#game-centre h2").fadeOut(500);
	if (load_data()) {
		$("#game-overlay").html(new_game_template()).fadeIn(500);
		
	} else {
		return no_profiles()
	}
}

function statistics() {
	flash_play(2)
	$("#game-centre h2").fadeOut(500);
	if (load_data()) {		
		$("#game-overlay").html(new_game_template()).fadeIn(500);
	} else {
		return no_profiles()	
	}
}

function settings() {
	flash_play(3)
}

/* 
Create random sequents of element
*/

function random_ele() {
	return Math.floor(Math.random() * 4)
}

/* 
Create new game
*/

function create_game() {
	$("#game-centre h2").fadeIn(1000);
	let name = $("#game-overlay input[name=name]").val().split()
	let difficulty = $("#difficulty").val()
	let sound_on = $(".form-check-input:checkbox").val()
	//Check if form is valid
	if (name[0].length <= 3) {
		let message = "Profile name must be longer then 3 characters!"
		if ($(".alert p").text() != message) {
			js_alerts("danger", message)
		}
		return false
	} else if (difficulty == "difficulty") {
		let message = "Please choose difficulty of the game!"
		if ($(".alert p").text() != message) {
			js_alerts("danger", message)
		}
		return false
	} else {
		//Create new profile
		let params = {
			"id": 1,
			"name": name[0],
			"difficulty": difficulty,
			"sound_on": sound_on,
		}
		const profile = create_data(params)
		if (profile) {
			//Start game
			start_game(profile)
		} else {
			js_alerts("danger", "Unable to save profile!")
			load_data()
			return false
		}
	}
	return false
}

/* 
Start new game
*/

function start_game(profile) {	
	$.when(hide_menu()).then(game_round(profile));		
	return false
}

function hide_menu() {
	$("#game-menu").fadeOut(500);
	$("#game-overlay").fadeOut(500);
	game_centre_h2()
}

/* 
Create a game round
*/

function game_round(game_save) {	
	let sequence = game_save.sequence
	for (let i = 0; i < sequence.length; i++) {
		flash_play(sequence[i]);
		
	}
}

/* 
Column animation
*/

function column_animation(id) {
	$(`#game-col-${id}`).fadeOut(500).fadeIn(500);		
}

/* 
Play audio file
*/

function play_audio(id) {
	let obj = document.createElement("audio");
	obj.src = `static/sounds/${id}.mp3`;
	obj.volume = 1;
	obj.autoPlay = false;
	obj.play();
}

/* 
Flash and pay sound
*/

function flash_play(id) {
	column_animation(id);
	play_audio(id);	
}
