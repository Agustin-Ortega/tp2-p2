import { MongoClient } from 'mongodb'
import config from '../config.js'

class Database {

    static connection = false;
    static db
    static client

    static conectar = async () => {
        try {

            console.log('Conectandose...');

            Database.client = new MongoClient(config.STRING_CONEXION, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })

            await Database.client.connect()
            Database.db = Database.client.db(config.BASE)
            Database.connection = true;
            console.log('conexion confirmada!');

        } catch (error) {
            console.log('Error en la conexion de base de datos ' + error);
        }
    }

    static desconectar = async () => {
        if (!Database.connection) return
        await Database.client.close()
    }

}

export default Database