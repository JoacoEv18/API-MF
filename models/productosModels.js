const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const productoSchema = new Schema({
    imagen: {
        type: 'string'
    },
    nombre: {
        type: 'string'
    },
    descripcion: {
        type: 'string'
    },
    precio: {
        type: 'number'
    }
});

const Producto = mongoose.model('producto', productoSchema)

module.exports = Producto;