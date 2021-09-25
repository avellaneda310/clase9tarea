const express = require("express");
const app = express();

require("dotenv").config({path: `./config/.env`});
const port= process.env.PORT_SERVER || 4500;

const productosRouter = require('./routes/productos');
const usuariosRouter = require('./routes/usuarios');
const getUsuario = require('./routes/login')

app.use(express.json({ extend: true }));

app.use('/productos', productosRouter);
app.use('/usuarios', usuariosRouter);
app.use('/login', getUsuario);


app.listen(port, () => {
    console.log(`servidor en port ${port}`)
});
