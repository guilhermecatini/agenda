'use strict'

const app = angular.module('AppAgenda', ['ui.router', 'ngMask'])


app.config(function($httpProvider, $stateProvider, $urlRouterProvider){


  if ( 1 == 1 ) {

   $stateProvider

   .state('UsuariosNovo', {
    url: '/usuarios/novo',
    templateUrl: './views/frm_usuarios.html',
    controller: 'UsuarioController',
    controllerAs: 'vm'
  })

   .state('UsuariosAlterarId', {
    url: '/usuarios/alterar/:_id',
    templateUrl: './views/frm_usuarios.html',
    controller: 'UsuarioController',
    controllerAs: 'vm'
  })

   .state('Usuarios', {
    url: '/usuarios',
    templateUrl: './views/cns_usuarios.html',
    controller: 'UsuarioController',
    controllerAs: 'vm'
  })




 }


 $urlRouterProvider.otherwise('/usuarios')

})