'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const _tipoNegocioSchema = {
  
  descricao: String
}

const TipoNegocioSchema = new Schema(_schema, { versionKey: false })
const TipoNegocioModel = mongoose.model('tipoNegocio', TipoNegocioSchema)

module.exports = TipoNegocioModel