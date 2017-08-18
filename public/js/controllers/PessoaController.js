'use strict'

app.controller('PessoaController', function(PessoaService, EmpresaService, EnderecoService, UtilitarioService, $stateParams) {

	let vm = this

	vm.Pessoa   = {}
	vm.Endereco = {}
	vm.Pessoas  = []
	vm.Empresas = []

	if ( $stateParams._id ) {
		let _id = $stateParams._id
		PessoaService.ListarUm(_id)
		.then(function(res){
			vm.Pessoa = res.data
			EnderecoService.Listar(_id)
			.then(function(res){
				vm.Endereco = res.data
			})
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
				vm.Pessoa = res.data
			}
			// Grava o endereço
			vm.Endereco._idPessoa = vm.Pessoa._id
			EnderecoService.Gravar(vm.Endereco)
			.then(function(res) {
				if (res.data._id) {
					vm.Endereco = res.data
				}
			})
		})
	}

	vm.ListarEmpresas = function() {
		EmpresaService.Listar()
		.then(function(res){
			vm.Empresas = res.data
		})
	}

	vm.ConsultarCEP = function() {
		let cep = vm.Endereco.cep

		if (cep.length == 8) {
			UtilitarioService.ConsultarCEP(vm.Endereco.cep)
			.then(function(res){
				if (!res.data.erro) {
					res.data.cep = res.data.cep.replace(/[^0-9]/, '')
					res.data._id = vm.Endereco._id
					vm.Endereco = res.data
				}
			})
		}
	}

})