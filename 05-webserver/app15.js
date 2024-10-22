const express = require('express')
const hbs = require('hbs')
require('dotenv').config();

const app = express()
const port = process.env.PORT

app.set ('view engine', 'hbs') // rederizar la mejor forma la pagina

hbs.registerPartials(__dirname + '/views/partials')

app.use(express.static('public3'))

app.get('/', (req, res)=>{
    res.render('home3', {
        nombre: 'Sandra Leticia Tiney Sisay',
        titulo: 'Curso Node 2024'
    })
})

app.get('/generic', (req, res)=>{
    res.render('generic', {
        nombre: 'Sandra Leticia Tiney Sisay',
        titulo: 'Curso Node 2024'
    })
})

app.get('/elements', (req, res)=>{
    res.render('elements', {
        nombre: 'Sandra Leticia Tiney Sisay',
        titulo: 'Curso Node 2024'
    })
})

app.get('*', (req, res)=>{
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`Ejemplo escuchando en http://localhost:${port}`);
})
