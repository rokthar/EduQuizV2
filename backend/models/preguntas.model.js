const mongoose = require('mongoose');
const { Schema } = mongoose;

const preguntasSchema = new Schema({
    pregunta:    { type: String, required: true }, // pregunta
    categoria:    { type: String, required: true }, // categoeria
    imagenes:     [{ type: String, required: false }], // puede tener 0 o varias imagenes
    opciones:    [{ opcion: String, status: Boolean }], // varias opciones de respuesta
    status:      { type: String, default: 'active' }, // estado de la pregunta
    usuario:        { type: String, required: true }, // usuario que crea la pregunta.
},
{
    timestamps:true
});

module.exports = mongoose.model('Pregunta', preguntasSchema);