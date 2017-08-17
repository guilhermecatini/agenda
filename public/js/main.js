'use strict'

const app = angular.module('AppAgenda', ['ui.router', 'ngMask'])


app.config(function($httpProvider, $stateProvider, $urlRouterProvider){

 $stateProvider
 .state('menu', {
    templateUrl: './views/menu.html'
  })

 .state('menu.home', {
    url: '/home',
    templateUrl: './views/home.html'
  })

  .state('menu.frmEmpresa', {
    url: '/Empresa/?_id',
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

 $urlRouterProvider.otherwise('/home')

})