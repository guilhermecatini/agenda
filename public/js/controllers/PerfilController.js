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

	vm.SalvarImagem = function() {
		let imgData = $('#imgTmp').cropper('getCroppedCanvas').toDataURL('image/jpeg').split(',')[1]
		$('button[type=button]').attr('disabled', '')
		$.ajax({
			method: 'POST',
			url: 'https://api.imgur.com/3/image',
			headers: {
				Authorization: 'Client-ID 2e4460f98f2549e'
			},
			data: {
				image: imgData
			}
		}).done(function(response){
			$('#img_perfil').attr('src', response.data.link)
			$('.modal-foto').modal('hide')
			vm.Gravar()
			$('button[type=button]').removeAttr('disabled')
		})
	}

	// Lista os dados do usuário
	UsuarioService.ListarUm(USUARIO._idUsuario)
	.then(function(response){
		vm.Usuario = response.data
	})

	// jQuery Area
	// Ao selecionar uma foto
	$('#foto_perfil').change(function(){
		let imgInput = $(this)[0].files[0]
		if ( imgInput ) {
			let fileReader = new FileReader()
			fileReader.addEventListener('load', function(el){
				$('#imgTmp').attr('src', el.target.result)
				$('.modal-foto').modal('show')
			})
			fileReader.readAsDataURL(imgInput)
		}
	})

	// Ao finalizar a abertura do modal, aciona o metodo CROP
	$('.modal-foto').on('shown.bs.modal', function(){
		$('#imgTmp').cropper('destroy')
		$('#imgTmp').cropper({
			aspectRatio: 1/1,
			viewMode:2, 
			dragMode: 'none',
			modal: true,
			guides: true,
			autoCrop: true, 
			autoCropArea: 0.8,
			cropBoxResizable: true,
		})
	})

	// Ao finalizar o fechamento do modal, aciona o metodo CROP
	$('.modal-foto').on('hidden.bs.modal', function(){
		$('#imgTmp').removeAttr('src')
		$('#imgTmp').cropper('destroy')
	})


	// $('#foto_perfils').change(function(){
	// 	let imgInput = $(this)[0].files[0]
	// 	if ( imgInput ) {
	// 		let fileReader = new FileReader()

	// 		fileReader.addEventListener('load', function(el){
	// 			//console.log(el.target.result)
	// 			$.ajax({
	// 				method: 'POST',
	// 				url: 'https://api.imgur.com/3/image',
	// 				headers: {
	// 					Authorization: 'Client-ID 2e4460f98f2549e'
	// 				},
	// 				data: {
	// 					image: el.target.result.split(',')[1]
	// 				}
	// 			}).done(function(response){
	// 				$('#img_perfil').attr('src', response.data.link)
	// 			})
	// 		})

	// 		fileReader.readAsDataURL(imgInput)

	// 	}
	// })

})