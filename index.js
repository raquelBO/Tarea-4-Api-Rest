require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors= require('cors');

const servidor= express();

servidor.use(morgan('dev'));
servidor.use(express.json());
servidor.use(cors());

servidor.get("/", (peti, resp)=>{
    resp.send("Hola desde servidor REST");
});

servidor.use ("/libro", require('./rutas/ruta-libro'));
servidor.use ("/autor", require('./rutas/ruta-autor'));
servidor.use ("/sesion", require('./rutas/ruta-sesion'));


servidor.listen(3000, ()=>{
    console.log("Servidor escuchando en el puerto 3000");
});
