'use strict'

app.controller('EmpresaController', function(EmpresaService, $stateParams, $state) {

	let vm = this

	vm.Empresa  = {}
	vm.Empresas = []

	if ( $stateParams._id ) {
		let _id = $stateParams._id
		EmpresaService.ListarUm(_id)
		.then(function(res){
			vm.Empresa = res.data
		})
	}

	vm.Listar = function() {
		EmpresaService.Listar()
		.then(function(res){
			vm.Empresas = res.data
		})
	}

	vm.Gravar = function() {
		EmpresaService.Gravar(vm.Empresa)
		.then(function(res){
			$state.go('menu.frmEmpresa', { _id: res.data._id })
		})
	}

})