'use strict'

app.controller('UsuarioController', function(UsuarioService, EmpresaService, $stateParams) {

	let vm = this

	vm.Usuario  = {}
	vm.Usuarios = []
	vm.Empresas = []

	if ( $stateParams._id ) {
		let _id = $stateParams._id
		UsuarioService.ListarUm(_id)
		.then(function(res){
			vm.Usuario = res.data
		})
	}

	vm.Listar = function() {
		UsuarioService.Listar()
		.then(function(res){
			vm.Usuarios = res.data
		})
	}

	vm.Gravar = function() {
		UsuarioService.Gravar(vm.Usuario)
		.then(function(res){
			if (res.data._id) {
				vm.Usuario = res.data
			}
		})
	}

	vm.ListarEmpresas = function() {
		EmpresaService.Listar()
		.then(function(res){
			vm.Empresas = res.data
		})
	}

})