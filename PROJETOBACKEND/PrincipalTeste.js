import {Evento} from "./Evento.js"
import {FuncoesES} from "./EntradaSaida.js"

const ES = new FuncoesES();

var esporte = ES.entrada("Digite o esporte que quer cadastrar o evento: ")
var data = ES.entrada("Digite a data que quer cadastrar o evento: ")
var localizacao = ES.entrada("Digite o localizaca que quer cadastrar o evento: ")
var horario = ES.entrada("Digite o horario que quer cadastrar o evento: ")
var classificacao = ES.entrada("Digite o classificacao que quer cadastrar o evento: ")

var evento1 = new Evento(esporte,data,localizacao,horario,null,classificacao)

// var eventos = [
//     new Evento("volei","19","bauru","7",["joao","roberto"],"18+"),
//     new Evento("Futebol","20","bauru","19",[],"so pancadaria")
// ]

// for (var i =0; i < eventos.length;i++){
//     ES.mensagemCompleta("Evento: "+eventos[i].esporte+" horario "+eventos[i].horario+" local "+eventos[i].localizacao,)
// }

ES.mensagemCompleta(evento1.criarEvento())

for (var i =0; i < evento1.length;i++){
  ES.mensagemCompleta("Evento: "+evento1[i].esporte+" horario "+ evento1[i].data + " local " +evento1[i].localizacao + " dia "+ evento1[i].horario+ "classificação" + evento1.classificacao)}

ES.mensagemCompleta(evento1.participarEvento())

ES.mensagemCompleta(evento1.desistir())

