require('dotenv').config();
const moongoose = require('mongoose');
const URL = process.env.MONGOATLAS;

const conexion = moongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


moongoose.connection.on('connected', () => {
    console.log(`Conexión a la Database correcta - URL: ${URL}`);
});

moongoose.connection.off('error', () => {
    console.log(`Conexión a la Database NO encontrada - URL: ${URL}`);
});

module.exports = conexion;