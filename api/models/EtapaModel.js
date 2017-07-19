'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const _etapaSchema = {
  
  descricao: String,
  observacao: String
}

const EtapaSchema = new Schema(_schema, { versionKey: false })
const EtapaModel = mongoose.model('etapa', EtapaSchema)

module.exports = EtapaModel