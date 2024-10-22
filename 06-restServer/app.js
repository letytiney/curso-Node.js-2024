/**
 * -----------Ejercicio - Iniciando un RESTServer-----
 * Acá estan las configuraciones iniciales para trabajar el servidor WEB de express
 * esta es la forma clásica de trabajar un servidor. 
 */
/**
 * 1-Inicializar el proyecto con        npm init -y
 * 2-Instlar express y dotenv           npm i express dotenv
 * 3-Crear el archivo .env en la carpeta raiz de este proyecto
 */

const express = require('express');
require('dotenv').config();

const app = express();

app.get('/', function (req,res){
    res.send('Hello World');
});

app.listen( process.env.PORT, () => {
    console.log('Servidor corriendo en puerto', process.env.PORT);
} );

/**
 * Por el momento tenemos habilitada la ruta principal htt://localhost:8080
 * Para ejecutar esta app       node app.js
 * Ingresar al navegador y escribir la ruta principal
 */