const prompt = require('prompt-sync')();

var raio = Number (prompt('Insira o tamanho do raio do circulo: '))
var pi = 3.14159;

var area = pi * (raio * raio)
//ou = var area = pi * (raio ** 2)

console.log('a area do circulo é: ' + area)