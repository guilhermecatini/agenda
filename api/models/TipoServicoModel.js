'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const _tipoServicoSchema = {
  
  descricao: String,
  tempoMedio: Number,
  tempoPreparo: Number,
  tempoEncerramento: Number

}

const TipoServicoSchema = new Schema(_schema, { versionKey: false })
const TipoServicoModel = mongoose.model('tipoServico', TipoServicoSchema)

module.exports = TipoServicoModel