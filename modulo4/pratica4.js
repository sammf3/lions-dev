let notas = [6,3,4,5]
let media = 0
let soma = 0
let notaAlta = notas [0]
let notaBaixa = notas [0]
let notasAcimaDasMedia = [0]
let notasAbaixoDaMedia = [0]

//Calcular Média

for (let i = 0; i < notas.length; i++){
    soma = soma + notas[i]
}
    media = soma/ notas.length

    //Notas mais alta e nota mais baixa

        for (let i = 0; i < notas.length; i++) {
        if (notas[i] > notaAlta) {
            notaAlta = nota[i]
        }
        if (notas[i] < notaBaixa) {
            notaBaixa = nota[i]
        }
    }

 console.log(notaAlta)
 console.log(notaBaixa)

 //Conte e exiba

 for (let i = 0; i < notas.length; i++) {
    if (notas[i] >= media) {
        notasAcimaDaMedia = notasAcimaDaMedia + 1
    }
}
console.log( `O vetor possui ${notasAcimaDaMedia} notas acima da media {media}.` )

notas.push(20)
