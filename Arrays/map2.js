const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array apenas com os precos

const parseJSON = json => JSON.parse(json) // Converte JSON em OBJ
const apenasPreco = produto => produto.preco // Pega apenas o valor de um dos atributos do OBJ

const resultado = carrinho.map(parseJSON).map(apenasPreco)
console.log(resultado)