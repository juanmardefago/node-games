global.score = function (scoreNumber) {
  return `Puntaje ${scoreNumber}`
};

global.retryMessage = 'Presiona cualquier tecla para volver a jugar';

global.gameOverMessage = 'Perdiste!';

global.winMessage = function (playerNumber) {
  return `Gana el jugador ${playerNumber}!`;
}

global.playerSign = function (playerNumber) {
  return `Jugador ${playerNumber}`;
}

global.health = function (healthNumber) {
  return `Vida: ${healthNumber}`;
}

global.angle = function (angleNumber) {
  return `Angulo: ${angleNumber}`;
}
