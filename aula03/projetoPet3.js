const json = require('./json')



// relembrando criação de uma variável com let recebendo valor de uma string
// let organizacao = "Petshop Node";

// criando um array contendo objetos, onde, a idéia deste array é criar uma lista de animais
// de modo que cada objeto irá representar um animal dentro da nossa lista de pets
let pets = [{
    nome: 'Jorge',
    tipo: 'cachorro',
    raca: 'Golden',
    idade: 2,
    genero: 'Masculino',
    vacinado: true,
    servicos: []
  },

  {
    nome: 'Fred',
    tipo: 'cachorro',
    raca: 'Shitzu',
    idade: 6,
    genero: 'Masculino',
    vacinado: false,
    servicos: []
  }];
  
// criando função para listar todos os objetos que temos dentro do array de pets, ou seja,
// o propósito dessa função é listar todos animais contidos dentro da lista de pets  

const listaPets = (array) => {
     for (i = 0; i<pets.length; i++ ){
    console.log ("Nome: " + pets[i].nome);
    console.log ("Tipo: " +  pets[i].tipo);
    console.log ("Raca: " + pets[i].raca);
    console.log ("Idade: " + pets[i].idade);
    console.log ("Genero: " + pets[i].genero);
    }
};
// criando função que será utilizada dentro da função cadastrarPet, esta função tem o propósito de 
// validar o objeto que estamos recebendo para certificar que iremos sempre passar um objeto válido
// para a função cadastrarPet
const validaDados = (novoPet) => {
    return (
        novoPet.nome !="undefined" && 
        novoPet.tipo !="undefined" && 
        novoPet.raca !="undefined" && 
        novoPet.idade !="undefined" && 
        novoPet.genero !="undefined" && 
        novoPet.vacinado!="undefined");
}


// criando função de cadastrar um novo pet dentro da nossa lista de pets que nada mais é que a variável pets
// que é o nosso array de objetos, ou seja, essa função tem propósito de adicionar um objeto contendo todas
// as propriedades válidas (nome, tipo, raca, idade e genero) para que tenhamos um novo elemento/pet dentro 
// da nossa lista de pets
const cadastrarPet = (objetoPet) => {
    if(typeof objetoPet == "object"){
      if(validaDados(objetoPet)){
        pets.push(objetoPet)
        console.log(pets)
      } else {
        console.log("O objeto não tem todas propriedades necessárias informadas")
      }
    } else { 
      console.log("Insira um objeto válido")
    }
  }
  

objetoPet = {
    nome: "Jack Nelson",
    tipo: "Cachorro",
    raca: "SRD",
    idade: 5,
    genero: "masculino",
    vacinado: true,
    servicos: []
}

cadastrarPet(objetoPet);

listaPets()

//funcao que nosso colega Vitor Silvestre mostrou,  que é meio que uma segunda forma de fazer a funcao de 
// cadastrarPet que temos acima, porém, esta função invés de receber um objeto, ela tem como propósito 
// receber 5 parâmetros para tratá-los e criar um objeto a partir dos mesmos, sendo assim, iremos 
// ter o mesmo propósito de adicionar um elemento/pet dentro da nossa variável pets que é nosso array de objetos
// function adicionarPetDoVitao(nome, tipo, raca, idade, genero){
//   let novoPet = {
//       nome: nome,
//       tipo: tipo,
//       raca: raca,
//       idade: idade,
//       genero: genero
//   }
//   pets.push(novoPet);
//   console.log(pets)
// }

// objeto criado apenas para ser passado como parâmetro dentro da chamada da função cadastrarPet 
// que está na linha 86
// let objPet = {
//   nome: 'Novo Pet',
//   tipo: 'desconhecido',
//   raca: 'desconhecido',
//   idade: 3,
//   genero: 'desconhecido'
// };

// essas chamadas as funções abaixo servem para executarmos as mesmas e estão comentadas, mas, 
// para conseguirem executar é só tirar o comentário de cada uma delas.
// cadastrarPet(objPet)
// listarPets()
// adicionarPetDoVitao('Victor', 'desconhecido', 'desconhecido', 25, 'desconhecido')

// Desafio - função para verificar animais vacinados ou aqueles que precisam de vacina, lembrando que está função irá receber um parâmetro.
// (podendo ser um único pet da lista, ou, caso queira fazer o Extra terá que trabalhar a lista por completo).
// (Extra - se quiserem efetuar uma listagem de animais vacinados e não vacinados)
// Dica: vocês podem criar uma propriedade vacinado e atribuir valores booleanos (true ou false)

const checkVacinaPet = (petName)=> {
    result = ""
    for(pet of pets){
        // console.log("pet.nome: " + pet.nome + " vacinado: " + pet.vacinado)
        if (pet.nome == petName) {
            if (pet.vacinado) {
                result = true
                break
            } else {
                result = false
                break
            }
        }
    }

    switch (result){
        case(true):
            console.log("O pet " + pet.nome + " já foi vacinado")
            break
        case(false):
            console.log("O pet " + pet.nome + " ainda não foi vacinado")
            break
        default:
            console.log("Pet não encontrado")
    }        
}
const listarVacinados= ()=>{
    vacinados = []
    naoVacinados = []
    for(pet of pets){
        if (pet.vacinado) {
            vacinados.push(pet.nome)
        } else {
            naoVacinados.push(pet.nome)
        }
    }
    console.log("Pets Vacinados:")
    for (pet of vacinados) {
        console.log(pet)
    }
    console.log()
    console.log("Pets não vacinados:")
    for (pet of naoVacinados) {
        console.log(pet)
    }
}
// Solução ícaro

