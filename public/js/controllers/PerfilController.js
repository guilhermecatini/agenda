'use strict'

app.controller('PerfilController', function(PerfilService, UsuarioService, $stateParams, $state) {

	let vm = this

	vm.Usuario = {}

	let USUARIO = JSON.parse(localStorage.getItem('usuario'))

	vm.Gravar = function() {
		vm.Usuario.foto = $('#img_perfil').attr('src')
		UsuarioService.Gravar(vm.Usuario)
		.then(function(response){
			swal('Sucesso', '', 'success')
		})
	}

	UsuarioService.ListarUm(USUARIO._idUsuario)
	.then(function(response){
		vm.Usuario = response.data
	})


	// jQuery
	$('#foto_perfil').change(function(){
		let imgInput = $(this)[0].files[0]
		if ( imgInput ) {
			let fileReader = new FileReader()

			fileReader.addEventListener('load', function(el){
				//console.log(el.target.result)
				$.ajax({
					method: 'POST',
					url: 'https://api.imgur.com/3/image',
					headers: {
						Authorization: 'Client-ID 2e4460f98f2549e'
					},
					data: {
						image: el.target.result.split(',')[1]
					}
				}).done(function(response){
					$('#img_perfil').attr('src', response.data.link)
				})
			})

			fileReader.readAsDataURL(imgInput)

		}
	})

})