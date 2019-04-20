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

// Game centre

/* function gc_alerts(css_class, message) {
	$.when($("#game-centre h2").fadeOut(500)).then(function () {
		$("#game-centre h2").html(`
			<p class="text-${css_class} font-weight-bold px-2 lead">${message}</p>
		`);
		$("#game-centre h2").fadeIn(500);
		setTimeout(() => {
			game_centre_h2();
		}, 5000);
	});

} */


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