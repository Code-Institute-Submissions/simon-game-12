/* 
Game menu
*/

function game_menu() {
	$("#game-menu").html(`
		<div class="row">
			<div id="new-game" class="col-6 d-flex justify-content-center">
				<div class="pt-5">	
					<i class="fas fa-gamepad fa-3x"></i>
				</div>
			</div>
			<div id="load-game-menu" class="col-6 d-flex justify-content-center">
				<div class="pt-5">	
					<i class="fas fa-cloud-download-alt fa-3x"></i>
				</div>
			</div>
		</div>
		<div class="row">
			<div id="statistics-menu" class="col-6 d-flex justify-content-center">
				<div class="pb-5 align-self-end">	
					<i class="fas fa-chart-area fa-3x"></i>
				</div>
			</div>
			<div id="settings-menu" class="col-6 d-flex justify-content-center">
				<div class="pb-5 align-self-end">	
					<i class="fas fa-cogs fa-3x"></i>
				</div>
			</div>
		</div>	
	`
	)
	simon_layout();
}

/* 
Game centre
*/

function game_centre_h2() {
	$('#game-centre').html(`
		<div class="align-self-center">
			<h2 class="text-center">
				<b>SIMON </b><i class="fab fa-js-square fa-2x"></i>		
			</h2>
			<hr class="box-shadow-green my-2">
			<div class="text-center">
				<button class="btn bg-transparent">
					<i class="fas fa-question fa-2x"></i>
				</button>
			</div>
		</div>
	`)
		.fadeIn(500);
	return false
}

function round_number(profile) {
	$('#game-centre').html(`
		<div class="align-self-center">
			<h2 id="round-number">${profile.round}</h2>
		</div>
	`).fadeIn(500);
	return false
}

function music_icon() {
	$('#game-centre').html(`
		<div class="align-self-center">
			<i class="fas fa-music fa-4x"></i>
		</div>
	`)
		.fadeIn(500);
	return false
}


/* 
New game form
*/

function new_game_template() {
	return `
	<form class="row justify-content-center">								
		<div class="form-wrapper align-self-center">
			<div class="row justify-content-end">
				<button onclick="return hide_overlay('#game-overlay')" class="btn bg-transparent">
					<i class="fas fa-times fa-4x"></i>
				</button>							
			</div>
			<div class="form-group">
				<input type="text" name="name" class="form-control" placeholder="Profile name">
			</div>
			<div class="form-group">
				<select class="form-control" id="difficulty">
					<option selected="true" value="normal">Normal (10)</option>
					<option value="medium">Medium (15)</option>
					<option value="hard">Hard (20)</option>
					<option value="forever">Never ends</option>
				</select>
			</div>
			<div class="form-group">
				<button onclick="return create_game()" class="btn btn-outline-success btn-lg btn-block" type="submit">Play</button>
			</div>
		</div>
	</form>
	`
}

/* 
No profile found 
*/

function no_profiles() {
	$("#game-overlay").html(`
		<div class="wrapper row justify-content-center">
			<div class="align-self-center">
				<div class="row justify-content-end">
					<button onclick="return hide_overlay('#game-overlay')" class="btn bg-transparent">
						<i class="fas fa-times fa-4x"></i>
					</button>							
				</div>
				<h3 class="text-center">No profiles found!</h3>	
				<hr class="box-shadow-green">
				<div class="row justify-content-center">
					<h4 class="text-center"> Create one now? </h4>
				</div>
				<div class="row justify-content-center">
					<div class="pt-3">	
						<button onclick="return new_game()" class="btn bg-transparent"><i class="fas fa-gamepad fa-3x"></i></button>
					</div>
				</div>
			</div>
		</div>
	`)
	simon_layout()
	$("#game-overlay").fadeIn(500)
}

/* 
Load profiles
*/

function profiles_template(profiles) {
	$("#profiles").html(`
		<div class="col-md-8">
			<div class="table-responsive">
				<table class="table text-center text-light" width="100%" cellspacing="0">
					<thead>
						<tr class="text-center">
							<th class="pb-5">Profile</th>					
							<th class="pb-5">Progress</th>
							<th class="pb-5">Load</th>
							<th class="pb-5">Delete</th>
						</tr>
					</thead>
					
					
				</table>
			</div>
		</div>
	`);
	for (let i = 0; i < profiles.length; i++) {
		let difficulty = function() {
			if (profiles[i].difficulty == "forever") {
				return "Never ends";
			} else {
				return profiles[i].difficulty;
			}
		}
		$("#profiles .table").append(`
			<tbody>
				<tr>
					<td>${profiles[i].name}</td>
					<td>${profiles[i].round} / ${difficulty()}</td>
					<td>
						<button onclick="load_game(${profiles[i].id})" class="btn bg-transparent" type="button"><i class="fas fa-gamepad fa-2x"></i></button>
					</td>
					<td>
						<button onclick="delete_profile(${profiles[i].id})" class="btn bg-transparent" type="button"><i class="fas fa-trash-alt fa-2x"></i></button>
					</td>
				</tr>
			</tbody>
		`)		
	}
}

