'use strict'

app.service('TipoServicoService', function($http) {

	let URL = '/api/v1'

	let _Gravar = function(TipoServico) {
		return $http({
			method: 'POST',
			url: URL + '/TipoServico/Gravar',
			data: TipoServico
		})
	}

	let _Listar = function() {
		return $http({
			method: 'GET',
			url: URL + '/TipoServico/Listar'
		})
	}

	let _Deletar = function() {

	}

	let _ListarUm = function(id) {
		return $http({
			method: 'GET',
			url: URL + '/TipoServico/Listar/' + id
		})
	}

	return {
		Gravar   : _Gravar,
		Listar   : _Listar,
		Deletar  : _Deletar,
		ListarUm : _ListarUm
	}

})