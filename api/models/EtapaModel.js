'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const _etapaSchema = {
  
  _idTrabalho: {type: Schema.Types.ObjectId, ref:'trabalho'},

  descricao: String,
  observacao: String
}

const EtapaSchema = new Schema(_etapaSchema, { versionKey: false })
const EtapaModel = mongoose.model('etapa', EtapaSchema)

module.exports = EtapaModel