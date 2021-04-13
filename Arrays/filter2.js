Array.prototype.filter2 = function(callback) {
    let res = []
    for ( let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            res.push(this[i])
        }
    }
    return res 
}

const produto = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Ipad PRO', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de plastico', preco: 18.99, fragil: false }
]

const menor = e => e.fragil == true
const more = e => e.preco > 500

console.log(produto.filter2(menor).filter2(more))