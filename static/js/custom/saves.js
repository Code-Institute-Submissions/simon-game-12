/* 
Create game data
*/

function create_data(params) {
	if (load_data()) {
		let simon_saves = load_data();
		params.id = simon_saves.length;
		const simon_save = new SimonSave(params);
		simon_save.sequence = simon_save.org_sequence;
		simon_saves.push(simon_save);
		save_data(simon_saves);
		return simon_save;
	} else {
		const simon_save = new SimonSave(params);
		simon_save.sequence = simon_save.org_sequence;
		let simon_saves = [simon_save];
		save_data(simon_saves);
		return simon_save;
	}

}

/* 
Construct a game save
*/

function SimonSave(params) {
	this.id = params.id;
	this.visibility = true;
	this.name = params.name;
	this.difficulty = parse_difficulty(params.difficulty);
	this.org_sequence = [random_ele()];
	this.round = 1;
	this.correct = 0;
	this.wrong = 0;
	this.finished_game = false;
	this.start_date = new Date();
}

/* 
Return difficulty base on user input
*/

function parse_difficulty(difficulty) {
	if (difficulty == "normal") {
		return 10;
	} else if (difficulty == "medium") {
		return 15;
	} else if (difficulty == "forever") {
		return "forever";
	} else {
		return 20;
	}
}

/* 
Save data to localStorage
*/

function save_data(simon_saves) {
	localStorage.setItem("simon_saves", JSON.stringify(simon_saves));
}

/* 
Load data from localStorage
*/

function load_data() {
	const get_saves = localStorage.getItem("simon_saves");
	const saves = JSON.parse(get_saves);
	return saves;
}

// Load all games in progress

function games_in_progress(saves) {
	const games_in_progress = [];
	if (saves) {
		for (let i = 0; i < saves.length; i++) {
			if (saves[i].finished_game == false && saves[i].visibility == true) {
				games_in_progress.push(saves[i]);
			}

		}
	}
	return games_in_progress;
}

// Load all finished games

function finished_games(saves) {
	const finished_games = [];
	if (saves) {
		for (let i = 0; i < saves.length; i++) {
			if (saves[i].finished_game == true && saves[i].visibility == true) {
				finished_games.push(saves[i]);
			}

		}
	}
	return finished_games;
}

// Load save 

function get_profile(profile_index) {
	let data = load_data();
	if (data[profile_index]) {
		return data[profile_index];
	} else {
		return false;
	}
}

/* 
Update profile
*/

function update_profile(index, data) {
	let profiles = load_data();
	profiles[index] = data;
	save_data(profiles);
}


/* 
Delete profile
*/

function delete_profile(id) {
	let profile = get_profile(id);
	if (profile) {
		profile.visibility = false;
		update_profile(id, profile);
		js_alerts("text-shadow-green", "Profile deleted!");
		return hide_overlay('#load-game');
	} else {
		js_alerts("text-shadow-red", "Unable to delete profile!");
		return false;
	}
}

/* 
Add Game setting by default
*/

function create_game_setting() {
	if (!get_setting()) {
		clear_ls();
		const simon_setting = new CreateGameSetting();
		save_setting(simon_setting);
	} else {
		if (!get_setting().sound_on) {
			$("#sound-setting i").removeClass("text-shadow-green").addClass("text-shadow-red");
			$("#sound-setting p:nth-child(2)").html("Sounds off !");

		} else {
			$("#sound-setting i").removeClass("text-shadow-red").addClass("text-shadow-green");
			$("#sound-setting p:nth-child(2)").html("Sounds on");
		}
		if (!get_setting().random) {
			$("#sequence-setting i").removeClass("text-shadow-green").addClass("text-shadow-red");
			$("#sequence-setting p:nth-child(2)").html("All random off");
		} else {
			$("#sequence-setting i").removeClass("text-shadow-red").addClass("text-shadow-green");
			$("#sequence-setting p:nth-child(2)").html("All random on !");
		}
	}
}

/* 
Construct Game Setting
*/

function CreateGameSetting() {
	this.sound_on = true;
	this.random = false;
	this.theme = "modern";
}

/* 
Get game setting from localStorage
*/

function get_setting() {
	const get_simon_setting = localStorage.getItem("simon_setting");
	const simon_setting = JSON.parse(get_simon_setting);
	return simon_setting;
}

/* 
Save setting
*/

function save_setting(simon_setting) {
	localStorage.setItem("simon_setting", JSON.stringify(simon_setting));
}


/* 
Clear localStorage
*/

function clear_ls() {
	localStorage.clear();
}
