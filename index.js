/* const express = require ('express')
const app = express ()

app.get('/', (req, res) => { 
res.end ('olamundo')
})
app.listen (3000, () => console.log('controle')) 

 */



const name = () => {
    const element = document.getElementById('name')
   const value = element.innerText.includes('A') ? element.nodeName : 'não inclui'
   console.log('value', element.innerText)
}