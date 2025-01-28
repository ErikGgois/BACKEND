const prompt = require('prompt-sync')();

var num1 = Number( prompt('escreva o primeiro numero '));
var num2 = Number( prompt('escreva o segundo numero '));
var num3 = Number( prompt('escreva o terceiro numero '));

var a =0
var b=0
var c=0

if(num1<num2 && num1<num3){
    a = num1
    if(num2 < num3){
        b = num2;
        c = num3
    }else{
        b = num3;
        c = num2;
    }
    //ver quem é o B e o C entre n2 e n3
}else if(num2<num1 && num2<num3){
    a = num2;
    //ver quem é o B e o C entre n1 e n3
}else{
    a = num3
    if(num2<num1){
        b = num2
        c= num1
    }else{
        b = num1
        c = num2
    }
    //ver quem é o B e o C entre n2 e n1
}

console.log(a," < ",b," < ", c)