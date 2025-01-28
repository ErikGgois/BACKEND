const prompt = require('prompt-sync')();

var numero = Number (prompt('Insira uma distancia em metros: '))
var convertido = numero / 1000

console.log ("A distancia informada em quilometro é " + convertido+ "km")