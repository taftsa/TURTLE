$(document).on('click', '.letterKey.c', function(){
	$('.letter:empty:first').text($(this).html()).addClass('guessed');
});

$(document).on('click', '.Del.c', function(){
	$('.letter:not(:empty):last').empty().removeClass('guessed');
});

$(document).on('click', '.Enter.c', function(){	
	let guessedWord = "";
	
	$('.letter.guessed').each(function(){
		guessedWord += $(this).html();
	});
	
	if (guessedWord.length == 6) {
		if (guessedWord == "TURTLE") {
			$('.letter.guessed').addClass('correct');
			$('.c').removeClass('c');
		} else {
			$('#guesses').effect('shake');
		};
	} else {
		$('#guesses').effect('shake', {distance: 8});
	};
});

$(document).on('click', '#help', function(){
	alert('\r\nGuess the TURTLE in one try.\r\n\r\nEach guess must be the six-letter word "TURTLE."\r\n\r\nThe correct answer is and always will be "TURTLE."\r\n\r\nA new TURTLE will be available each time you open your browser!');
});