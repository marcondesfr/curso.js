// console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])

aprovados[3] = 'Paula'
aprovados.push('Abia')
console.log(aprovados.length)
aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados)
aprovados.sort()// Poe o array em ordem Alfabetica
console.log(aprovados)

delete aprovados [1]
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice( 'Elemento1', 'Elemento2') // Apaga e pode atribuir valores
console.log(aprovados)
