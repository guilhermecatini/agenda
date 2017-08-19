'use strict'

const express = require('express')
const router = express.Router()
const EnderecoModel = require('../models/EnderecoModel')

function callback(res, err, data, status = 200) {
  if (err) return res.status(500).json(err)
    return res.status(status).json(data)
}

router.post('/Gravar', (req, res) => {

  const Endereco = req.body

  if ( Endereco._id ) {
    let query = { _id : Endereco._id }
    delete Endereco._id
    EnderecoModel.update(query, Endereco, (err, data) => {
      callback(res, err, data, 200)
    })
  } else {
    EnderecoModel.create(Endereco, (err, data) => {
      callback(res, err, data, 201)
    })
  }

})

router.get('/Pessoa/Listar', (req, res) => {
  EnderecoModel.find({}, (err, data) => {
    callback(res, err, data)
  })
})

router.get('/Pessoa/Listar/:_idPessoa', (req, res) => {
  const query = { _idPessoa: req.params._idPessoa }
  EnderecoModel.find(query, (err, data) => {
    callback(res, err, data)
  })
})








router.get('/Deletar/:_id', (req, res) => {
  const query = { _id : req.params._id }
  EnderecoModel.remove(query, (err, data) => {
    callback(res, err, data)
  })
})

module.exports = router