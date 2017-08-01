'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const _usuarioschema = {
  
  _idEmpresa: {type: Schema.Types.ObjectId, ref:'empresa'},
  email: String,
  nome: String,
  login: String,
  senha: String
}

const UsuarioSchema = new Schema(_schema, { versionKey: false })
const UsuarioModel = mongoose.model('usuario', UsuarioSchema)

module.exports = UsuarioModel