import ApiProductos from '../api/productos.js'

 class ControladorNumeros {

    constructor() {
        this.api = new ApiProductos()

    }


    getTotal = async (req, res) => {
         try {
             let total = await this.api.precioTotal()

             res.json(total)
         }
         catch (error) {
             console.log(error)
         }
     }

    
    obtenerMinMax = async (req,res) => {
        try {
            let { min, max } = await this.api.getMinMax()

            res.json({ min, max })
        }
        catch(error) {
            console.log( error)
        }
    }

    getEstadistica = async (req, res) => {
        res.json(await this.api.obtenerEstadistica())
    }


    getProductos = async (req, res) => {
        let numeros = await this.api.obtenerProductos()
        res.json({numeros})
    }

   
    postProductos = async (req, res) => {
        // let { numero } = req.body
        //  numero = parseFloat(numero)
        const data  = req.body;
        await this.api.guardarProductos(data)

        res.redirect('/')
    }


}

export default ControladorNumeros