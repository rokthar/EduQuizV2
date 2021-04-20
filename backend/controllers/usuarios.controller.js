const usuarioModel = require('../models/usuarios.model');
const bcrypt = require('bcrypt');

const usuarioContoller = {};

usuarioContoller.getUsuarios = async (req, resp) => {
    const listaUsuarios = await usuarioModel.find();
    resp.json(listaUsuarios);
}

usuarioContoller.createUsuario =  async (req, resp) => {
    const usuario = new usuarioModel(req.body);
    await usuario.save();
    resp.json({
        'mensaje':'Usuario creado exitosamente',
        'siglas':'OK'
    });
}

usuarioContoller.getUsuario =  async (req, resp) => {
    const usuario = await usuarioModel.findById(req.params.id);
    resp.json(usuario)
}

usuarioContoller.updateUsuario = async  (req, resp) => {
    const { id } = req.params;
    const usuario = {
        nombre:req.body.nombre,
        correo:req.body.correo,
        clave:req.body.clave
    };
    await usuarioModel.findByIdAndUpdate(id, {$set:usuario});
    resp.json({
        'mensaje':'Usuario Actualizado Correctamente',
        'siglas':'OK'
    });
}
usuarioContoller.deleteUsuario = async (req, resp) => {
    const { id } = req.params;
    const usuario = {
        status:'desactivated'
    };
    await usuarioModel.findByIdAndUpdate(id, {$set:usuario});
    resp.json({
        'mensaje':'Usuario Eliminado Correctamente',
        'siglas':'OK'
    });
}

usuarioContoller.activarUsuario = async (req, resp) => {
    const { id } = req.params;
    const usuario = {
        status:'active'
    };
    await usuarioModel.findByIdAndUpdate(id, {$set:usuario});
    resp.json({
        'mensaje':'Usuario Eliminado Correctamente',
        'siglas':'OK'
    });
}

usuarioContoller.loginUsuario = async (req, resp) => {   
    user = req.body;
    const usuario = await usuarioModel.find({"correo":req.body.correo});
    const pass = bcrypt.compareSync(req.body.clave, usuario[0].clave, function(err, result) {
    });
    if(usuario && pass){
        resp.json({
            'mensaje':'Logeo Correctamente',
            'siglas':'OK',
            'usuario':usuario
        });
    }else{
        resp.json({
            'mensaje':'Logeo Incorrecto',
            'siglas':'LI'
        });
    }
}
module.exports = usuarioContoller;