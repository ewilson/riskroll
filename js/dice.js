/**
 * This file handles logic for dice rolling and attack sequences
 */
function attackSequence(attackNum, defendNum, options) {
    var allResults = [];
    var initAttackNum = attackNum;
    var initDefendNum = defendNum;
    while (attackNum > 0 && defendNum > 0 
	   && initAttackNum - attackNum < options.absLoss
	   && initAttackNum - attackNum < initDefendNum - defendNum + options.relLoss
	   && attackNum > options.minRemain) {
	var result = simpleRoll(
				Math.min(attackNum, 3),
				Math.min(defendNum, 2));
	attackNum -= result.attackLoss;
	result.attackNum = attackNum; 
	defendNum -= result.defendLoss;
	result.defendNum = defendNum;
	allResults.push(result);
    }
    return allResults;
}

function simpleRoll(attackNum, defendNum) {
    var attackRoll = buildRoll(attackNum);
    var defendRoll = buildRoll(defendNum);
    return compareDice(attackRoll, defendRoll);
}

function buildRoll(diceNumber) {
    var diceResults = [];
    for (var i = 0; i < diceNumber; i++) {
	diceResults.push(Math.ceil(Math.random() * 6));
    }
    return diceResults;
}

function compareDice(attacker,defender) {
    attacker.sort().reverse();
    defender.sort().reverse();
    var result = {
	attackLoss: 0,
	defendLoss: 0
    };
    var maxDice = Math.max(attacker.length, defender.length);
    var maxMin = Math.min(attacker.length, defender.length);
    var diceResults = []
    for (var dice = 0; dice < maxDice; dice++) {
	var currentResult = {}
	if (dice < attacker.length) {
	    currentResult.attackDie = attacker[dice];
	}
	if (dice < defender.length) {
	    currentResult.defendDie = defender[dice];
	}
	diceResults.push(currentResult);
	if (dice >= maxMin) {
	    continue;
	}
	if (attacker[dice] > defender[dice]) {
	    result.defendLoss += 1;
	} else {
	    result.attackLoss += 1;
	}
    }
    result.diceResults = diceResults;
    return result;
}
