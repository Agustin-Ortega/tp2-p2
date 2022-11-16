import config from '../config.js'
import AbstractFactory from '../model/DAOS/abstractFactory.js';


class ApiProductos {

    constructor(){
        this.productosModel =  AbstractFactory.get(config.MODO_PERSISTENCIA); 
    } 


    obtenerEstadistica = async ()  => {
       
       let  precioPromedio = this.calcularPromedio()
       let  precioSumatoria = this.precioTotal()
       let minmax = this.obtenerMinMax()

       return { precioPromedio, precioSumatoria, minmax }
    }


    calcularPromedio = async _ => {

        try {
            let productos = await this.productosModel.findProductos();
            let sum = 0
            let cant = productos.length
            for (let i = 0; i < cant; i++) sum += productos[i].precio
            let promedio = 0;
            if (cant) promedio = sum / cant
            return promedio
        }
        catch (error) {
            console.log('error obtenerPromedio', error)
        }

    }

    precioTotal = async _  => {
        let productos = await this.productosModel.findProductos();

        let total = 0

        productos.forEach(element => {
            total+=element.precio
        });

        return total
    }




    obtenerProductos = async _  => {
        let numeros = await this.productosModel.findProductos();
        return numeros
    }

    guardarProductos = async producto => {
        return await this.productosModel.saveProductos(producto);
    }



    
    getMinMax= async _ =>{
        try {
            let productos = await this.productosModel.findProductos()
            let min = productos[0].precio
            let max = productos[0].precio
            let cant = productos.length
            
            for(let i=0; i<cant; i++) {
                if(productos[i].precio > max) max = productos[i].precio
                if(productos[i].precio < min) min = productos[i].precio
            }
            return { min, max }
        }
        catch(error) {
            console.log('error obtenerMinMax', error)
        }
    }




}

export default ApiProductos