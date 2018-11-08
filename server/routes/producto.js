const express = require('express');

const { verificaToken } = require('../middlewares/autenticacion');

let app = express();
let productoController = require('../controller/productoController');

/**Obtener Productos */
app.get('/producto/', productoController.getProductos);

/**Obtener un Producto por Id*/
app.get('/producto/:id', verificaToken, productoController.getProductosById);

/**Cargar un Producto */
app.post('/producto/', verificaToken, productoController.postProducto);

/**Actualizar un Producto */
app.put('/producto/:id', verificaToken, productoController.putProducto);

/**Eliminar un Producto */
app.delete('/producto/:id', verificaToken, productoController.deleteProducto);

/**Buscar Productos */
app.get('/producto/buscar/:termino', verificaToken, productoController.buscarProducto, (req, res) => {

})

module.exports = app;