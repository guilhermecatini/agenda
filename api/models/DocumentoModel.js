'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const _documentoSchema = {

  _idEmpresa: {type: Schema.Types.ObjectId, ref:'empresa'},
  _idUsuario: {type: Schema.Types.ObjectId, ref:'usuario'},
  _idPessoa: {type: Schema.Types.ObjectId, ref:'pessoa'},

  descricao: String,
  numero: String
}

const DocumentoSchema = new Schema(_schema, { versionKey: false })
const DocumentoModel = mongoose.model('documento', DocumentoSchema)

module.exports = DocumentoModel