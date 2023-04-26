const schedule = require('node-schedule')

    const tarefa1 = schedule.scheduleJob('*/5 * 22 * * 1', function (){ //Há cada 5 seg, às 21 hrs (qualquer minuto), na segunda feira (1) terça seria 2
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function (){
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000) //função para parar de rodas nos 20 segundos

// setImmediate
// setInterval

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)] //executando de segunda(1) à sexta(5)
regra.hour = 22
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})