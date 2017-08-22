'use strict'

app.controller('TipoNegocioController', function(TipoNegocioService, $stateParams, $state) {

	let vm = this

	vm.TipoNegocio  = {}
	vm.TipoNegocios = []

	if ( $stateParams._id ) {
		let _id = $stateParams._id
		TipoNegocioService.ListarUm(_id)
		.then(function(res){
			vm.TipoNegocio = res.data
		})
	}

	vm.Listar = function() {
		TipoNegocioService.Listar()
		.then(function(res){
			vm.TipoNegocios = res.data
		})
	}

	vm.Gravar = function() {
		TipoNegocioService.Gravar(vm.TipoNegocio)
		.then(function(res){
			if ( res.data._id ) {
				$state.go('menu.frmTipoNegocio', { _id: res.data._id })
			}
			swal('Sucesso', '', 'success')
		})
	}

})