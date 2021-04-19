const usuarioModel = require('../models/usuarios.model');

const usuarioContoller = {};

usuarioContoller.getUsuarios = async (req, resp) => {
    resp.header ("Access-Control-Allow-Origin", "*");
    const listaUsuarios = await usuarioModel.find();
    resp.json(listaUsuarios);
}

usuarioContoller.createUsuario =  async (req, resp) => {
    resp.header ("Access-Control-Allow-Origin", "*");
    const usuario = new usuarioModel(req.body);
    await usuario.save();
    resp.json({
        'mensaje':'Usuario creado exitosamente',
        'siglas':'OK'
    });
}

usuarioContoller.getUsuario =  async (req, resp) => {
    resp.header ("Access-Control-Allow-Origin", "*");
    const usuario = await usuarioModel.findById(req.params.id);
    resp.json(usuario)
}

usuarioContoller.updateUsuario = async  (req, resp) => {
    resp.header ("Access-Control-Allow-Origin", "*");
    const { id } = req.params;
    const usuario = {
        nombre:req.body.nombre,
        correo:req.body.correo,
        clave:req.body.clave,
        updated_at: Date.now()
    };
    await usuarioModel.findByIdAndUpdate(id, {$set:usuario});
    resp.json({
        'mensaje':'Usuario Actualizado Correctamente',
        'siglas':'OK'
    });
}
usuarioContoller.deleteUsuario = async (req, resp) => {
    resp.header ("Access-Control-Allow-Origin", "*");
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
    resp.header ("Access-Control-Allow-Origin", "*");
    const { id } = req.params;
    const usuario = {
        status:'activated'
    };
    await usuarioModel.findByIdAndUpdate(id, {$set:usuario});
    resp.json({
        'mensaje':'Usuario Eliminado Correctamente',
        'siglas':'OK'
    });
}

usuarioContoller.loginUsuario = async (req, resp) => {   
    const usuario = await usuarioModel.find({"correo":resp.correo});
    if (usuario.correo == resp.correo && usuario.clave == resp.clave) {
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