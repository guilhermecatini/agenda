'use strict'

app.service('EnderecoService', function($http) {

	let URL = '/api/v1'

	let _Gravar = function(Endereco) {
		return $http({
			method: 'POST',
			url: URL + '/Endereco/Gravar',
			data: Endereco
		})
	}

	let _Listar = function(idPessoa) {
		return $http({
			method: 'GET',
			url: URL + '/Endereco/Pessoa/Listar/' + idPessoa
		})
	}

	let _Deletar = function() {

	}

	let _ListarUm = function(id) {
		return $http({
			method: 'GET',
			url: URL + '/Endereco/Listar/' + id
		})
	}

	return {
		Gravar   : _Gravar,
		Listar   : _Listar,
		Deletar  : _Deletar,
		ListarUm : _ListarUm
	}

})