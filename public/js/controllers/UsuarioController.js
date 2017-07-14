'use strict'

app.controller('UsuarioController', UsuarioController)

function UsuarioController($http, $stateParams) {

  const vm = this

  vm.Usuarios = []
  vm.Usuario = {}

  vm.Gravar = function() {
    let url = '/api/v1/usuarios/create'
    if ( $stateParams._id ) {
      url = '/api/v1/usuarios/update'
    }
    $http({
      method: 'POST',
      url: url,
      data: vm.Usuario
    }).then(
    function(retorno){
      swal('Sucesso', 'Registro salvo.', 'success')
    },
    function(erro){
      console.log(erro)
      swal('Erro', 'Houve um erro ao executar esta ação. Contate o suporte.', 'error')
    })
  }

  vm.ListarUsuario = function() {
    $http({
      method: 'GET',
      url: '/api/v1/usuarios/retrieve/' + $stateParams._id,
      data: vm.Usuario
    }).then(
    function(retorno){
      vm.Usuario = retorno.data
    },
    function(erro){
      swal('Erro', 'Houve um erro ao executar esta ação. Contate o suporte.', 'error')
    })
  }

  vm.ListarUsuarios = function() {
    $http({
      method: 'GET',
      url: '/api/v1/usuarios/retrieve',
      data: vm.Usuario
    }).then(
    function(retorno){
      vm.Usuarios = retorno.data
    },
    function(erro){
      console.log(erro)
      swal('Erro', 'Houve um erro ao executar esta ação. Contate o suporte.', 'error')
    })
  }


  if ( $stateParams._id ) {
    vm.ListarUsuario()
  }


}