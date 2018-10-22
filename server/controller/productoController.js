var httpStatus = require('http-status-codes');
let Producto = require('../models/producto');

module.exports = {

    postProducto: async(req, res) => {
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
            return res.status(httpStatus.OK).json({ succes: true, producto: productos });
        } catch (error) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ succes: false, error });
        }
    },

    getProductos: async(req, res) => {
        try {
            const productos = await Producto.find({})
                .sort('nombre')
                .limit(5)
                .populate('usuario', 'nombre email', )
                .populate('categoria', 'descripcion')
            return res.status(httpStatus.OK).json({ succes: true, productos });
        } catch (error) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ succes: false, error });
        }
    },

    putProducto: async(req, res) => {
        try {
            let id = req.params.id;
            let body = req.body;
            const productos = await Producto.findByIdAndUpdate(id, body, { new: true, runValidators: true })
            return res.status(httpStatus.OK).json({ succes: true, productos });
        } catch (error) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ succes: false, error });
        }
    },

    getProductosById: async(req, res) => {
        try {
            let id = req.params.id;
            const productos = await Producto.findById(id);
            return res.status(httpStatus.OK).json({ succes: true, productos });
        } catch (error) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ succes: false, error });
        }

    },

    deleteProducto: async(req, res) => {
        try {
            let id = req.params.id;
            let body = {
                "disponible": false
            }
            const productos = await Producto.findByIdAndUpdate(id, body, { new: true, runValidators: true });
            return res.status(httpStatus.OK).json({ succes: true, productos });
        } catch (error) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ succes: false, error });
        }

    }

}