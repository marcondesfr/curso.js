function gerarNumeroEntre(min, max, numerosProibidos) {
    if ( min > max) [max, min] = [min, max];
    return new Promise((resolver, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if(numerosProibidos.includes(aleatorio)) { //Verifica se ja tem dentro
            reject('Numero repetido!')
        } else {
            resolver(aleatorio)
        }
    })
}

async function gerarMegaSena(qtdNumeros) {
    const numeros = []
    for(let _ of Array(qtdNumeros).fill()) {
        await gerarNumeroEntre(1, 60, numeros)
    }
}