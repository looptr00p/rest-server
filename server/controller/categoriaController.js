var httpStatus = require('http-status-codes');
const Categoria = require('../models/categoria');

module.exports = {
    postCategoria: async(req,res) =>{
        try {
            let categoria = new Categoria({
                descripcion: req.body.descripcion,
                usuario: req.usuario._id
            });

            const categorias = await categoria.save();
            return res.status(httpStatus.OK).json({succes: true, categoria: categorias});
        } catch (error) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ succes: false, error});
        }
    },
    
    getCategorias: async(req,res) => {
        try {
            const categorias = await Categoria.find({})
                                            .sort('descripcion')
                                            .populate('usuario', 'nombre email')
            return res.status(httpStatus.OK).json({ succes: true, categorias});
        } catch (error) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ succes: false, error});
        }
    },

    getCategoriasById: async(req, res) => {
        try {
            let id = req.params.id;

            const categorias = await Categoria.findById(id);
            return res.status(httpStatus.OK).json({succes: true, categorias});
        } catch (error) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ succes: false, error});
        }
    },

    putCategorias: async(req, res) =>{
        try {
            let id = req.params.id;
            let descripcion = req.body.descripcion;

            const categorias = await Categoria.findByIdAndUpdate(id, descripcion,{ new: true, runValidators: true });
            return res.status(httpStatus.OK).json({succes: true, categorias});
        } catch (error) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ succes: false, error});
        }
    },

    deleteCategorias: async(req, res) =>{
        try {
            let id = req.params.id;

            const categorias = await Categoria.findOneAndDelete(id);
            return res.status(httpStatus.OK).json({succes: true, categorias});
        } catch (error) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ succes: false, error});
        }
    }
}
