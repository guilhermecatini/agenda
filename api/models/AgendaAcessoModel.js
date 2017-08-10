'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const _agendasAcessochema = {
  
  _idAgenda: {type: Schema.Types.ObjectId, ref:'agenda'},
  _idUsuario: {type: Schema.Types.ObjectId, ref:'usuario'},
  tipoAcesso: String
}

const AgendaAcessoSchema = new Schema(_schema, { versionKey: false })
const AgendaAcessoModel = mongoose.model('agendaAcesso', AgendaAcessoSchema)

module.exports = AgendaAcessoModel