function esperarPor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(function() {
            resolve()
        }, tempo)
    })
}

// esperarPor(2000)
// .then(() => console.log('Executando promise 1...'))
// .then(esperarPor)
// .then(() => console.log('Executando promise 2...'))
// .then(esperarPor)
// .then(() => console.log('Executando promise 3...'))

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolver(10), 5000)
    })
}

async function executar() {
    let valor = await retornarValor()
    await esperarPor(15000)
    console.log(`Async/Await ${valor} ...`)

    await esperarPor(15000)
    console.log(`Async/Await ${valor + 1} ...`)

    await esperarPor(15000)
    console.log(`Async/Await ${valor + 2} ...`)

    return valor + 3
    
}

executar()