const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 19 * * 0', function () { // scheduleJob(segundo, minuto, hora, mes, dia)
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)] // Periodo que vai operar
regra.hour = 12 // Hora que vai ser executado
regra.second = 30 // Segundo que vai ser executado

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executando tarefa 2!', new Date().getSeconds())
})