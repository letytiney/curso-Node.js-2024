const express = require('express')
const app = express()
const port = 8080   


app.set ('view engine', 'hbs') // rederizar la mejor forma la pagina

app.use(express.static('public3'))

app.get('/', (req, res)=>{
    res.render('home2', {
        nombre: 'Sandra Leticia Tiney Sisay',
        titulo: 'Curso Node 2024'
    })
})

app.get('/generic', (req, res)=>{
    res.sendFile(__dirname + '/public3/generic.html')
})

app.get('/elements', (req, res)=>{
    res.sendFile(__dirname + '/public3/elements.html')
})
app.get('*', (req, res)=>{
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`Ejemplo escuchando en http://localhost:${port}`);
})