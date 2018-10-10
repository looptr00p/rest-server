const express = require('express');

const {verificaToken} = require('../middlewares/autenticacion');

let app = express();
let productoController = require('../controller/productoController');

/**Obtener Productos */
app.get('/producto/', productoController.getProductos);

/**Obtener un Producto por Id*/
app.get('/producto/:id');

/**Cargar un Producto */
app.post('/producto/', verificaToken, productoController.postProducto);

/**Actualizar un Producto */
app.put('/producto/');

/**Eliminar un Producto */
app.delete('/producto/');

module.exports = app;