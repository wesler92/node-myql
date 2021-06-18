
module.exports = app => {
    app.get('/atendimentos',(req,res)=> res.send('Você está na rota de atendimentos e esta realizando um get'))

    app.post('/atendimentos',(req,ress) => res.send('Você esta na roda de atendimento e esta relizando um post'))
    
}
