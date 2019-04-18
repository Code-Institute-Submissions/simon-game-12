
/*
Document ready / Events listeners
*/

$(document).ready(function () {
	// Create layout for the game
	simon_layout();
	// Adjust layout of the game if screen size change
	$(window).resize(function () {
		simon_layout();
	});
	// Game menu
	$("#new-game").click(function () { 
		return new_game()	
	});
	$("#load-game").click(function () {
		return load_game()
	});
	$("#statistics").click(function () {
		return statistics()
	});
	$("#settings").click(function () {
		return settings()
	});
});

/* 
Fade out element
*/

function fade_out(selector) {
	$(selector).fadeOut(1000);
	$('#game-centre h2').fadeIn(1000);
	return false
}

/* 
Alerts
*/

function js_alerts(css_class, message) {
	$(".alert").html(`
		<p class="text-${css_class} lead">${message}</p>
	`);
	$(".alert").fadeIn(500);
	$("#js-alerts").fadeIn(1000);
	setTimeout(() => {
		$("#js-alerts").fadeOut(2000);
	}, 5000);
}