const express = require('express');
const mongoose = require('mongoose');

const router = require('../src/routes/routes');
const app = express();

const URL = 'mongodb+srv://cali:1@cluster0-g3x71.mongodb.net/test?retryWrites=true&w=majority';


mongoose.connect(URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true 
});

mongoose.connection.on('connected', () => { console.log('Conectado!'); })


app.use(express.json());
app.use(router);

app.get('/',router);

app.listen('3333');