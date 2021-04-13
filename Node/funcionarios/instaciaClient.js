const contadorA = require('./instaciasUnicas')
const contadorB = require('./intanciasUnicas')

const contadorC = require('./intanciasNOVA')()
const contadorD = require('./intanciasNOVA')()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)