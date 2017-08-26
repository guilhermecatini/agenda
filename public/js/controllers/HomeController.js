'use strict'

app.controller('HomeController', function($stateParams, $state) {

	let vm = this



function showPreview(coords)
{
	
	var rx = 100 / coords.w;
	var ry = 100 / coords.h;

	$('#preview').css({
		width: Math.round(rx * 500) + 'px',
		height: Math.round(ry * 370) + 'px',
		marginLeft: '-' + Math.round(rx * coords.x) + 'px',
		marginTop: '-' + Math.round(ry * coords.y) + 'px'
	});
}


var teste = $('#legal').Jcrop({
		onChange: showPreview,
		onSelect: showPreview,
		aspectRatio: 1
})


/*
var jcrop_api = $('#legal').Jcrop('api'),
    container = jcrop_api.container,
    //myselection = jcrop_api.ui.multi[1];

container.on('cropmove',function(e,s,c){
	console.log(s)
  // if (s === myselection) {
  //   //...
  // }
});
*/
/*
	$('#legal').Jcrop({
	  aspectRatio: 1,
	  setSelect: [ 175, 100, 400, 300 ]
	},function(ae){
	  var jcrop_api = this;
	  thumbnail = this.initComponent('Thumbnailer', { width: 130, height: 130 });
	});
*/
})