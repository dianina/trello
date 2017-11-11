	function add(){
//tomar el texto ingresado en el textarea
	var tareas = document.getElementById('tarea').value;
//limpiar el textarea
	document.getElementById('tarea').value = '';
}

var boton = document.getElementById('bton');
boton.addEventListener('click', function(){
	