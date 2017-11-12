	var nuevoInput= function(){
		//caja para añadir nueva lista
		var crearInput = document.createElement("input");
		var contenidoinput = document.createTextNode(" ");
		crearInput.setAttribute("type", "text");
		crearInput.setAttribute("id", "input-creado");
		crearInput.setAttribute("placeholder", "Nombre de la lista");		
		crearInput.appendChild(contenidoinput);
		document.getElementById("contenedorlista").appendChild(crearInput);
	};

	var nuevoBoton= function(){
		//func. para crear nueva lista
		var crearBoton = document.createElement("button");
		var contenidoboton = document.createTextNode("Crear nueva lista");
		crearBoton.setAttribute("id", "boton-creado");
		crearBoton.setAttribute("onclick", "presionBoton()")	
		crearBoton.appendChild(contenidoboton);
		document.getElementById("contenedorlista").appendChild(crearBoton);
	};

	var mostrarTarea = function(){
		//func. mostrar esa nueva tarea
		var valorInput = document.getElementById("input-creado").value;
		document.getElementById("lista-input").appendChild(valorInput);
	};

		//funcion añadir una lista al presionar click
		function anadirLista() {
			var aLista = document.getElementById("anadir_lista");
			aLista.addEventListener("click", nuevoInput);
			aLista.addEventListener("click", nuevoBoton);		
		};
		anadirLista();


		function presionBoton(){
			//botón activo para crear nueva lista
			var textoNuevaLista= document.getElementById("input-creado").value;
			var textoACaja=document.getElementById("lista-input");
			var textoEnNodo= document.createTextNode(textoNuevaLista);
			var etiquetaTexto = document.createElement("h1");
			
			etiquetaTexto.classList.add("box-hijo");
			etiquetaTexto.appendChild(textoEnNodo);
			textoACaja.appendChild(etiquetaTexto);
			crearSegundoBoton.setAttribute("id", "segundo-boton");
			crearSegundoBoton.appendChild(contenidoboton);
			document.getElementById("lista-input").appendChild(crearSegundoBoton);

		};


	//function add(){
//tomar el texto ingresado en el textarea
	//var tareas = document.getElementById('tarea').value;
//limpiar el textarea
	//document.getElementById('tarea').value = '';
//}

//var boton = document.getElementById('bton');
//boton.addEventListener('click', function(){
	