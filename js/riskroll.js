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
		var template = Handlebars.compile(source);
		var attackResultHtml = template({player: 'Attacker', 
						 num: results.attackNum});
		var defendResultHtml = template({player: 'Defender', 
						 num: results.defendNum});
		$main.append('<div id="results"></div>');
		var $results = $('#results');
		$results.append(attackResultHtml);
		$results.append(defendResultHtml);
	});
});
