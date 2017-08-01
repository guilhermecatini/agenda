'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const _emailSchema = {

  _idEmpresa: {type: Schema.Types.ObjectId, ref:'empresa'},
  _idUsuario: {type: Schema.Types.ObjectId, ref:'usuario'},
  _idPessoa: {type: Schema.Types.ObjectId, ref:'pessoa'},

  descricao: String,
  email: String
}

const EmailSchema = new Schema(_schema, { versionKey: false })
const EmailModel = mongoose.model('email', EmailSchema)

module.exports = EmailModel