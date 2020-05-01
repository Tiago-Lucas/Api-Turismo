const express =require ('express');
const router = express.Router();
const Produto = require('../models/produtos')
const mongoose = require('mongoose')

//Criar um cadastro//
router.post('/', (req, res, next) =>{
    const produto = new Produto({
        _id: new mongoose.Types.ObjectId(),
        Nome : String,
        email: String,
        nascimento: String,
        senha: Number,
        sexo: String
    })
    produto.save()
    .then(result =>{
        console.log(result)
        res.status(201).json({
            mensagem: 'Produto Criado',
            produtoCriado: produto
        })
        
    })
    .catch(err => {
        res.status(500).json({
            error: err
        })
    
});
});
//Buscando produto pelo id//
router.get('/:produtoId', (req, res, next) =>{
    const id = req.params.produtoId;
    Produto.findById(id)
    .exec()
    .then(doc => {
        res.status(200).json(doc);
    })
    .catch(err =>{
        res.status(500).json({error:err})
    })
    
    });

//Buscando todos os produtos//
router.get('/',(req, res, next)=>{
    Produto.find()
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
router.delete('/:produtoId', (req, res, next) =>{
    const id = req.params.produtoId;
    Produto.deleteOne({_id : id})
    .exec()
    .then(result => {
        console.log(result)
        res.status(200).json({
            mensagem:'Produto deletado'
        });
    })
    .catch(err =>{
        res.status(500).json({error:err})
    })
    
    });

//atualizando os produtos//
router.put('/:produtoId', (req, res, next) => {
    const id = req.params.produtoId;
    Produto.updateOne({ _id: id }, req.body)
        .exec()
        .then(doc => {
            res.status(200).json({
                message: 'Produto atualizado',
                produtoCriado:req.body
            });
        })
        .catch(err => {
            res.status(500).json({ error: err });
        })
});


module.exports = router;