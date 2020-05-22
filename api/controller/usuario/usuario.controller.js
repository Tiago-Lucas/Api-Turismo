const { isEmptyObject } = require('../../helper/helper')
const UsuarioModel = require('../../model/usuario/usuario.model')

exports.cadastrarUsuario = async (req, res) => {
    if (isEmptyObject(req.body)) {
        res.status(400).send({ data: null, message: 'Requisicão inválida. Verifique as informações e tente novamente.' })
    }

    try {
        var usuario = new UsuarioModel(req.body)
        var usuarioCriado = await usuario.save()
        res.status(201).send({ data: usuarioCriado, message: 'Usuário criado.' })
    } catch (error) {
        res.status(500).send({ data: null, message: error })
    }
}

exports.editarUsuario = async (req, res) => {
    if (isEmptyObject(req.body)) {
        res.status(400).send({ data: null, message: 'Requisicão inválida. Verifique as informações e tente novamente.' })
    }

    try {
        const { email } = req.body
        let usuarioAtualizado = await UsuarioModel.findOneAndUpdate({ email }, req.body)
        res.status(200).send({ data: usuarioAtualizado, message: 'Usuário atualizado.' })
    } catch (error) {
        res.status(500).send({ data: error, message: 'Erro ao editar usuário. Verifique as informações e tente novamente.' })
    }
}