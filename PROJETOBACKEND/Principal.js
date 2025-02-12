const usuario = require('./Usiario.js');
const entradaSaida = require('./EntradaSaida.js')

const usuario1 = new usuario("Roberval","roberval@bol.com","senhadificil123")

const entradaSaida = require('./EntradaSaida.js');
const ES = new entradaSaida();

usuario1.nome= "roberval da silva"

var login = ES.entrada('digite o usuário: ')
var senha = ES.entrada('Digite a senha ')

ES.mensagemCompleta(usuario1.fazerLogin(login,senha))