const mongoose = require('mongoose');
const { Schema } = mongoose;

const usuarioSchema = new Schema({
    nombre:{type: String, required: true},
    correo:{type: String, required: true},
    clave:{type: String, required: true},
    nivel:{type: Number, required: true, default: 1},
    puntos:{type: Number, required: true, default: 0},
    status:      { type: String, default: 'active' },   // Estado usuario
    created_at:  { type: Date, default: Date.now },     // fecha creacion
    updated_at:  { type: Date, default: Date.now }      // fecha actualizacion
});
module.exports = mongoose.model('Usuario', usuarioSchema);