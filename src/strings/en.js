global.score = function (scoreNumber) {
  return `Score ${scoreNumber}`
};

global.retryMessage = 'Press any key to play again';

global.gameOverMessage = 'Game Over!';

global.winMessage = function (playerNumber) {
  return `Player ${playerNumber} won!`;
}

global.playerSign = function (playerNumber) {
  return `Player ${playerNumber}`;
}

global.health = function (healthNumber) {
  return `Health: ${healthNumber}`;
}

global.angle = function (angleNumber) {
  return `Angle: ${angleNumber}`;
}
