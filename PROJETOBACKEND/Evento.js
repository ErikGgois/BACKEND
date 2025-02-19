export class Evento{
    constructor(esporte,data,localizacao,horario,participantes,classificacao){
        this.esporte = esporte;
        this.data = data;
        this.localizacao = localizacao;
        this.horario = horario;
        this.participantes = participantes;
        this.classificacao = classificacao;
    }

    participar(Nome){}

    criarEvento(){
        return "voce criou o evento de "+ this.esporte + " dia " + this.data + " em " + this.localizacao + " às " + this.horario +" nivel " + this.classificacao;
    }

    participarEvento(){
        return "Quero participar desse evento "
    }

    desistir(){
        return "Estou desistindo do evento "
    }
}