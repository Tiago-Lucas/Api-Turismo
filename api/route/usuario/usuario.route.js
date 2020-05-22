const express = require('express');
const router = express.Router();
const usuarioController = require('../../controller/usuario/usuario.controller')

router.post('/cadastrar', usuarioController.cadastrarUsuario)
router.put('/editar', usuarioController.editarUsuario)

module.exports = router;