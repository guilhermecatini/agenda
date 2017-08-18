'use strict'

app.service('UsuarioService', function($http) {

	let URL = '/api/v1'

	let _Gravar = function(Usuario) {
		return $http({
			method: 'POST',
			url: URL + '/Usuario/Gravar',
			data: Usuario
		})
	}

	let _Listar = function() {
		return $http({
			method: 'GET',
			url: URL + '/Usuario/Listar'
		})
	}

	let _Deletar = function() {

	}

	let _ListarUm = function(id) {
		return $http({
			method: 'GET',
			url: URL + '/Usuario/Listar/' + id
		})
	}

	return {
		Gravar   : _Gravar,
		Listar   : _Listar,
		Deletar  : _Deletar,
		ListarUm : _ListarUm
	}

})