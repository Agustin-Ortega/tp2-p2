import express from 'express'
import { RouterProductos } from './router/productos.js'
import Database from './model/Database.js' 
import config from './config.js'

await Database.conectar();   

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(express.static('public'))
app.use('/productos',  new RouterProductos().start()) 

const PORT = config.PORT
const server = app.listen(PORT, () => console.log('Servidor express escuchando en el puerto 8080'))
server.on('error', error => console.log('Error en servidor ' + error.message));