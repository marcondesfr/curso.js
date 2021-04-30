// sem promisse..

const http = require('http')

const getTurma = (letra,callback) => { // parametros da funcao getTurma
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => { // parametros da chamada http.get
        let resultado = '' // variavel vazia

        res.on('data', dados => { // callback da chamada http.get com parametros
            resultado += dados // Vai concatenar os arquivos dentro de resultado
        })

        res.on('end', () => { 
            callback(JSON.parse(resultado)) // conversor de JSON para objeto
        })
    })
}

let nomes = []
getTurma('A', alunos => { // funcao chamada com 2 parametros, primeiro representante de Letra = A e parametro representante de callback
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`)) // nomes recebendo um novo array construido por map com os nomes vindo do JSON
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes) // mostrando no console o resultado de todos os dados dentro de let nomes
        })
    })
})