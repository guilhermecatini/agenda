'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const _tipoServicoSchema = {
  
  descricao: String,
  tempoMedio: Number,
  tempoPreparo: Number,
  tempoEncerramento: Number

}

const TipoServicoSchema = new Schema(_tipoServicoSchema, { versionKey: false })
const TipoServicoModel = mongoose.model('tipo_servico', TipoServicoSchema)

module.exports = TipoServicoModel