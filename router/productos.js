import express from "express"
import ControladorProductos from '../controller/productosController.js'

export class RouterProductos {

    constructor() {
        this.router = express.Router()
        this.controladorProductos = new ControladorProductos()
    }
    start() {
    
        this.router.get('/total', this.controladorProductos.getTotal)
        
        this.router.get('/minMax', this.controladorProductos.obtenerMinMax)

        this.router.get('/estadistica', this.controladorProductos.getEstadistica)

        this.router.get('/productos', this.controladorProductos.getProductos)

        this.router.get('/:id?', this.controladorProductos.getProductos)
    
        this.router.post('/:id?', this.controladorProductos.postProductos)


        return this.router;
}

}