// let checkIfVaccinated = (name) => {
  
//     let index;
  
//     for(let i = 0; i < pets.length; i++) {
      
//       if (pets[i].nome === name) {
//         index = i;
//       }
//     } 
//     if(index === undefined) {
  
//       return ('Insira um nome valido'); 
//     } else {
  
//       if (pets[index].vacinado) {
//         return (`o pet ${name} esta vacinado`); 
//       } else {
        
//         return (`o pet ${name} nao esta vacinado`);
//       }
//     }
//   };

//   //callbacks

//   function calcular(n1,n2,operacao){
//       operacao(n1,n2)
//   }

//   function soma (n1,n2){
//       console.log(n1+n2)
//   }

//   calcular (10,5, soma)


  // let banhar = "esta tomando banho"
  // let tosar = "esta fazendo a tosa"
  
//   function servicos (banho, tosa, etapa) {
//       etapa (banho,tosa)
//   }
  
//   function servicosPrestados(banho, tosa){
//       for(let i = 0; i < pets.length; i++){
//           console.log("O pet " + pets[i].nome +" "+ banho + " e " + tosa)
//       }
//   }
  
//   servicos(banhar, tosar, servicosPrestados)


  // solucao Victor

const servicos = (pet,servico) =>{
      servico(pet);

  }

  function darBanhoNoPet(pet){
    pet.servicos.push("banho")
    console.log ("O pet " + pet.nome + " tomou banho ")
  }

  function tosarOPet(pet){
    pet.servicos.push("tosa")
    console.log ("O pet " + pet.nome + " foi tosado ")
  }

  servicos(pets[0],darBanhoNoPet);
  servicos(pets[0],tosarOPet);

  console.log (json)


  // desafio cumprido utilizando metodo do nosso colega Orlando que tem o propósito de retornar
// a quantidade e o nome de cada pet vacinado e também não vacinado em apenas uma função
// function vacinadosOrlando(pets){
//   let petsVacinados = [];
//   let petsNaoVacinados = [];
//   let numPetVac = 0;
//   let numPetNVac = 0;

//   for(let i=0 ;i < pets.length; i++){
//     if(pets[i].vacinado){
//       petsVacinados.push(pets[i].nome);
//       numPetVac = numPetVac + 1;
//     } else{
//       petsNaoVacinados.push(pets[i].nome)
//       numPetNVac = numPetNVac + 1;
//     }
//   }
//   console.log("Pets Vacinados: ("+numPetVac+")");
//   console.log("Essa é a lista de animais vacinados: " + petsVacinados);

//   console.log("Pets NÃO Vacinados: ("+numPetNVac+")");
//   console.log("Essa é a lista de animais não vacinados: " + petsNaoVacinados);
// }

// vacinadosOrlando(pets);

// funcao do nosso colega Arlei que esta retornando o array de objetos completo com todos animais nao vacinados
// function naoVacinados(array) {
//   let vacinados= [];
//   for(let i in array){
//     if(!array[i].vacinado) vacinados.push(array[i]);
//   }

//   console.log(vacinados)
// }

// // funcao do nosso colega Arlei que esta retornando o array de objetos completo com todos animais vacinados
// function vacinados(array) {
//   let vacinados= [];
//   for(let i in array){
//     if(array[i].vacinado) vacinados.push(array[i]);
//   }

//   console.log(vacinados)
// }

// // naoVacinados(pets)
// // vacinados(pets)

// // callbacks
// function calcular(numero1, numero2, operacao){
//   operacao(numero1, numero2)
//   console.log("A operação foi realizada com sucesso")
// }

// function soma(numero1, numero2){
//   console.log(numero1 + numero2)
// }

// // calcular(10, 5, soma)

// // Desafio - criar uma funcao callback chamada servicosPrestados que tenha como dois servicos: dar banho no pet e tosar o pet
// // sendo assim teremos sempre que passar um pet da nossa lista de pets e tambem um servico que aquele pet ira utilzar
// function servicosPrestados(pet, servico) {
//     servico(pet)
// }

// function darBanhoNoPet(pet){
//   pet.servicos.push("banho")
//   console.log("O pet " + pet.nome + " tomou banho")
// }

// function tosarPet(pet){
//   pet.servicos.push("tosa")
//   console.log("O pet " + pet.nome + " foi tosado")
// }

// servicosPrestados(pets[0], darBanhoNoPet)
// servicosPrestados(pets[0], tosarPet)

// Desafio - criar uma funcao que adicione todos esses pets da lista que esta contida na constante json 
// dentro da nossa lista de pets que e a variavel pets 
// lembrando que: nao precisa ter validacao de dados ta galera, por qual motivo ? 
// No json nao temos as propriedades vacinado, servicos
// dica : utilizar JSON.parse na sua string json para transformá-la em um array de objetos válidos

const cadastrarPetsDoJsonSpredOperator = (lista, json)=>{
  let arrayPets = JSON.parse(json)
  lista.push(...arrayPets)
  return lista
}

const cadastrarPetsDoJsonFor = (lista, json)=> {
  let arrayPets = JSON.parse(json)
  for (let i = 0; i < arrayPets.length; i++) {
    lista.push(arrayPets[i])
  }
  return lista
}

// console.log(cadastrarPetsDoJsonSpredOperator(pets, json))
// console.log(cadastrarPetsDoJsonFor(pets, json))


  //exe cadastrar jSon 

 const cadastrarPetsdoJson = (lista, json) =>{
    let arrayPets = JSON.parse(json)
    
  }