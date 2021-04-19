const express = require('express');
const morgan = require('morgan');
const app = express();
const { mongoose } = require('./database');
//CONFIGURACIONES
app.set('port', process.env.PORT || 3000);

//MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//ROUTES
app.use('/api/usuarios',require('./routes/usuarios-routes'));

//STARTING SERVER
app.listen(app.get('port'), ()=>{
    console.log('Server on port ',app.get('port'));
});