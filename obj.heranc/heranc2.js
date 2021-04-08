const pai = { nome: 'Pedro', corCabelo: 'preto'}

const filho1 = Object.create(pai)
filho1.nome = 'Ana'

const filho2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, // <- Nao aceitar ser mudado
     enumerable: true } // <- Aceita ser listado
})

// console.log(`${filho2.nome} tem cabelo ${filho2.corCabelo}`)

for ( let key in filho2 ) {
    filho2.hasOwnProperty(key) ? // Nome proprio.
        console.log(key) : console.log(`Por heranca: ${key}`)
}