const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/agenda', { useMongoClient: true })

const UsuarioAPI      = require('./api/routes/UsuarioRoutes')
const EmpresaAPI      = require('./api/routes/EmpresaRoutes')
const TipoServicoAPI  = require('./api/routes/TipoServicoRoutes')
const PessoaAPI       = require('./api/routes/PessoaRoutes')
const EnderecoAPI     = require('./api/routes/EnderecoRoutes')
const TipoNegocioAPI  = require('./api/routes/TipoNegocioRoutes')
const EtapaAPI        = require('./api/routes/EtapaRoutes')

// const index = require('./routes/index')
// const users = require('./routes/users')

const app = express()

// view engine setup
//app.set('views', path.join(__dirname, 'views'))
//app.set('view engine', 'jade')

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/v1/Usuario', UsuarioAPI)
app.use('/api/v1/Empresa', EmpresaAPI)
app.use('/api/v1/TipoServico', TipoServicoAPI)
app.use('/api/v1/Pessoa', PessoaAPI)
app.use('/api/v1/Endereco', EnderecoAPI)
app.use('/api/v1/TipoNegocio', TipoNegocioAPI)
app.use('/api/v1/Etapa', EtapaAPI)

//app.use('/', index)
//app.use('/users', users)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500).json({error:'true'})
  //res.render('error')
})

module.exports = app