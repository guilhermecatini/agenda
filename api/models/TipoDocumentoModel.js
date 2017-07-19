'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const _tipoDocumentoSchema = {
  
  descricao: String,
  numero: String
}

const TipoDocumentoSchema = new Schema(_schema, { versionKey: false })
const TipoDocumentoModel = mongoose.model('tipoDocumento', TipoDocumentoSchema)

module.exports = TipoDocumentoModel