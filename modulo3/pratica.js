let nota

console.log("Qual a nota?")
process.stdin.once('data',function(data){
nota = data.toString().trim()
nota = processamento(nota)

console.log(calcular(nota))
if (nota == 'A'||nota == 'B'|| nota == 'C')
    console.log(`Parabéns voce foi aprovado: ${nota}`)
    } else if {
console.log(`Voce foi reprovado: ${nota}`)
      process.exit()
    })
 