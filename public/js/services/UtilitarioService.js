'use strict'

app.service('UtilitarioService', function($http) {

	let URL = '/api/v1'

	let _ConsultarCEP = function(cep) {
		return $http({
			method: 'GET',
			url: 'https://viacep.com.br/ws/'+cep+'/json/'
		})
	}

	return {
		ConsultarCEP   : _ConsultarCEP
	}

})