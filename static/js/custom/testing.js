/* 
Create random sequence for testing
*/

function random_sequence() {
	$.when(hide_menu()).then(function () {
		let how_many = Math.floor((Math.random() * 21) + 1)
		$("#game-centre h2").html(how_many)
		$("#profile-id").html(1)		
		var game_save = {
			"org_sequence": [],
			"sound_on": "on",
			"difficulty" : "test"
		}
		var z = 0;
		while (z < how_many) {
			game_save.org_sequence.push(random_ele())
			z += 1
		}
		game_save.sequence = game_save.org_sequence
		clear_ls()
		return game_round(game_save)
	});
}


function test_data() {
	let save = {
		"correct": 10,
		"difficulty": 20,
		"finished_game": false,
		"id": 0,
		"name": "Miro",
		"org_sequence": [0],
		"random": "off",
		"round": 1,
		"sequence": [0],
		"sound_on": "on",
		"start_date": "2019-04-24T04:23:49.645Z",
		"wrong": 0,
	}
	save_data([save]);
	game_end_template(save)
	//load_game(0);
}

function game_overlay() {
	$("#game-overlay").css("background", "rgba(0, 0, 0, 0.7)");
	$("#game-centre div").fadeOut();
	$("#game-overlay").fadeIn();
}

/* 
Feature not implemented yet template
*/

function no_feature() {
	$("#game-overlay").html(`
		<div class="wrapper row justify-content-center">
			<div class="align-self-center col-8">
				<div class="row justify-content-end">
					<button onclick="return hide_overlay('#game-overlay')" class="btn bg-transparent">
						<i class="fas fa-times fa-4x"></i>
					</button>							
				</div>
				<hr>
				<h3 class="text-center">This feature is not implemented yet!</h3>	
				<hr>
			</div>
		</div>
	`)
	simon_layout()
	$("#game-overlay").fadeIn(500)
}