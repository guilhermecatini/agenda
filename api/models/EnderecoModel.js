'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const _enderecoSchema = {
  
  descricao: String,
  cep: Number,
  logradouro: String,
  numero: Number,
  complemento: String,
  bairro: String,
  cidade: String,
  estado: String,
  pais: String
}

const EnderecoSchema = new Schema(_schema, { versionKey: false })
const EnderecoModel = mongoose.model('endereco', EnderecoSchema)

module.exports = EnderecoModel