const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const usuarioSchema = new Schema({
    nombre:{type: String, required: true, unique:true},
    correo:{type: String, required: true, unique:true},
    clave:{type: String, required: true},
    nivel:{type: Number, required: true, default: 1},
    puntos:{type: Number, required: true, default: 0},
    status:{ type: String, default: 'active' },   // Estado usuario
},{
    timestamps:true
});
usuarioSchema.pre('save', function(next){
    bcrypt.genSalt(10).then(salts=>{
        bcrypt.hash(this.clave,salts).then(hash=>{
            this.clave = hash;
            next();
        }).catch(error=>next(error));
    }).catch(error=>next(error));
});
module.exports = mongoose.model('Usuario', usuarioSchema);