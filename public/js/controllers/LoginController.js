'use strict'

app.controller('LoginController', function(LoginService, $stateParams, $state) {

	let vm = this

	vm.Usuario  = {}

	vm.Login = function() {
		vm.Usuario.login = vm.Usuario.login.toLowerCase()

		LoginService.Login(vm.Usuario)
		.then(function(res){
			if (res.data._idUsuario) {
				localStorage.setItem('usuario', JSON.stringify(res.data))
				$state.go('menu.home')
			} else {
				swal('Ooops', 'Falha no Login, verifique seu usuário e senha', 'error')
			}
		})
	}


	// jQuery
	$('#usuario').popover({
		trigger: 'manual',
		title: 'Informação',
		content: 'Para prosseguir com o login, o usuário deve conter no mínimo 4 caracteres.',
		container: '.container-fluid',
		placement: 'top'
	})

	$('#usuario').focusin(function(){
		if ($(this).val().length < 4) {
			$(this).popover('show')
		}
	})

	$('#usuario').focusout(function(){
		$(this).popover('hide')
	})

	$('#usuario').keyup(function(){
		if ($(this).val().length >= 4) {
			$(this).popover('hide')
		}
	})	

	$('#senha').popover({
		trigger: 'manual',
		title: 'Informação',
		content: 'Para prosseguir com o login, a senha deve conter no mínimo 8 caracteres.',
		container: '.container-fluid',
		placement: 'top'
	})

	$('#senha').focusin(function(){
		if ($(this).val().length < 4) {
			$(this).popover('show')
		}
	})

	$('#senha').focusout(function(){
		$(this).popover('hide')
	})

	$('#senha').keyup(function(){
		if ($(this).val().length >= 8) {
			$(this).popover('hide')
		}
	})

})