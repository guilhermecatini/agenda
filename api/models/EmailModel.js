'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const _emailSchema = {
  
  descricao: String,
  email: String
}

const EmailSchema = new Schema(_schema, { versionKey: false })
const EmailModel = mongoose.model('email', EmailSchema)

module.exports = EmailModel