const url = 'http://my-json-server.typicode.com/maujor/livros-json/db'
const axios = require('axios')


const precos = f => f.preco









axios.get(url).then(response => {
    const funcionarios = response.data
    const jubi = funcionarios.filter(precos)
    console.log(jubi)
})
