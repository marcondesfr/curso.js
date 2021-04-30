// operador ... rest(juntar)/spread(espalhar)
// usar rest com parametro de funcao

// usar spread com objeto
const funcionario = {
    nome: 'Maria', salario: 12345678
}

const clone = { ativo: true, ...funcionario }
console.log(clone)

// usar spread com array
const grupoA = ['Joao', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafael']
console.log(grupoFinal)