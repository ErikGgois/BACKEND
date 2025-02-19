import prompt from 'prompt-sync';


export class FuncoesES{
    constructor(){
        this.prompt = prompt();
    }
    entrada(mensagem){
        return this.prompt(mensagem+": ");
    }
    mensagemSimples(mensagem){
        console.log(mensagem);
    }
    mensagemCompleta(mensagem){
        console.log("");
        console.log(mensagem);
        console.log("");
    }
}

