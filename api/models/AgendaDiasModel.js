'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const _agendasDiaschema = {
  
  _idAgenda: {type: Schema.Types.ObjectId, ref:'agenda'},
  sequencia: Number,
  diaSemana: Number,
  horaInicio: String,
  horaFinal: String
}

const AgendaDiasSchema = new Schema(_schema, { versionKey: false })
const AgendaDiasModel = mongoose.model('agendaDias', AgendaDiasSchema)

module.exports = AgendaDiasModel