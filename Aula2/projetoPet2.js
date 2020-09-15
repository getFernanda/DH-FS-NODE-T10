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