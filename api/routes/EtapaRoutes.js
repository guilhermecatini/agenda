'use strict'

const express = require('express')
const router = express.Router()
const EtapaModel = require('../models/EtapaModel')

function callback(res, err, data, status = 200) {
  if (err) return res.status(500).json(err)
    return res.status(status).json(data)
}

router.post('/Gravar', (req, res) => {

  const Etapa = req.body

  if ( Etapa._id ) {
    let query = { _id : Etapa._id }
    delete Etapa._id
    EtapaModel.update(query, Etapa, (err, data) => {
      callback(res, err, data, 200)
    })
  } else {
    EtapaModel.create(Etapa, (err, data) => {
      callback(res, err, data, 201)
    })
  }

})

router.get('/Listar', (req, res) => {
  EtapaModel.find({}, (err, data) => {
    callback(res, err, data)
  })
})

router.get('/Listar/:_id', (req, res) => {
  let query = { _id : req.params._id }
  EtapaModel.findOne(query, (err, data) => {
    callback(res, err, data)
  })
})

module.exports = router