/**
 * This file handles any page logic/wiring
 */
$(function() {
	addDropdowns();
	$('button').click(function(e) {
		$('#results').remove();		
		var attackNum = $('#attackNum').val();
		var defendNum = $('#defendNum').val();
		e.preventDefault();
		var options = { absLoss: attackNum, relLoss: attackNum, minRemain: 0};
		var results = attackSequence(attackNum, defendNum, options);
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

function addDropdowns() {
    var source = $("#dropdown-template").html();
    var template = Handlebars.compile(source);
    var $form = $('#form');
    var selections = [];
    for (var i = 1; i <= 40; i++) {
	selections.push(i);
    }
    var attackDropdown = template({
	    player: 'attackNum',
	    option: selections
	});
    var defendDropdown = template({
	    player: 'defendNum',
	    option: selections
	});

    $form.append(attackDropdown);
    $form.append(defendDropdown);
}
