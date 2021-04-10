Array.prototype.map2 = function(callback) {
    let newArray = []
    for (let i = 0; i < this.length ; i++ ) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}



const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array apenas com os precos

const parseJSON = json => JSON.parse(json) // Converte JSON em OBJ
const apenasPreco = produto => produto.preco // Pega apenas o valor de um dos atributos do OBJ

const resultado = carrinho.map2(parseJSON).map2(apenasPreco)
console.log(resultado)