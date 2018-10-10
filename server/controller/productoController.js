var httpStatus = require('http-status-codes');
let Producto = require('../models/producto');

module.exports = {

    postProducto: async (req, res) =>{
        try {
            let body = req.body;

            let producto = new Producto({
                nombre: body.nombre,
                precioUni: body.precioUni,
                descripcion: body.descripcion,
                disponible: body.disponible,
                categoria: body.categoria,
                usuario: req.usuario._id
            });
            
            const productos = await producto.save();
            return res.status(httpStatus.OK).json({succes: true, producto: productos});
        } catch (error) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ succes: false, error});
        }
    },

    getProductos: async(req, res) => {
        try {
            const productos = await Producto.find({})
                                        .sort('nombre')
                                        .populate('usuario', 'nombre email', 'categoria', 'descripcion')
            
        } catch (error) {
            
        }
    }
    
}
