const prompt = require('prompt-sync')();

var n1 = Number (prompt('insira um numero'))
var n2 = Number (prompt('insira outro numero'))
var n3 = Number (prompt('insira outro numero'))

var a = n1
var b = n2
var c = n3

if(n1 > n2 && n1 > n3){
    c = n1
    if (n2 > n3){
        a=n3
        b=n2}
    }
    
    