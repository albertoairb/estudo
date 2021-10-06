//pq instalo nodemon? protocolos http?
// npm ??? 

const express = require ('express')
const app = express()
const Classes = require('./classes')
app.get ('/classes',(req,res) => { //pega dados dessa rota , recebe uma coisa da rota - fiz algo no back end e quero retornar uma coisa , no front usa metodo get, para 
    //receber algo do back (da rota)  / res é response, enviar resposta ao front (resposta do servidor) / req request , recebe algo, mas servidor tb?
    const name = req.body
    const array = new Classes().verify(name)
    res.jason(array) // ????? jason??
    // quais as ligações entre essa página , packege jason, classes???


})

app.post ('/',(req,res) => { // gravar dados , vim do front, dei um post no front bateu na rota do back tb com post e grava no banco

    
})

app.path ('/',(req, res) => { // pra atualizar dado, etc

    
})

app.delete ('/', (req, res) => { // apagra algo do banco


})


app.listen (3000, () => console.log('working'))