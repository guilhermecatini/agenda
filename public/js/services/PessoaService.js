'use strict'

app.service('PessoaService', function($http) {

	let URL = '/api/v1'

	let _Gravar = function(Pessoa) {
		return $http({
			method: 'POST',
			url: URL + '/Pessoa/Gravar',
			data: Pessoa
		})
	}

	let _Listar = function() {
		return $http({
			method: 'GET',
			url: URL + '/Pessoa/Listar'
		})
	}

	let _Deletar = function() {

	}

	let _ListarUm = function(id) {
		return $http({
			method: 'GET',
			url: URL + '/Pessoa/Listar/' + id
		})
	}

	return {
		Gravar   : _Gravar,
		Listar   : _Listar,
		Deletar  : _Deletar,
		ListarUm : _ListarUm
	}

})