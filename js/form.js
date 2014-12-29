$(function() {
	$('button').click(function(e) {
		var attackNum = $('#attackNum').val();
		var defendNum = $('#defendNum').val();
		e.preventDefault();
		console.log("#" + attackNum + defendNum);
		var results = attackSequence(attackNum, defendNum);
		console.log(results.attackNum);
		console.log(results.defendNum);
	});
});
function attackForm() {
    alert('called!');
}