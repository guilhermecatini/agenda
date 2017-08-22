'use strict'

app.service('TipoNegocioService', function($http) {

	let URL = '/api/v1'

	let _Gravar = function(TipoNegocio) {
		return $http({
			method: 'POST',
			url: URL + '/TipoNegocio/Gravar',
			data: TipoNegocio
		})
	}

	let _Listar = function() {
		return $http({
			method: 'GET',
			url: URL + '/TipoNegocio/Listar'
		})
	}

	let _Deletar = function() {

	}

	let _ListarUm = function(id) {
		return $http({
			method: 'GET',
			url: URL + '/TipoNegocio/Listar/' + id
		})
	}

	return {
		Gravar   : _Gravar,
		Listar   : _Listar,
		Deletar  : _Deletar,
		ListarUm : _ListarUm
	}

})