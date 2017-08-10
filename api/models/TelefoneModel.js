'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const _telefoneSchema = {
  
  _idEmpresa: {type: Schema.Types.ObjectId, ref:'empresa'},
  _idUsuario: {type: Schema.Types.ObjectId, ref:'usuario'},
  _idPessoa: {type: Schema.Types.ObjectId, ref:'pessoa'},
  
  descricao: String,
  numero: String
}

const TelefoneSchema = new Schema(_schema, { versionKey: false })
const TelefoneModel = mongoose.model('telefone', TelefoneSchema)

module.exports = TelefoneModel