/*
Document ready / Events listeners
*/

$(document).ready(function () {
	// Create layout for the game
	simon_layout();
	// Update Game setting
	create_game_setting();
	// Adjust layout of the game if screen size change
	$(window).resize(function () {
		simon_layout();
	});
	// Game menu
	$("#new-game").click(function () {
		return new_game();
	});
	$("#load-game-menu").click(function () {
		return load_game_menu();
	});
	$("#statistics-menu").click(function () {
		return statistics_menu();
	});
	$("#settings-menu").click(function () {
		return settings();
	});
	// Game setting
	$("#sound-setting").click(function () {
		return sounds();
	});
	$("#sequence-setting").click(function () {
		return sequence_setting();
	});
	// Game tiles
	add_click_events();

});


/* 
Add listeners 
*/

function add_click_events() {
	$("#game-col-0").click(function () {
		check_answer(0);
		return get_sound_setting(0);
	});
	$("#game-col-1").click(function () {
		check_answer(1);
		return get_sound_setting(1);
	});
	$("#game-col-2").click(function () {
		check_answer(2);
		return get_sound_setting(2);
	});
	$("#game-col-3").click(function () {
		check_answer(3);
		return get_sound_setting(3);
	});
}

/* 
Remove listeners
*/

function remove_click_events() {
	$("#game-col-0").off("click");
	$("#game-col-1").off("click");
	$("#game-col-2").off("click");
	$("#game-col-3").off("click");
}

/* 
Alerts
*/

// JS alerts
function js_alerts(css_class, message) {
	$(".alert").html(`
		<p class="${css_class} text-light lead">${message}</p>
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
	get_sound_setting("incorrect");
	$(overlay).fadeOut(500);
	$("#game-overlay").fadeOut();
	setTimeout(() => {
		$("main .container-fluid").fadeIn(500);
		game_centre_h2();
		simon_layout();
	}, 700);
	return false;
}

