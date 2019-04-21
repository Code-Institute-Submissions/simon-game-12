/* 
Create game data
*/

function create_data(params) {


	/* Testing */
	clear_ls();




	if (load_data()) {
		let simon_saves = load_data();
		params.id = simon_saves.length + 1
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
	this.name = params.name;
	this.difficulty = params.difficulty;
	this.sound_on = params.sound_on;
	this.org_sequence = [random_ele()];
	this.round = 1;
	this.correct = 0;
	this.wrong = 0;
	this.finished_game = false;
	this.start_date = new Date();
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

// Load save 

function get_profile(profile_index) {
	let data = load_data()
	if (data[profile_index]) {
		return data[profile_index]
	} else {
		return false
	}
}

/* 
Update profile
*/

function update_profile(index, data) {
	let profiles = load_data();
	profiles[index] = data;
	save_data(profiles)
}

/* 
Clear localStorage
*/

function clear_ls() {
	localStorage.clear()
}