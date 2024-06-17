const readline = require ('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let funcionarios =  []
let Maiorsalario 
exibirMenu()

    function exibirMenu(){}
        console.log(`
   
   }
    Menu:
       1. Cadastrar funcionario
       2. Editar funcionario
       3. Remover funcionario
       4. Exibir funcionario com maior salario
       5. Sair 
    `)
    rl.question ('Escolha uma opção:',(opcao) => {
        switch (opcao){
               case '1':
               Cadastrarfuncionario()
               break;
               case '2':
               EditarFuncionarios()
               break;
               case '3':
               RemoverFuncionario()
               case '4':
                ExibirSalario()
               break;
               case '5':
               rl.close()
               default:
               console.log('Opção invalida, tente novamente.')
               exibirMenu()
           }
        })

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
     function editar(){
        if(vetor.length == 0){
        }else{
      //  mostrar os elementos
      rl.question('Digite o numero do elemento que deseja editar:', (numero)) =>{
        if (numero)
      }
        }
        }
    
        




     