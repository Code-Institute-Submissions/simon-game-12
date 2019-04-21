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
	$("#game-centre div").fadeOut(500);
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
Create new game
*/

function create_game() {
	$("#game-centre div").fadeIn(1000);
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
	$("#profile-id").html(profile.id)
	$.when(hide_menu()).then(game_round(profile));
	return false
}

/* 
Load game data from localStorage
*/

function load_game() {
	flash_play(1)
	$("#game-centre div").fadeOut(500);
	if (load_data()) {
		$("#game-overlay").html(no_feature()).fadeIn(500);
		
	} else {
		return no_profiles()
	}
}

/* 
Show statistics for existing profiles
*/

function statistics() {
	flash_play(2)
	$("#game-centre div").fadeOut(500);
	if (load_data()) {		
		$("#game-overlay").html(no_feature()).fadeIn(500);
	} else {
		return no_profiles()	
	}
}

/* 
Game setting menu
*/

function settings() {
	flash_play(3)
	$("#game-centre div").fadeOut(500);
	$("#game-overlay").html(no_feature()).fadeIn(500);
}



/* 
Game centre
*/

function hide_menu() {
	$("#game-menu").fadeOut(500);
	$("#game-overlay").empty().fadeOut(500);
	game_centre_h2()
}

/* 
Create a game round
*/

function game_round(game_save) {
	round_number(game_save);
	setTimeout(() => {
		remove_click_events()
		$("#game-overlay").css("background", "transparent")
		$("#game-overlay").fadeIn()
		music_icon();
		let sequence = game_save.sequence
		var delay = 1000;
		for (let i = 0; i < sequence.length; i++) {
			setTimeout(() => {
				flash_play(sequence[i]);
			}, delay);

			delay += 1000
		}
		setTimeout(() => {
			add_click_events()
			hide_menu()
		}, delay);
		return game_save
	}, 1500);	
}

/* 
Create random sequence
*/

function create_sequence(profile_index, profile) {
	if (profile.random == "on") {
		profile.org_sequence = []
		var z = 0;
		while (z < profile.round) {
			profile.org_sequence.push(random_ele())
			z += 1
		}
		profile.sequence = profile.org_sequence
		update_profile(profile_index, profile)
	} else {
		profile.org_sequence.push(random_ele())
		profile.sequence = profile.org_sequence
		update_profile(profile_index, profile)
	}
	
}

/* 
Check user answer
*/

function check_answer(btn_id) {
	let profile_index = parseInt($("#profile-id").html()) - 1
	let profile = get_profile(profile_index)
	if (profile) {
		// IF user answer is correct
		if (profile.sequence[0] == btn_id) {
			if (profile.sequence.length === 1) {
				$("#game-overlay").empty().fadeIn();
			}
			profile.sequence.shift()
			if (profile.sequence.length === 0) {
				check_game_end(profile);
				profile.round += 1
				
				create_sequence(profile_index, profile);
				setTimeout(() => {
					return game_round(profile);
				}, 300);				
			}
			profile.correct += 1		
			update_profile(profile_index, profile)
		// IF user answer is incorrect	
		} else {
			$("#game-overlay").empty().fadeIn()
			setTimeout(() => {
				hide_menu();
			}, 3000);
			$("#game-centre h2").html(`
				<p class="lead ">WRONG!</p>
			`)
			profile.wrong += 1		
			profile.sequence = profile.org_sequence;
			update_profile(profile_index, profile)
		}
	} else {
		js_alerts("danger", "Unable to load profile!")
		load_data();
		return false
	} 
}

/* 
End the game
*/

function check_game_end(profile) {
	let difficulty = 0
	if (profile.difficulty === "normal") {
		difficulty = 10
	} else if (profile.difficulty === "medium") {
		difficulty = 15
	} else if (profile.difficulty === "test") {
		difficulty = 1
	} else {
		difficulty = 20
	}
	if (difficulty === profile.round) {
		console.log("END")
		$("#game-centre h2").html(`
				<p class="lead ">END!</p>
			`)
		$("#game-overlay").empty().fadeIn();
	} 
}

/* 
Create random sequents of element
*/

function random_ele() {
	return Math.floor(Math.random() * 4)
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
