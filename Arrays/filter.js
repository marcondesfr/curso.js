const produto = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Ipad PRO', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de plastico', preco: 18.99, fragil: false }
]

const menor = e => e.fragil == true
const more = e => e.preco > 500

console.log(produto.filter(menor).filter(more))