'use strict'

app.service('EmpresaService', function($http) {

	let URL = '/api/v1'

	let _Gravar = function(Empresa) {
		return $http({
			method: 'POST',
			url: URL + '/Empresa/Gravar',
			data: Empresa
		})
	}

	let _Listar = function() {
		return $http({
			method: 'GET',
			url: URL + '/Empresa/Listar'
		})
	}

	let _Deletar = function() {

	}

	let _ListarUm = function(id) {
		return $http({
			method: 'GET',
			url: URL + '/Empresa/Listar/' + id
		})
	}

	return {
		Gravar   : _Gravar,
		Listar   : _Listar,
		Deletar  : _Deletar,
		ListarUm : _ListarUm
	}

})