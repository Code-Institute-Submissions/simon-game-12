/* 
Save data
*/

function save_data(simon_saves) {
	localStorage.setItem("simon_saves", JSON.stringify(simon_saves));
}

/* 
Load data
*/

function load_data () {
	const get_saves = localStorage.getItem("simon_saves");
	const saves = JSON.parse(get_saves);
	return saves;
}