const express = require('express');
const usuarioContoller = require('../controllers/usuarios.controller');
const router = express.Router();
const usuarioController = require('../controllers/usuarios.controller');

router.get('/listar', usuarioContoller.getUsuarios);
router.post('/registrar', usuarioContoller.createUsuario);
router.get('/obtener/:id', usuarioContoller.getUsuario);
router.post('/actualizar/:id', usuarioContoller.updateUsuario);
router.post('/eliminar/:id', usuarioContoller.deleteUsuario);
module.exports = router;