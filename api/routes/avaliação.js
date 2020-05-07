const express =require ('express');
const router = express.Router();
const Avaliacao = require('../models/avaliação')
const mongoose = require('mongoose')

//Criar um avaliacao //
router.post('/avaliacao', (req, res, next) =>{
    const avaliacao = new Avaliacao(req.body)
    avaliacao.save()
    .then(result =>{
        res.status(201).json({
            mensagem: 'avaliacao Criada',
        })
    .catch(err => {
        res.status(500).json({
            error: err
        })
});
});
});