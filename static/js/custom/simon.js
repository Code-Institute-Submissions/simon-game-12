/* 
Create layout for game 
*/

function simon_layout() {
	let container_width = $("#game-container").width();
	$("#game-container").height(container_width);
	$("#game-menu").height(container_width).width(container_width);
	$("#game-settings-overlay").height(container_width).width(container_width);
	$("#settings").height(container_width);	
	$("#game-overlay").height(container_width).width(container_width);
	$("#game-container .col-6").height(container_width / 2);
	$("#game-overlay>.row").height(container_width);	

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
	get_sound_setting(0)
	$("#game-centre div").fadeOut();
	$("#game-overlay").html(new_game_template()).fadeIn(500);
}

/* 
Create new game
*/

function create_game() {
	$("#game-centre div").fadeIn(1000);
	let name = $("#game-overlay input[name=name]").val().split()
	let difficulty = $("#difficulty").val()
	//Check if form is valid
	if (name[0].length <= 3) {
		let message = "Profile name must be longer then 3 characters!"
		if ($(".alert p").text() != message) {
			js_alerts("text-shadow-red", message)
		}
		return false
	} else if (difficulty == "difficulty") {
		let message = "Please choose difficulty of the game!"
		if ($(".alert p").text() != message) {
			js_alerts("text-shadow-red", message)
		}
		return false
	} else {
		//Create new profile
		let params = {
			"id": 0,
			"name": name[0],
			"difficulty": difficulty,
		}
		const profile = create_data(params)
		if (profile) {
			//Start game
			start_game(profile)
		} else {
			js_alerts("text-shadow-red", "Unable to save profile!")
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

function load_game_menu() {
	get_sound_setting(1)
	$("#game-centre div").fadeOut();		
	let data = load_data()		
	if (load_data()) {
		let games = games_in_progress(data);
		if (games.length > 0) {
			$("main .container-fluid").fadeOut(500);
			profiles_template(games)
			setTimeout(() => {
				simon_layout();
				$("#load-game").slideDown(500);
			}, 700)

		} else {
			return no_profiles();
		}		
	} else {
		return no_profiles();
	}
}


function load_game(id) {
	let profile = get_profile(id);
	if (profile) {
		$("#profile-id").html(profile.id);
		$.when(hide_menu(), hide_overlay('#load-game')).then(game_round(profile));
	} else {
		js_alerts("text-shadow-red", "Unable to load profile!");
		return false
	}
}

/* 
Show statistics for existing profiles
*/

function statistics_menu() {
	get_sound_setting(2)
	$("#game-centre div").fadeOut();
	let data = load_data()
	if (load_data()) {
		let statistics_data = finished_games(data);
		if (statistics_data.length > 0) {
			$("main .container-fluid").fadeOut(500);
			statistics_template(statistics_data)
			setTimeout(() => {
				simon_layout();
				$("#statistics-modal").slideDown(500);
			}, 700)

		} else {
			return no_statistics();
		}
	} else {
		return no_statistics();
	}
}

/* 
Game setting menu
*/

function settings() {
	$("#game-centre div").fadeOut();
	get_sound_setting(3);
	$("#game-settings-overlay").fadeIn(500);
	simon_layout();	
}

function sounds() {
	if ($("#sound-setting i").hasClass("text-shadow-green")) {
		$("#sound-setting i").removeClass("text-shadow-green").addClass("text-shadow-red");
		$("#sound-setting p:nth-child(2)").html("Sounds off !");
		const simon_setting = new CreateGameSetting();
		simon_setting.sound_on = false;
		simon_setting.random = get_setting().random;
		save_setting(simon_setting);
		let message = "The game can get much harder with sounds off!"
		if ($(".alert p").text() != message) {
			js_alerts("text-shadow-red", message)
		}

	} else {
		$("#sound-setting i").removeClass("text-shadow-red").addClass("text-shadow-green");
		$("#sound-setting p:nth-child(2)").html("Sounds on");
		const simon_setting = new CreateGameSetting();
		simon_setting.sound_on = true;
		simon_setting.random = get_setting().random;
		save_setting(simon_setting);
	}
}

function get_sound_setting(col) {
	if (get_setting().sound_on) {
		return flash_play(col);
	} else {
		return column_animation(col);
	}
}

function sequence_setting() {
	if ($("#sequence-setting i").hasClass("text-shadow-green")) {
		$("#sequence-setting i").removeClass("text-shadow-green").addClass("text-shadow-red");
		$("#sequence-setting p:nth-child(2)").html("All random off");
		const simon_setting = new CreateGameSetting();
		simon_setting.random = false;
		simon_setting.sound_on = get_setting().sound_on;
		save_setting(simon_setting);
	} else {
		$("#sequence-setting i").removeClass("text-shadow-red").addClass("text-shadow-green");
		$("#sequence-setting p:nth-child(2)").html("All random on !");
		const simon_setting = new CreateGameSetting();
		simon_setting.random = true;
		simon_setting.sound_on = get_setting().sound_on;
		save_setting(simon_setting);
		let message = "The game can get much harder with all sequences randomized!"
		if ($(".alert p").text() != message) {
			js_alerts("text-shadow-red", message)
		}
	}
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
		$("#game-overlay").css("background", "transparent");
		$("#game-overlay").fadeIn();
		music_icon();
		let sequence = game_save.sequence;
		var delay = 1000;
		for (let i = 0; i < sequence.length; i++) {
			setTimeout(() => {
				get_sound_setting(sequence[i]);
			}, delay);

			delay += 1000
		}
		setTimeout(() => {
			add_click_events();
			hide_menu();
		}, delay);
		return game_save;
	}, 1500);	
}

/* 
Create random sequence
*/

function create_sequence(profile_index, profile) {
	if (get_setting().random) {
		profile.org_sequence = [];
		var z = 0;
		while (z < profile.round) {
			profile.org_sequence.push(random_ele());
			z += 1;
		}
		profile.sequence = profile.org_sequence;
		update_profile(profile_index, profile);
	} else {
		profile.org_sequence.push(random_ele())
		profile.sequence = profile.org_sequence;
		update_profile(profile_index, profile);
	}
	
}

/* 
Check user answer
*/

function check_answer(btn_id) {
	let profile_index = parseInt($("#profile-id").html())
	let profile = get_profile(profile_index)
	if (profile) {
		// IF user answer is correct
		if (profile.sequence[0] == btn_id) {
			if (profile.sequence.length === 1) {
				$("#game-overlay").empty().fadeIn();
				profile.correct += 1;
			}
			profile.sequence.shift()
			if (profile.sequence.length === 0) {				
				if (profile.difficulty != "forever") {
					if (!check_game_end(profile_index, profile)) {
						profile.round += 1;
						create_sequence(profile_index, profile);
						setTimeout(() => {
							return game_round(profile);
						}, 300);
					} else {
						return
					}
				} else {
					profile.round += 1;
					create_sequence(profile_index, profile);
					setTimeout(() => {
						return game_round(profile);
					}, 300);
				}			
			}	
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
		js_alerts("text-shadow-red", "Unable to load profile!")
		load_data();
		return false
	} 
}

/* 
End the game
*/

function check_game_end(profile_index, profile) {
	if (profile.difficulty === profile.round) {	
		remove_click_events();
		profile.finished_game = true;
		update_profile(profile_index, profile);
		show_score(profile);			
		return true;
	} 
}

/* 
Show score screen to user 
*/

function show_score(profile) {
	$("#game-centre div").fadeOut();
	$("#game-overlay").css("background", "rgba(0, 0, 0, 0.4)");
	$("#game-overlay").fadeIn();
	$("#game-menu").fadeIn();
	return game_end_template(profile);
}

// Calculate score

function calculate_score(profile) {
	var score = profile.correct - profile.wrong;
	if (score <= 0) {
		score = 0;
	}
	return score;
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
