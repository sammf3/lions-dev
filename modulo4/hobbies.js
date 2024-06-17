const readline = require ('readline')
const rl = readline.createInterface({
input: process.stdin,
ontput: process.stadin
})

let hobbies = []
exibirMenu()

function exibirMenu(){
    console.log(`

}
    Menu:
    1.Cadastrar piloto
    2.Listar pilotos cadastrados
    3.Exibir ano da corrida
    4.Remover piloto
    5.sair
    `)
}
//1.Cadastrar piloto

rl.question('Escolha nova opcao:',(opcao) => {
    switch(opcao){
        case '1':
    cadastrarPiloto()
    break;
    case '2':
    listarPilotos()
    break;
    case '3':
    exibirCarro()
    break;
    case '4':
    removerPiloto()
    break;
    case '5':
    rl.close()
    default:
    }
    console.log('Opcao invalida tente novamente!')
    exibirMenu()
}
)
function cadastrarPiloto(){
        rl.question('Digite o nome do piloto', (nome) => {
        rl.question('Digite o nome do piloto',(carro) => { 
        rl.question('Digite o nome do piloto',(ano) => {
        pilotos.push({nome:nome, carro:carro,ano:parseFloat(ano)})
        console.log("Piloto cadstrado com sucesso!")
        exibirMenu()
     })
  })
})
}
function listarPiloto(){
    if(pilotos.lenght === 0){
    console.log('Nenhum piloto foi cadastrado!')
    }else{
    console.log('Lista de pilotos:')
    pilotos.forEach((piloto,index) => {
        console.log(`${index + 1}. Nome:${piloto.nome},
        Carro:${piloto.carro},Ano :${piloto.ano.Fixed(2)}`)
    })
}
    exibirMenu()
    }
