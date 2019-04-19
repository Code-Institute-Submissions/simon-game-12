


/* 


Testing


*/

// Game centre

function gc_alerts(css_class, message) {
	$.when($("#game-centre h2").fadeOut(500)).then(function () {
		$("#game-centre h2").html(`
			<p class="text-${css_class} font-weight-bold px-2 lead">${message}</p>
		`);
		$("#game-centre h2").fadeIn(500);
		setTimeout(() => {
			game_centre_h2();
		}, 5000);
	});

}




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


