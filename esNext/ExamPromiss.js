const fs = require('fs')
const path = require('path')
const caminho = path.join(__dirname, 'dados.txt')
function lerAqruivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function(err, conteudo) {
            resolve(conteudo.toString())
        })
    })
}

lerAqruivo(caminho).then(conteudo => console.log(conteudo))