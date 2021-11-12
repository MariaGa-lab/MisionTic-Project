//importando paquetes
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

//inicializando nuestra aplicación de express
const app = express();

//usando cors para peticiones de origen cruzado para recursos compartidos
app.use(cors());

//configuramos nuestra API para trabajar con objetos tipo JSON en las peticiones HTTP
app.use(express.json())

//importando la configuración de conexion con la base de datos
const config = require('./config/database');
//creando la conexion con la base de datos mongoDB
mongoose.connect(config.MONGODB_URI)
  .then(db => console.log('MongoDB Database is connected'))
  .catch(error => console.error(error));

// Middlewares
//usando el Middleware morgan para registrar y detallar las solicitudes HTTP que llegan al servidor 
app.use(morgan('dev'));

// Routes
//importamos todas las rutas que definimos en ./routes/index.js
const routes = require('./routes');

/*usando las rutas de productos para toda las peticiones
 que llegen a nuestra API con /productos */
app.use('/productos', routes.productsRouter);
app.use('/ventas', routes.salesRouter);
app.use('/usuarios', routes.usersRouter);
app.use('/auth', routes.authRouter);

// Starting the server 
//utilizando variables de entorno definidas en el archivo .env
require('dotenv').config();
/*para utilizar las variables de entorno en nuestro codigo 
utilizamos la estructuta process.env.nombre_variable*/
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`server listen http://localhost:${port}`)
})

//ruta base de nuestra API
app.get('/', (req, res) => {
    res.json({ status: 200 });
})
