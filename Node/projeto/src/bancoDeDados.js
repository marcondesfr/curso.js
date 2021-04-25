const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const produtos = {}

function salvarProduto(produto) {
    if (!produto.id) produto.id = sequence.id // Se o produto nao estiver setado, produto.id vai receber sequence.id
    produtos[produto.id] = produto // Dentro de produtos, sera setado id de protudo, e se ja estiver setado, sera renovado
    return produto // Retorna o produto com id
}

function getProduto(id) { // Pegar Produto por id
    return produtos[id] || {} // Caso nao tenha um id de protudo voltar um obj vazio
}

function getProdutos() { // Pegar todos os Produtos
    return Object.values(produtos) // Retorna apenas os valores dos produtos
} 

function excluirProdutos (id) {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

module.exports = { salvarProduto, getProduto, getProdutos, excluirProdutos}