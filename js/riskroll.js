$(function() {
	$('button').click(function(e) {
		$('#results').remove();		
		var attackNum = $('#attackNum').val();
		var defendNum = $('#defendNum').val();
		e.preventDefault();
		var results = attackSequence(attackNum, defendNum);
		console.log(results);
		var $main = $('#main');
		var source   = $("#results-template").html();
		Handlebars.logger.level = 0;
		var template = Handlebars.compile(source);
		var resultHtml = template({results: results});
		$main.append('<div id="results"></div>');
		var $results = $('#results');
		$results.append(resultHtml);
	});
});
