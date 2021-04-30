let p = new Promise( function (cumprirPromessa) {
    cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

function primeiroElemento(array) {
    return array[0]
}

function primeiraLetra(string) {
    return string[0]
}

function letraPequena(letra) {
    return letra.toLowerCase()
}

p.then(primeiroElemento)
.then(primeiraLetra)
.then(letraPequena)
.then(console.log)