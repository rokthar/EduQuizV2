const preguntaModel = require('../models/preguntas.model');
const upload = require('../libs/storage');
const preguntaContoller = {};

preguntaContoller.crearPregunta = async (req, resp) => {
    const pregunta = new preguntaModel(req.body);
    await pregunta.save();
    resp.json({
        'mensaje':'Pregunta creada correctamente',
        'siglas':'OK'
    });
}

preguntaContoller.updatePregunta = async (req, resp) => {
    const { id } = req.params;
    await usuarioModel.findByIdAndUpdate(id, {$set:req.body});
    resp.json({'mensaje':'Usuario Actualizado Correctamente','siglas':'OK'});
}

preguntaContoller.activarPregunta = async (req, resp) => {
    const { id } = req.params;
    const status = {status:'active'};
    await preguntaModel.findByIdAndUpdate(id, {$set:status});
    resp.json({'mensaje':'Pregunata Activada correctamente','siglas':'OK'});
}

preguntaContoller.desactivarPregunta = async (req, resp) => {
    const { id } = req.params;
    const status = {status:'desactive'};
    await preguntaModel.findByIdAndUpdate(id, {$set:status});
    resp.json({'mensaje':'Pregunata Desactivada correctamente','siglas':'OK'});
}

// LISTAR
preguntaContoller.getPreguntas = async (req, resp) => {
    const listaPreguntas = await preguntaModel.find();
    resp.json(listaPreguntas);
}

module.exports = preguntaContoller;