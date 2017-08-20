'use strict'

const app = angular.module('AppAgenda', ['ui.router', 'angular-loading-bar', 'ngMask'])

app.config(function($httpProvider, $stateProvider, $urlRouterProvider, cfpLoadingBarProvider){

  $httpProvider.interceptors.push('LoginInterceptor')

  cfpLoadingBarProvider.includeSpinner = false

  $urlRouterProvider.otherwise('/Login')

  $stateProvider
  .state('login', {
    url: '/Login',
    templateUrl: './views/login.html',
    controller: 'LoginController',
    controllerAs: 'vm'
  })

  .state('menu', {
    templateUrl: './views/menu.html',
    controller: 'MenuController',
    controllerAs: 'vm'
  })

  .state('menu.home', {
    url: '/Home',
    templateUrl: './views/home.html'
  })

  .state('menu.frmEmpresa', {
    url: '/Empresa?_id',
    params: { _id: null },
    templateUrl: './views/frm_empresa.html',
    controller: 'EmpresaController',
    controllerAs: 'vm'
  })

  .state('menu.cnsEmpresa', {
    url: '/Empresa/Listar',
    templateUrl: './views/cns_empresa.html',
    controller: 'EmpresaController',
    controllerAs: 'vm'
  })

  .state('menu.frmUsuario', {
    url: '/Usuario?_id',
    params: { _id: null },
    templateUrl: './views/frm_usuario.html',
    controller: 'UsuarioController',
    controllerAs: 'vm'
  })

  .state('menu.cnsUsuario', {
    url: '/Usuario/Listar',
    templateUrl: './views/cns_usuario.html',
    controller: 'UsuarioController',
    controllerAs: 'vm'
  })

  .state('menu.frmTipoServico', {
    url: '/TipoServico?_id',
    params: { _id: null },
    templateUrl: './views/frm_tipo_servico.html',
    controller: 'TipoServicoController',
    controllerAs: 'vm'
  })

  .state('menu.cnsTipoServico', {
    url: '/TipoServico/Listar',
    templateUrl: './views/cns_tipo_servico.html',
    controller: 'TipoServicoController',
    controllerAs: 'vm'
  })

  .state('menu.frmPessoa', {
    url: '/Pessoa?_id',
    params: { _id: null },
    templateUrl: './views/frm_pessoa.html',
    controller: 'PessoaController',
    controllerAs: 'vm'
  })

  .state('menu.cnsPessoa', {
    url: '/Pessoa/Listar',
    templateUrl: './views/cns_pessoa.html',
    controller: 'PessoaController',
    controllerAs: 'vm'
  })

})