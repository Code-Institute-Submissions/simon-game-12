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
			<div id="statistics" class="col-6 d-flex justify-content-center">
				<div class="pb-5 align-self-end">	
					<i class="fas fa-chart-area fa-3x"></i>
				</div>
			</div>
			<div id="settings" class="col-6 d-flex justify-content-center">
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
			<hr class="my-2">
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
				</select>
			</div>
			<div class="form-group form-check">
				<input type="checkbox" class="form-check-input" id="sounds" checked>
				<label class="form-check-label pt-3 pl-4 text-light" for="sounds">Sounds on</label>
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
				<hr>
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
						</tr>
					</thead>
					
					
				</table>
			</div>
		</div>
	`);
	let difficulty = 0
	for (let i = 0; i < profiles.length; i++) {
		if (profiles[i].difficulty == "normal") {
			difficulty = 10
		} else if (profiles[i].difficulty == "medium") {
			difficulty = 15
		} else if (profiles[i].difficulty == "test") {
			difficulty = 1
		} else {
			difficulty = 20
		}
		$("#profiles .table").append(`
			<tbody>
				<tr>
					<td>${profiles[i].name}</td>
					<td>${profiles[i].round} / ${difficulty}</td>
					<td>
						<button onclick="load_game(${profiles[i].id})" class="btn bg-transparent" type="button"><i class="fas fa-gamepad fa-2x"></i></button>
					</td>
				</tr>
			</tbody>
		`)		
	}
}

/* 
No statistics found
*/

function no_statistics() {
	$("#game-overlay").html(`
		<div class="wrapper row justify-content-center">
			<div class="align-self-center">
				<div class="row justify-content-end">
					<button onclick="return hide_overlay('#game-overlay')" class="btn bg-transparent">
						<i class="fas fa-times fa-4x"></i>
					</button>							
				</div>
				<h3 class="text-center">You did not finish a game yet!</h3>	
				<hr>
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
	`)
	simon_layout()
	$("#game-overlay").fadeIn(500)
}