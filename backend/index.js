const express = require('express');
const morgan = require('morgan');
const multer = require('multer')
const path = require('path');
const app = express();
const { mongoose } = require('./database');

//CONFIGURACIONES
app.set('port', process.env.PORT || 3000);
const storage = multer.diskStorage({
    destination:path.join(__dirname, 'storage/preguntasImg'),
    filename:(req, file, cb) => {
        cb(null,Date.now()+file.originalname);
    }
});
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

app.use(multer({
    storage,
    dest: path.join(__dirname, 'storage/preguntasImg')
}).single('file'));

//ROUTES
app.use('/api/usuarios',require('./routes/usuarios-routes'));
app.use('/api/pregunta', require('./routes/preguntas-routes'));

//STARTING SERVER
app.listen(app.get('port'), ()=>{
    console.log('Server on port ',app.get('port'));
});