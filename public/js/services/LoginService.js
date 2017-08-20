'use strict'

app.service('LoginService', function($http) {

	let URL = '/api/v1'

	let _Login = function(Usuario) {
		return $http({
			method: 'POST',
			url: URL + '/Usuario/Login',
			data: Usuario
		})
	}

	return {
		Login   : _Login
	}

})