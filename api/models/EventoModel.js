'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const _eventoSchema = {
  
  _idAgenda: {type: Schema.Types.ObjectId, ref:'agenda'},
  descricao: String,
  _idTrabalho: {type: Schema.Types.ObjectId, ref:'trabalho'},
  _idTipoServico: {type: Schema.Types.ObjectId, ref:'tipoServico'},
  situacao: String,
  data: Date,
  horaInicio: Date,
  horaFinal: Date,
  observacao: String,
  Local: String,
  avisoSMS: String,
  avisoEmail: String
}

const EventoSchema = new Schema(_schema, { versionKey: false })
const EventoModel = mongoose.model('evento', EventoSchema)

module.exports = EventoModel