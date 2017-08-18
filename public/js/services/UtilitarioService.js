'use strict'

app.service('UtilitarioService', function($http) {

	let URL = '/api/v1'

	let _ConsultarCEP = function(cep) {
		if (cep.length == 8) {
			return $http({
				method: 'GET',
				url: 'https://viacep.com.br/ws/'+cep+'/json/'
			})
		} else {
			return { erro: true, mensagem: 'CEP deve conter 8 caracteres' }
		}
	}

	return {
		ConsultarCEP   : _ConsultarCEP
	}

})