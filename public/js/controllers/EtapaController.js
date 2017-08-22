'use strict'

app.controller('EtapaController', function(EtapaService, $stateParams, $state) {

	let vm = this

	vm.Etapa  = {}
	vm.Etapas = []

	if ( $stateParams._id ) {
		let _id = $stateParams._id
		EtapaService.ListarUm(_id)
		.then(function(res){
			vm.Etapa = res.data
		})
	}

	vm.Listar = function() {
		EtapaService.Listar()
		.then(function(res){
			vm.Etapas = res.data
		})
	}

	vm.Gravar = function() {
		EtapaService.Gravar(vm.Etapa)
		.then(function(res){
			if ( res.data._id ) {
				$state.go('menu.frmEtapa', { _id: res.data._id })
			}
			swal('Sucesso', '', 'success')
		})
	}

})