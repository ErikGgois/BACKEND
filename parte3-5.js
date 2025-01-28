const prompt = require('prompt-sync')();

var numero = prompt('Digite o numero da tabuada desejada: ')

console.log("Tabuada do " + numero)
for(var x= 1; x <= 10; x++){
    
    console.log(numero + "X" + x + " = " + (numero * x))
}