const prompt = require('prompt-sync')();

var numero = prompt('Insira o numero da tabuada')

console.log("Tabuada do " + numero)
for(var x = 1; x <= 10; x++){
    
    console.log(numero + "X" + x + " = " + (numero * x))

}