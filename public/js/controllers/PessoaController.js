'use strict'

app.controller('PessoaController', function(PessoaService, EmpresaService, $stateParams) {

	let vm = this

	vm.Pessoa  = {}
	vm.Pessoas = []
	vm.Empresas = []

	if ( $stateParams._id ) {
		let _id = $stateParams._id
		PessoaService.ListarUm(_id)
		.then(function(res){
			vm.Pessoa = res.data
		})
	}

	vm.Listar = function() {
		PessoaService.Listar()
		.then(function(res){
			vm.Pessoas = res.data
		})
	}

	vm.Gravar = function() {
		PessoaService.Gravar(vm.Pessoa)
		.then(function(res){
			if (res.data._id) {
				console.log(res.data)
				vm.Pessoa = res.data
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