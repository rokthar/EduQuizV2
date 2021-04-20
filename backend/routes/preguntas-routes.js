const express = require('express');
const preguntaContoller = require('../controllers/preguntas.controller');
const router = express.Router();

// RUTAS DE LOS USUARIOS
router.post('/subirImagen', (req, resp)=>{
    resp.send(req.file.filename);
});

router.post('/crear', preguntaContoller.crearPregunta);
router.post('/actualizar/:id', preguntaContoller.updatePregunta);
router.post('/activar/:id', preguntaContoller.activarPregunta);
router.post('/desactivar/:id', preguntaContoller.desactivarPregunta);
router.get('/listar', preguntaContoller.getPreguntas);
router.get('/aleatoria', preguntaContoller.obtenerPreguntaAleatoria);


module.exports = router;