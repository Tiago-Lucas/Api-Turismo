const express =require ('express');
const router = express.Router();
const Cadastro = require('../models/cadastro')
const mongoose = require('mongoose')

//Criar um cadastro //
router.post('/usuario', (req, res, next) =>{
    const cadastro = new Cadastro(req.body)
    cadastro.save()
    .then(result =>{
        res.status(201).json({
            mensagem: 'cadastro Criado',
        })
    .catch(err => {
        res.status(500).json({
            error: err
        })
});
});
});
//Buscando produto pelo id//
router.get('/:cadastroId', (req, res, next) =>{
    const id = req.params.cadastroId;
    Cadastro.findById(id)
    .exec()
    .then(doc => {
        res.status(200).json(doc);
    })
    .catch(err =>{
        res.status(500).json({error:err})
    })
    
    });

//Buscando todos os produtos//
router.get('/usuario',(req, res, next)=>{
    Cadastro.find()
    .exec()
    .then(doc=>{
        console.log(doc)
        res.status(200).json(doc);
    })
     .catch(err =>{
        res.status(500).json({error:err})
    })

})

//Deletando um produto//
router.delete('/:cadastroId', (req, res, next) =>{
    const id = req.params.cadastroId;
    Cadastro.deleteOne({_id : id})
    .exec()
    .then(result => {
        console.log(result)
        res.status(200).json({
            mensagem:'cadastro deletado'
        });
    })
    .catch(err =>{
        res.status(500).json({error:err})
    })
    });
//atualizando os produtos//
router.put('/:cadastroId', (req, res, next) => {
    const id = req.params.cadastroId;
    Cadastro.updateOne({ _id: id }, req.body)
        .exec()
        .then(doc => {
            res.status(200).json({
                message: 'Cadastro atualizado',
                CadastroCriado:req.body
            });
        })
        .catch(err => {
            res.status(500).json({ error: err });
        })
});
module.exports = router;