const express = require ('express')
const app = express ()

app.get('/', (req, res) => { 
res.end ('olamundo')
})
app.listen (3000, () => console.log('controle')) 

