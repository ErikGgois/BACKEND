function mediaVetores(vetvetor) {
    var vlrMedia = 0
    for (var i = 0; i < vetvetor.length; i++) {
        vlrMedia = vlrMedia + vetvetor[i];
    }
    vlrMedia = vlrMedia / vetvetor.length;
    return vlrMedia
}

var vetor = [10,5,5,10]

var valorRetornado = mediaVetores(vetor);
var teste = console.log(valorRetornado)
console.log(teste)