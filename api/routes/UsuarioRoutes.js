'use strict'

const express = require('express')
const router = express.Router()
const UsuarioModel = require('../models/UsuarioModel')

function callback(res, err, data) {
  if (err) return res.status(500).json(err)
    return res.status(200).json(data)
}

router.post('/create', (req, res) => {
  const body = req.body
  UsuarioModel.create(body, (err, data) => {
    callback(res, err, data)
  })
})

router.post('/update', (req, res) => {
  const mod = req.body
  const query = { _id: req.body._id }
  delete mod._id
  UsuarioModel.update(query, mod, (err, data) => {
    callback(res, err, data)
  })
})

router.get('/retrieve', (req, res) => {
  UsuarioModel.find({}, (err, data) => {
    callback(res, err, data)
  })
})

router.get('/retrieve/:_id', (req, res) => {
  const query = { _id: req.params._id }
  UsuarioModel.findOne(query, (err, data) => {
    callback(res, err, data)
  })
})


module.exports = router