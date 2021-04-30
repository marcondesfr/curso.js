// usando promisse...

const http = require('http')

const getTurma = letra => { // parametros da funcao getTurma
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => { // parametros da chamada http.get
            let resultado = '' // variavel vazia
    
            res.on('data', dados => { // callback da chamada http.get com parametros
                resultado += dados // Vai concatenar os arquivos dentro de resultado
            })
    
            res.on('end', () => { 
                try {
                    resolve(JSON.parse(resultado))
                }
                catch (e) {
                    reject(e)
                }
            })
        })
    })
}

let nomes = []
getTurma('A').then(alunos => { // funcao chamada com 2 parametros, primeiro representante de Letra = A e parametro representante de callback
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`)) // nomes recebendo um novo array construido por map com os nomes vindo do JSON
    getTurma('B').then(alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma('C').then(alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes) // mostrando no console o resultado de todos os dados dentro de let nomes
        })
    })
})

Promise.all([getTurma('A'),getTurma('B'),getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))