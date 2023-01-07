const Producto = require('../models/productosModels');

class productoController {

    async findAll(){
        try {
            return await Producto.find().lean();
        } catch (error) {
            throw error
        }
    }
    async create(producto){
        try {
            return await Producto.create(producto);
        } catch (error) {
            throw error
        }
    }

    async delete(id){
        try {
            return await Producto.findByIdAndDelete(id);
        } catch (error) {
            throw error
        }
    }

    async update(id){
        try {
            return await Producto.findByIdAndUpdate(id);
        } catch (error) {
            throw error
        }
    }
}

module.exports = new productoController; 