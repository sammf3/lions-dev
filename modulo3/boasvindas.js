var nome = ""
console.log('Qual o nome do usuario?')

process.stdin.on('data', function(data){

 nome = data.toString()
console.log('ola' + nome)
process.exit()
})