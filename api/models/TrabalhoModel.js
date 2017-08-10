'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const _trabalhoSchema = {
  
  _idPessoa: {type: Schema.Types.ObjectId, ref:'pessoa'},
  reponsavel: {type: Schema.Types.ObjectId, ref:'usuario'},,
  situacao: String
}

const TrabalhoSchema = new Schema(_schema, { versionKey: false })
const TrabalhoModel = mongoose.model('trabalho', TrabalhoSchema)

module.exports = TrabalhoModel