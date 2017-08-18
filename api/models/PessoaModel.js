'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const _pessoaSchema = {
  
  _idEmpresa: {type: Schema.Types.ObjectId, ref:'empresa'},
  nome: String,
  observacao: String
  
}

const PessoaSchema = new Schema(_pessoaSchema, { versionKey: false })
const PessoaModel = mongoose.model('pessoa', PessoaSchema)

module.exports = PessoaModel