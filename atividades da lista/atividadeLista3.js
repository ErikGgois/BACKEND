const prompt = require('prompt-sync')();

var n1 = prompt('qual a quantidade de notas de 2 reais: ');
var n2 = prompt('qual a quantidade de notas de 5 reais: ');
var n3 = prompt('qual a quantidade de notas de 10 reais: ');
var n4 = prompt('qual a quantidade de notas de 20 reais: ');
var n5 = prompt('qual a quantidade de notas de 50 reais: ');
var n6 = prompt('qual a quantidade de notas de 100 reais: ');
var n7 = prompt('qual a quantidade de notas de 200 reais: ');

var n8 = n1*2 + n2*5 + n3*10 + n4*20 + n5*50 + n6*100 + n7*200

console.log ('O valor total do montante é: ', Number(n8))