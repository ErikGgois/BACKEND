const celular = {
    tamanho: 5,
    cor: "azul",
    sitema: "android",
    qtdeCameras: 5,
    processador: "snapdragon 8",
    qtdeMemoriaRam: 16,
    qtdememoriaInterna: 64,
    tocar: function (){
        console.log("trim trim trim")
    }
}

const celular2= {
    tamanho: 5,
    cor: "verde",
    sitema: "ios",
    qtdeCameras: 3,
    processador: "a12",
    qtdeMemoriaRam: 6,
    qtdememoriaInterna: 128,
    tocar: function (){
        console.log("trim trim trim")
    }
}

var celulares = [celular,celular2]

console.log(celular.cor)
console.log(celular.processador)
celular.processador = "a13"
console.log(celular.processador) 