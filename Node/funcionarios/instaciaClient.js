const contadorA = require('./instaciasUnicas')
const contadorB = require('./intanciasUnicas')

const contadorC = require('./intanciasNOVA')()
const contadorD = require('./intanciasNOVA')() // primeiro invoca a function e so depois com os () invoca o obj dentro da function

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)