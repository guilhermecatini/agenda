'use strict'

const express = require('express')
const router = express.Router()
const UsuarioModel = require('../models/UsuarioModel')

function callback(res, err, data, status = 200) {
  if (err) return res.status(500).json(err)
    return res.status(status).json(data)
}

router.post('/Login', (req, res) => {
  const query = { login: req.body.login, senha: req.body.senha }
  UsuarioModel.findOne(query, (err, data) => {
    let objRet = {}
    if (data) {
      objRet = {
        _idUsuario: data._id
      }
    }
    callback(res, err, objRet, 200)
  })
})

router.post('/Gravar', (req, res) => {

  const Usuario = req.body

  if ( Usuario._id ) {
    let query = { _id : Usuario._id }
    delete Usuario._id
    UsuarioModel.update(query, Usuario, (err, data) => {
      callback(res, err, data, 200)
    })
  } else {
    UsuarioModel.create(Usuario, (err, data) => {
      callback(res, err, data, 201)
    })
  }

})

router.get('/Listar', (req, res) => {
  UsuarioModel.find({}, (err, data) => {
    callback(res, err, data)
  }).populate('_idEmpresa')
})

router.get('/Listar/:_id', (req, res) => {
  let query = { _id : req.params._id }
  UsuarioModel.findOne(query, (err, data) => {
    callback(res, err, data)
  })
})

router.get('/Deletar/:_id', (req, res) => {
  const query = { _id : req.params._id }
  UsuarioModel.remove(query, (err, data) => {
    callback(res, err, data)
  })
})

module.exports = router