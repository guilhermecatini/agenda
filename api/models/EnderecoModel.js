'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const _enderecoSchema = {
  
  _idEmpresa: {type: Schema.Types.ObjectId, ref:'empresa'},
  _idUsuario: {type: Schema.Types.ObjectId, ref:'usuario'},
  _idPessoa: {type: Schema.Types.ObjectId, ref:'pessoa'},
  
  descricao: String,
  cep: Number,
  logradouro: String,
  numero: Number,
  complemento: String,
  bairro: String,
  localidade: String,
  uf: String
}

const EnderecoSchema = new Schema(_enderecoSchema, { versionKey: false })
const EnderecoModel = mongoose.model('endereco', EnderecoSchema)

module.exports = EnderecoModel