const prompt = require('prompt-sync')();

var nota1 = Number( prompt('digite a primeira nota'));
var nota2 = Number( prompt('digite a segunda nota'));
var nota3 = Number( prompt('digite a terceira nota'));
var nota4 = Number( prompt('digite a quarta nota'));

console.log('A media das notas é', (nota1+nota2+nota3+nota4)/4)