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
			<div id="load-game" class="col-6 d-flex justify-content-center">
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
New game form
*/

function new_game_template() {
	return `
	<form class="row justify-content-center">								
		<div class="form-wrapper align-self-center">
			<div class="row justify-content-end">
				<button onclick="return fade_out('#game-overlay')" class="btn bg-transparent">
					<i class="fas fa-times fa-4x"></i>
				</button>							
			</div>
			<div class="form-group">
				<input type="text" name="name" class="form-control" placeholder="Profile name">
			</div>
			<div class="form-group">
				<select class="form-control" id="difficulty">
					<option selected="true" disable>Difficulty</option>
					<option value="normal">Normal (10)</option>
					<option value="medium">Medium (15)</option>
					<option value="hard">Hard (20)</option>
				</select>
			</div>
			<div class="form-group form-check">
				<input type="checkbox" class="form-check-input" id="sounds" checked>
				<label class="form-check-label pt-3 pl-4 text-light" for="sounds">Sounds on</label>
			</div>
			<div class="form-group pt-4">
				<button onclick="return create_game(this)" class="btn btn-outline-success btn-lg btn-block" type="submit">Play</button>
			</div>
		</div>
	</form>
	`
}