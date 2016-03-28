(function(){
	// This is where you will write your function for the programming challenge
	// Do not commit console.log statements
	// Use ajax to reach the api endpoint
	// Whether or not you use jQuery, you still have to fix the jQuery errors. Removing jQuery is not fixing the problem.

	var mouseover = $('.mouse-over');
	var click     = $('.click');
    var sub       = $('.submit');
	var titles;

	function saveTitle() {
		var title = $(".title").text();
		document.cookie = "title=" + title;
	}

	mouseover.on('mouseover', function() {
		$(this).html('Scrooge McDuck!');
		$(this).height($(this).height() + 50);
	});

	click.click('click', function() {
		$(this).html('Peace Out!');
		$(this).fadeOut(1500);
		return false;
	});

	$(".button1").click(function() {
		var random;
		$(".button1").text("Change it");
		if(!$(".button2")[0]) {
			$(".button1").after('<button class="button2" type="button">Keep It</button>');
			$(".button2").click(saveTitle);
		}

		random = Math.floor(Math.random() * titles.length) + 0;

		$(".title").text(titles[random]);

	});

	$(".form1").submit(function(e) {
		e.preventDefault();
		if ($('#form').val() !== '') {
			$('input').each(function() {
				$(this).fadeOut('slow');
			});
			$(this).append('<h2>Congratulations! You\'ve entered some text!</h2>');
		}
	});

	$(document).on("ready", function() {
		if(document.cookie.indexOf("title=") > -1) {
			$(".title").text(document.cookie.split('=')[1]);
		}
		
		$.getJSON("http://www.mattbowytz.com/simple_api.json", "data=quizData", function(data) {
			titles = data.data;

			console.log("Suggestions ready");
		});
		setTimeout(function(){
			$(".timeout").fadeIn('slow');
		}, 1000);
	});

})(jQuery);
