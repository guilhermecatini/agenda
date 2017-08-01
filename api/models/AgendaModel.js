'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const _agendaschema = {
  
  descricao: String
  _idUsuario: {type: Schema.Types.ObjectId, ref:'usuario'}
  
}

const AgendaSchema = new Schema(_schema, { versionKey: false })
const AgendaModel = mongoose.model('agenda', AgendaSchema)

module.exports = AgendaModel