/* 
Statistics
*/

// Statistics template
function statistics_template(profiles) {	
	$("#statistics").html(`
		<div class="col-md-8">
			<div class="table-responsive">
				<table class="table text-center text-light" width="100%" cellspacing="0">
					<thead>
						<tr class="text-center">
							<th class="pb-5">Profile</th>	 	
							<th class="pb-5">Score</th>
							<th class="pb-5">Difficulty</th>
							<th class="pb-5">Correct / Incorrect</th>
						</tr>
					</thead>
					
					
				</table>
			</div>
		</div>
	`);
	for (let i = 0; i < profiles.length; i++) {
		let difficulty_name = function () {
			if (profiles[i].difficulty == 10) {
				return "Normal";
			} else if (profiles[i].difficulty == 15) {
				return "Medium";
			} else if (profiles[i].difficulty == 1) {
				return "Test";
			} else {
				return "Hard";
			}
		};
		$("#statistics .table").append(`
			<tbody>
				<tr>
					<td>${profiles[i].name}</td>
					<td>${calculate_score(profiles[i])}</td>
					<td>${difficulty_name()}</td>
					<td>${profiles[i].correct} / ${profiles[i].wrong}</td>
				</tr>
			</tbody>
		`)
	}
}

// No statistics found
function no_statistics() {
	$("#game-overlay").html(`
		<div class="wrapper row justify-content-center">
			<div class="align-self-center">
				<div class="row justify-content-end">
					<button onclick="return hide_overlay('#game-overlay')" class="btn bg-transparent">
						<i class="fas fa-times fa-4x"></i>
					</button>							
				</div>
				<h3 class="text-center">You did not finish <br> game yet!</h3>
				<hr class="box-shadow-green">
				<div class="row justify-content-center">
					<h4 class="text-center"> Play one now? </h4>
				</div>
				<div class="row justify-content-center">
					<div class="pt-3">	
						<button onclick="return new_game()" class="btn bg-transparent"><i class="fas fa-gamepad fa-3x"></i></button>
					</div>
				</div>
			</div>
		</div>
	`);
	simon_layout();
	$("#game-overlay").fadeIn(500);
}

/* 
Game end 
*/

function game_end_template(profile) {
	let difficulty = profile.difficulty;
	let difficulty_name = function() {
		if (difficulty == 10) {
			return ["text-shadow-green", "Normal"]
		} else if (difficulty == 15) {
			return ["text-shadow-yellow", "Medium"]
		} else if (difficulty == 1) {
			return "Test"
		} else {
			text_shadow = "text-shadow-red"
			return ["text-shadow-red", "Hard"]
		}
	};	
	var score_text_shadow = "text-shadow-green";
	let score = calculate_score(profile);
	var message = ""
	if (score == difficulty) {
		message = `which is amazing <i class="far fa-grin-hearts text-success"></i>`
	}
	else if (score > parseInt(difficulty / 2)) {
		message = `Which is Great <i class="far fa-smile-beam text-success"></i>`;
	} else if (score == parseInt(difficulty / 2)) {
		message =  `Which is Good <i class="far fa-smile-beam text-success"></i>`;
	} else if (score > parseInt(difficulty / 2 / 2)) {
		score_text_shadow = "text-shadow-yellow";
		message = `Which is So so <i class="far fa-grin text-warning"></i>`;

	} else {
		score_text_shadow = "text-shadow-red";
		message =  `Which is BAD <i class="fas fa-poo fa-lg text-danger"></i>`;
	}
	$("#game-overlay").html(`
		<div class="row justify-content-center">
			<div class="align-self-center">
				<div class="row justify-content-center">				
					<div class="col-12">
						<h2 class="text-shadow-green">Congratulations!</h2>
						<hr class="box-shadow-green">
						<p class="lead py-2 text-light">You just finished the the game on <br>
							<span class="${difficulty_name()[0]}">${difficulty_name()[1]}</span> <br>
							with score of <span class="${score_text_shadow}">${score}</span> 
						</p> 
						<p class="lead text-light ${score_text_shadow}">${message}</p> 
					</div>	
				</div>
				<hr class="box-shadow-green">
				<div class="row justify-content-center">
					<div class="pt-2">	
						<button onclick="return statistics_menu()" class="btn bg-transparent"><i class="fas fa-chart-area fa-2x"></i></button>
					</div>
					<div class="pt-2">	
						<button onclick="return new_game()" class="btn bg-transparent"><i class="fas fa-gamepad fa-2x"></i></button>
					</div>
				</div>
			</div>
		</div>
	`)
	simon_layout()
	$("#game-overlay").fadeIn(500)
}
