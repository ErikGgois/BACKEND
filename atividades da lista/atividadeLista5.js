const prompt = require('prompt-sync')();

var n1 = Number (prompt ('quantar horas normais trabalhadas: '))
var n2 =  Number (prompt ('quantas horas extras trabalhadas: '))

var n3 = (n1*16.2379) + (n2*24.356863636)
var n4 = n3 - (n3*0.20)

console.log('o salario bruto é R$ ' + n3, 'e o salario liquido é ' + n4)