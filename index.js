const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 9000;
require('./database/conexion');
const path = require('path');
const cors = require('cors');

const app = express();
const productosController = require('./controllers/productosControllers');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.get('/', async (req, res) => {
    res.json({
        productos: await productosController.findAll()
    });
})

app.post('/agregar', async (req, res) => {
    await productosController.create(req.body)
    res.send('Producto Agregado')
});

app.listen(PORT, () => {
    console.log(`MERN trabajando en el Puerto ${PORT}`);
}); 