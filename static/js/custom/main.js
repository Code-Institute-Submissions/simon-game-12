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
	$("#wrapper").click(function () {
		return load_game()
	});
	$("#statistics").click(function () {
		return statistics()
	});
	$("#settings").click(function () {
		return settings()
	});
	// Game tiles
	$("#game-col-0").click(function () {
		return flash_play(0)
	});
	$("#game-col-1").click(function () {
		return flash_play(1)
	});
	$("#game-col-2").click(function () {
		return flash_play(2)
	});
	$("#game-col-3").click(function () {
		return flash_play(3)
	});
});


/* 
Alerts
*/

// JS alerts
function js_alerts(css_class, message) {
	$(".alert").html(`
		<p class="text-${css_class} lead font-weight-bold">${message}</p>
	`);
	$("#js-alerts").slideDown(1000);
	setTimeout(() => {
		$("#js-alerts").slideUp(2000);
	}, 5000);
}

/* 
Close #game-overlay
*/

function hide_overlay(overlay) {
	play_audio("incorrect")
	$(overlay).fadeOut(500);
	game_centre_h2();
	return false
}

