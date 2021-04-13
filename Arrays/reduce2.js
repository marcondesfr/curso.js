const alunos = [
    { nome: "Joao", nota: 7.3, bolsista: false },
    { nome: "Maria", nota: 9.2, bolsista: true },
    { nome: "Pedro", nota: 9.8, bolsista: false},
    { nome: "Ana", nota: 8.7, bolsista: true }
]

// Desafio 1: Todos os alunos sao bolsistas?
const todos = (resultado, bolsista) => resultado && bolsista;
console.log(alunos.map(a => a.bolsista).reduce(todos))



// Desafio 2: Algum aluno e bolsista?

const all = (resultado, bolsista) => resultado || bolsista;
console.log(alunos.map( a => a.bolsista).reduce(all))