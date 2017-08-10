'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const _empresaSchema = {
  
  nome: String,
  email: String,
  tipoNegocio: Number
}

const EmpresaSchema = new Schema(_schema, { versionKey: false })
const EmpresaModel = mongoose.model('empresa', EmpresaSchema)

module.exports = EmpresaModel