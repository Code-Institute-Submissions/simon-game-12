/* 
Create game data
*/

function create_data(params) {

	let arguments = {
		"id" : id,
		"name" : name,
		"difficulty" : difficulty,
		"sound_on": sound_on,
	}

	if (load_data()) {
		let simon_saves = load_data();
		arguments.id = simon_saves.length + 1
		const simon_save = new SimonSave(arguments);
		simon_saves.push(simon_save);
		save_data(simon_saves);
		return simon_save;
	} else {
		const simon_save = new SimonSave(arguments);
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
	this.sequence = [];
	this.sequence_length = 0;
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