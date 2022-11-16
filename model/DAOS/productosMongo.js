import Database from '../Database.js'

class NumerosMongo {

    findProductos = async () => {
        try {
            if (!Database.connection) { return [] }

            let productos = await Database.db.collection('productos').find({}).toArray()
            return productos.map(n => n.numero)
        }
        catch (error) {
            console.log('error al buscar productos ' + error.message);
        }

    }

    saveProductos = async producto => {
        try {
            if (!Database.connection) return {}

            await Database.db.collection('productos').insertOne({producto})
            return producto
        }
        catch (error) {
            console.log('error al guardar producto ' + error.message);
        }

    }

}


export default NumerosMongo

