function attackSequence(attackNum, defendNum) {
    console.log("In AS");
    console.log(attackNum);
    console.log(defendNum);
  var allResults = [];
  while (attackNum > 0 && defendNum > 0) {
    var result = simpleRoll(
      Math.min(attackNum, 3),
      Math.min(defendNum, 2));
    attackNum -= result.attackLoss;
    defendNum -= result.defendLoss;
    console.log(JSON.stringify(result));
    allResults.push(result);
  }
  console.log(JSON.stringify(allResults));
  return {
    resultList: allResults,
    attackNum: attackNum,
    defendNum: defendNum
  };
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
  var losses = Math.min(attacker.length, defender.length);
  for (var dice = 0; dice < losses; dice++) {
    if (attacker[dice] > defender[dice]) {
      result.defendLoss += 1;
    } else {
      result.attackLoss += 1;
    }
  }
  result.attackSorted = attacker;
  result.defendSorted = defender;
  return result;
}
