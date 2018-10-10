const express = require('express');
let {verificaToken, verificaAdmin_Role} = require('../middlewares/autenticacion');

let app = express();

let Categoria = require('../models/categoria');

var categoriaController = require('../controller/categoriaController');


/** Mostrar todas las categorias */
app.get('/categoria', verificaToken , categoriaController.getCategorias);

/**Mostrar una categorías por ID */
app.get('/categoria/:id', verificaToken ,categoriaController.getCategoriasById);

/**Crear nueva categoria */
app.post('/categoria', verificaToken, categoriaController.postCategoria);

/**Actualizar la descripción de la categorías */
app.put('/categoria/:id', verificaToken, categoriaController.putCategorias);

/**Eliminar categoría por ID */
app.delete('/categoria/:id', [verificaToken, verificaAdmin_Role], categoriaController.deleteCategorias)

    //solo un administrador puede borrar categoría
    //Categoría.findByIdAndRemove

module.exports = app;