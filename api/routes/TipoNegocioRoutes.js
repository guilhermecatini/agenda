'use strict'

const express = require('express')
const router = express.Router()
const TipoNegocioModel = require('../models/TipoNegocioModel')

function callback(res, err, data, status = 200) {
  if (err) return res.status(500).json(err)
    return res.status(status).json(data)
}

router.post('/Gravar', (req, res) => {

  const TipoNegocio = req.body

  if ( TipoNegocio._id ) {
    let query = { _id : TipoNegocio._id }
    delete TipoNegocio._id
    TipoNegocioModel.update(query, TipoNegocio, (err, data) => {
      callback(res, err, data, 200)
    })
  } else {
    TipoNegocioModel.create(TipoNegocio, (err, data) => {
      callback(res, err, data, 201)
    })
  }

})

router.get('/Listar', (req, res) => {
  TipoNegocioModel.find({}, (err, data) => {
    callback(res, err, data)
  })
})

router.get('/Listar/:_id', (req, res) => {
  let query = { _id : req.params._id }
  TipoNegocioModel.findOne(query, (err, data) => {
    callback(res, err, data)
  })
})

module.exports = router