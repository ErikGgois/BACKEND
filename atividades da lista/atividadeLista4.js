const prompt = require('prompt-sync')();

var n1 = Number (prompt ('Digite a primeira nota: '))
var n2 =  Number (prompt ('Digite a segunda nota: '))
var n3 = Number (prompt ('Digite a terceira nota: '))

var media = ((n1*1) + (n2*2) + (n3*3)) / 6

console.log ('A media do aluno é: ', media )