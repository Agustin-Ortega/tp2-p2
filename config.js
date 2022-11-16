import dotenv from 'dotenv'

dotenv.config()


const PORT = process.env.PORT ||  8080   
const STRING_CONEXION = process.env.STRING_CONEXION  
const MODO_PERSISTENCIA = process.env.MODO_PERSISTENCIA
const BASE = process.env.BASE


export default {
    PORT,
    STRING_CONEXION,
    MODO_PERSISTENCIA,
    BASE
}

