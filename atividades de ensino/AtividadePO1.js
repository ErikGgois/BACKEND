const celular = {
    tamanho: 5,
    cor: "azul",
    sitema: "ios",
    qtdeCameras: 3,
    processador: "a12",
    qtdeMemoriaRam: 6,
    qtdememoriaInterna: 128,
}

const celular2= {
    tamanho: 5,
    cor: "verde",
    sitema: "ios",
    qtdeCameras: 3,
    processador: "a12",
    qtdeMemoriaRam: 6,
    qtdememoriaInterna: 128,
}

var celulares = [celular,celular2]

console.log(celular.cor)
console.log(celular.processador)
celular.processador = "a13"
console.log(celular.processador)