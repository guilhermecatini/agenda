'use strict'

const express = require('express')
const router = express.Router()
const EmpresaModel = require('../models/EmpresaModel')

function callback(res, err, data, status = 200) {
  if (err) return res.status(500).json(err)
    return res.status(status).json(data)
}

router.post('/Gravar', (req, res) => {

  const Empresa = req.body

  if ( Empresa._id ) {
    let query = { _id : Empresa._id }
    delete Empresa._id
    EmpresaModel.update(query, Empresa, (err, data) => {
      callback(res, err, data, 200)
    })
  } else {
    EmpresaModel.create(Empresa, (err, data) => {
      callback(res, err, data, 201)
    })
  }

})

router.get('/Listar', (req, res) => {
  EmpresaModel.find({}, (err, data) => {
    callback(res, err, data)
  })
})

router.get('/Listar/:_id', (req, res) => {
  let query = { _id : req.params._id }
  EmpresaModel.findOne(query, (err, data) => {
    callback(res, err, data)
  })
})

router.get('/Deletar/:_id', (req, res) => {
  const query = { _id : req.params._id }
  EmpresaModel.remove(query, (err, data) => {
    callback(res, err, data)
  })
})

module.exports = router