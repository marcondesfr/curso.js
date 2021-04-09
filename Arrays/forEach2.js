// Como eu fiz
// const forEach2 = arrai => {
//     let indices = []
//     for(let i in arrai) {
//         indices.push(arrai[i])
//    }
//    return indices
// }
// Modo certo
Array.prototype.forEach2 = function(callback) {
    for( let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2((nome, indice)=>{
    console.log(`${indice + 1}) ${nome}`)
})

// console.log(typeof(Array.prototype))