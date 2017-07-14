'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const _schema = {
  
  nome_completo: {
    type: String
  },

  usuario: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  },

  senha: {
    type: String,
    required: true
  }

}

const UsuarioSchema = new Schema(_schema, { versionKey: false })
const UsuarioModel = mongoose.model('usuario', UsuarioSchema)

module.exports = UsuarioModel