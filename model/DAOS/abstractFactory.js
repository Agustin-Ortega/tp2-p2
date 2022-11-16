import ProductosMemoria from "./productosMemoria.js";
import ProductosMongo from './productosMongo.js'

class AbstractFactory {

    static get(tipo) {
        switch (tipo) {
            case 'MONGO':
                console.log('---persistiendo en mongodb---');
                return new ProductosMongo();
            case 'MEM':
                console.log('---persistiendo en memoria---');
                return new ProductosMemoria();
            default:
                console.log('---persistiendo en memoria por default---');
                return new ProductosMemoria();
        }
    }

}

export default AbstractFactory