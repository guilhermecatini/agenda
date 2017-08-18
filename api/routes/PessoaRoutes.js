'use strict'

const express = require('express')
const router = express.Router()
const PessoaModel = require('../models/PessoaModel')

function callback(res, err, data, status = 200) {
  if (err) return res.status(500).json(err)
    return res.status(status).json(data)
}

router.post('/Gravar', (req, res) => {

  const Pessoa = req.body

  if ( Pessoa._id ) {
    let query = { _id : Pessoa._id }
    delete Pessoa._id
    PessoaModel.update(query, Pessoa, (err, data) => {
      callback(res, err, data, 200)
    })
  } else {
    PessoaModel.create(Pessoa, (err, data) => {
      callback(res, err, data, 201)
    })
  }

})

router.get('/Listar', (req, res) => {
  PessoaModel.find({}, (err, data) => {
    callback(res, err, data)
  }).populate('_idEmpresa')
})

router.get('/Listar/:_id', (req, res) => {
  let query = { _id : req.params._id }
  PessoaModel.findOne(query, (err, data) => {
    callback(res, err, data)
  })
})

router.get('/Deletar/:_id', (req, res) => {
  const query = { _id : req.params._id }
  PessoaModel.remove(query, (err, data) => {
    callback(res, err, data)
  })
})

module.exports = router