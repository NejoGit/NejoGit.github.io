

const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
//Cargar variables de entorno
require('dotenv').config({ path: './.env' });

const FORM_ENDPOINT = process.env.FORM_ENDPOINT;
const port = 3000;
app.use(express.static('public'));

app.get('/', (req, res) => {
    // const FORM_ENDPOINT = process.env.FORM_ENDPOINT;
    // res.sendFile(__dirname + '/public/index.html');
    res.render('index.ejs', { title: 'Mi aplicación', varenv: `${FORM_ENDPOINT}` });
});

app.listen(port, err =>{
    console.log(`App listeninga at http://localhost:${port}`);
    err ? 
    console.log("Error in server setup") :
    console.log("Server listening on Port", port)
});
