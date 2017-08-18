'use strict'

app.controller('TipoServicoController', function(TipoServicoService, $state, $stateParams) {

	let vm = this

	vm.TipoServico  = {}
	vm.TipoServicos = []

	if ( $stateParams._id ) {
		let _id = $stateParams._id
		TipoServicoService.ListarUm(_id)
		.then(function(res){
			vm.TipoServico = res.data
		})
	}

	vm.Listar = function() {
		TipoServicoService.Listar()
		.then(function(res){
			vm.TipoServicos = res.data
		})
	}

	vm.Gravar = function() {
		TipoServicoService.Gravar(vm.TipoServico)
		.then(function(res){
			if (res.data._id) {
				vm.TipoServico = res.data
			}
		})
	}

})