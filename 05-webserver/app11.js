const express = require('express')
const app = express()
const port = 8080   
app.use(express.static('public2'))


app.get('/', (req, res)=>{
    res.send('Home page')
})

app.get('/generic', (req, res)=>{
    res.sendFile(__dirname + '/public2/generic.html')
})

app.get('/elements', (req, res)=>{
    res.sendFile(__dirname + '/public2/elements.html')
})

app.get('*', (req, res)=>{
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`Ejemplo escuchando en http://localhost:${port}`);
})