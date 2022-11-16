class NumeroMemoria {

    constructor() {

        this.productos = [{nombre: '', precio: 0}]

    }

    findProductos = async () => {
        return this.productos;
    }

    saveProductos = async producto => {

        this.productos.push(producto)
        return producto
    }

}


export default NumeroMemoria