const axios = require('axios');

const buscarUsuariosGitHub = async () =>{
    let githubUsers = await axios.get('https://api.github.com/users/getFernanda').then(resposta => resposta)

    console.log(githubUsers)
}

buscarUsuariosGitHub()