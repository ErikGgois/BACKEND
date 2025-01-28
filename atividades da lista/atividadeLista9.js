const prompt = require('prompt-sync')();

var n1 = prompt('digite o valor em reais que deseja converter em dolar: ');
var n2 = '5.77'

console.log ('o valor informado em dolar é: ', n1 * parseFloat(n2) )