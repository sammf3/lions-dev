//Samantha!!! falta encontrar o maior salário
//

const readline = require ('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let funcionarios =  []
let Maiorsalario 
exibirMenu()

    function exibirMenu(){
    console.log(`
   }
    Menu:
       
       1. Cadastrar funcionario
       2. listar todos os funcionarios cadastrados
       3. Exibir funcionario com maior salario
       4. Editar funcionario
       5. Remover funcionario
       6. Sair 
    `)
}
    //1.Adaptar o menu para ter novas opcoes
    rl.question ('Escolha uma opção:',(opcao) => {
        switch (opcao){
               case '1':
               cadastrarFuncionario()
               break;
               case '2':
               listarFuncionarios()
               break;
               case '3':
               exibirSalario()
               break;
               case '4':
               editarFuncionario()
               break;
               case '5':
               removerFuncionario()
               break;
               case'6':
               rl.close()
               default:
              }
               console.log('Opção invalida, tente novamente.')
               exibirMenu()
            }
          )
        //1. Cadastrar funcionario 

              function cadastrarFuncionario(){
              rl.question('Digite o nome do funcionario: ', (nome) => {
              rl.question('Digite o cargo do funcionario: ', (cargo) => {
              rl.question('Digite o salario do funcionario: ', (salario) => {
              funcionarios.push({nome:nome, cargo: cargo, salario:parseFloat(salario) })
              console.log("Funcionario cadastrado com sucesso!")
              exibirMenu()
        })
     })
  })
}
         //2.listar funcionario
                function listarFuncionarios() {
              if (funcionarios.length === 0) {
              console.log('Nenhum funcionário cadastrado.')
              } else {
     console.log('Lista de funcionários:')
     funcionarios.forEach((funcionario, index) => {
     console.log(`${index + 1}. Nome: ${funcionario.nome},
  Cargo: ${funcionario.cargo}, Salário: R$$
  {funcionario.salario.toFixed(2)}`)
  })
  }
  exibirMenu()
  }
           //3. Editar funcionarios
    function editar(){
    if(vetor.length == 0){
    }else{
    }

    }
  rl.question('Digite o número do elemento que deseja editar: ', (numero) => {
    if (numero > 0 && numero <= vetor.length) {
    rl.question('Digite a nova propriedade 1: ', (propriedade1) => {
    rl.question('Digite a nova propriedade 2: ', (propriedade2) => {
    rl.question('Digite a nova propriedade 3: ', (propriedade3) => {
    vetor[numero - 1] = {
    propriedade1,
    propriedade2,
    propriedade3
    }

    console.log('editado com sucesso!')
    exibirMenu()
            })
         })
      })
    } else {
    console.log('Número inválido, tente novamente.')
    exibirMenu()
    }    
  })
  //4.Remover funcionarios

     function remover() {
    if (vetor.length == 0) {
    console.log('Nada cadastrado.')
    exibirMenu()
    } else {
    console.log('Lista de elementos')
    vetor.forEach((elemento, index) => {
    console.log(`${index + 1}. ${funcionario}`)
    })

    rl.question('Digite o número do elemento que deseja remover: ', (numero) => {
    if (numero > 0 && numero <= vetor.length) {
    vetor.splice(numero - 1, 1)
    console.log('Funcionario removido com sucesso!')
    exibirMenu()
    } else {
    }
    console.log('Número inválido, tente novamente.')
    exibirMenu()
    })
      }
        }
        //6.Sair
      
