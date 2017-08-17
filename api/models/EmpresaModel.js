'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const _empresaSchema = {
  
  nome_fantasia: String,
  razao_social: String,
  email: String,
  tipoNegocio: Number
}

const EmpresaSchema = new Schema(_empresaSchema, { versionKey: false })
const EmpresaModel = mongoose.model('empresa', EmpresaSchema)

module.exports = EmpresaModel