/* 
Create random sequence for testing
*/

function random_sequence() {
	$.when(hide_menu()).then(function () {
		let how_many = Math.floor((Math.random() * 21) + 1)
		$("#game-centre h2").html(how_many)
		var game_save = {
			"sequence": []
		}
		var z = 0;
		while (z < how_many) {
			game_save.sequence.push(random_ele())
			z += 1
		}
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
