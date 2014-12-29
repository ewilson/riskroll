$(function() {
	$('button').click(function(e) {
		var attackNum = $('#attackNum').val();
		var defendNum = $('#defendNum').val();
		e.preventDefault();
		console.log("#" + attackNum + defendNum);
		attackSequence(attackNum, defendNum);
	});
});
function attackForm() {
    alert('called!');
}