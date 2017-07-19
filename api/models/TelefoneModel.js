'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const _telefoneSchema = {
  
  descricao: String,
  numero: String
}

const TelefoneSchema = new Schema(_schema, { versionKey: false })
const TelefoneModel = mongoose.model('telefone', TelefoneSchema)

module.exports = TelefoneModel