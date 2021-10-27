//importando paquetes
const express = require('express');
const morgan = require('morgan');

//inicializando nuestra aplicación de express
const app = express();

//configuramos nuestra API para trabajar con objetos tipo JSON en las peticiones HTTP
app.use(express.json())

//importando la configuración de conexion con la base de datos
const { mongoose } = require('./config/database');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
//usando el Middleware morgan para registrar y detallar las solicitudes HTTP que llegan al servidor 
app.use(morgan('dev'));
app.use(express.json());

// Routes
//importamos todas las rutas que definimos en ./routes/index.js
const routes = require('./routes');

/*usando las rutas de productos para toda las peticiones
 que llegen a nuestra API con /productos */
app.use('/productos', routes.productsRouter);
app.use('/ventas', routes.salesRouter);
app.use('/usuarios', routes.usersRouter);

// Starting the server 
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})

//ruta base de nuestra API
app.get('/', (req, res) => {
    res.json({ status: 200 });
})
