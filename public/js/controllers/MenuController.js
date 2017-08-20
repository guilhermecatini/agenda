'use strict'

app.controller('MenuController', function(MenuService, $stateParams, $state) {

	let vm = this

	vm.Sair = function() {
		swal({
		  title: "Tem certeza?",
		  text: "Realmente deseja sair do sistema?",
		  type: "warning",
		  showCancelButton: true,
		  confirmButtonColor: "#DD6B55",
		  confirmButtonText: "Sim, sair",
		  cancelButtonText: 'Não',
		  closeOnConfirm: false
		},
		function(){
			swal.close()
			localStorage.clear()
		  $state.go('login')
		});
	}


})