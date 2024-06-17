let notas = [7.5, 8.0, 6.0, 9.5, 5.0, 8.5, 7.0, 10.0 ,6.5, 9.0];
let media = 0
let soma = 0
let NotaMaxima = notas[0]
let NotaMinima = notas[0]
let acimaDaMedia = 0
let reprovados = 0
 
 //imprimir a media das notas

  for(let i = 0; i < notas.length;i++){
   soma += notas[i]
  }
    media = soma/notas.length
    console.log(media)

for(let i = 0; i < notas.length;i++){
   if (notas[i] > NotaMaxima ){
   NotaMaxima = notas[i]
    } else if (notas[i] < NotaMinima ){
    NotaMinima = notas[i]
   }
    }
console.log(NotaMaxima)
console.log(NotaMinima)

for(let i = 0; i < notas.length;i++){
  if (notas[i] > media)
  acimaDaMedia++
}
console.log(acimaDaMedia)

notas.push(8.0)
console.log(notas)


for(let i = 0; i < notas.length;i++){
  if (notas[i] < 6.0)
  reprovados++
}

console.log(reprovados)





 


    

