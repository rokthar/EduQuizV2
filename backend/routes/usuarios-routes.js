const express = require('express');
const usuarioContoller = require('../controllers/usuarios.controller');
const router = express.Router();

// RUTAS DE LOS USUARIOS
router.get('/listar', usuarioContoller.getUsuarios);
router.post('/registrar', usuarioContoller.createUsuario);
router.get('/obtener/:id', usuarioContoller.getUsuario);
router.post('/actualizar/:id', usuarioContoller.updateUsuario);
router.post('/eliminar/:id', usuarioContoller.deleteUsuario);
router.post('/activar/:id', usuarioContoller.activarUsuario);
router.post('/login', usuarioContoller.loginUsuario);

module.exports = router;