'use strict'

const express = require('express')
const router = express.Router()
const TipoServicoModel = require('../models/TipoServicoModel')

function callback(res, err, data, status = 200) {
  if (err) return res.status(500).json(err)
    return res.status(status).json(data)
}

router.post('/Gravar', (req, res) => {

  const TipoServico = req.body

  if ( TipoServico._id ) {
    let query = { _id : TipoServico._id }
    delete TipoServico._id
    TipoServicoModel.update(query, TipoServico, (err, data) => {
      callback(res, err, data, 200)
    })
  } else {
    TipoServicoModel.create(TipoServico, (err, data) => {
      callback(res, err, data, 201)
    })
  }

})

router.get('/Listar', (req, res) => {
  TipoServicoModel.find({}, (err, data) => {
    callback(res, err, data)
  })
})

router.get('/Listar/:_id', (req, res) => {
  let query = { _id : req.params._id }
  TipoServicoModel.findOne(query, (err, data) => {
    callback(res, err, data)
  })
})

router.get('/Deletar/:_id', (req, res) => {
  const query = { _id : req.params._id }
  TipoServicoModel.remove(query, (err, data) => {
    callback(res, err, data)
  })
})

module.exports = router