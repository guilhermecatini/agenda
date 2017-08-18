'use strict'

app.controller('EmpresaController', function(EmpresaService, $stateParams) {

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
			if (res.data._id) {
				vm.Empresa = res.data
			}
		})
	}

})