/* DOM- DOCUMENT OBJET MODEL  
Js puede acceder al DOM y atra ves de el modifica 
la pagina incluso puede modificar los estilos css , eliminar o añadir elementos 
y atributos relacionados con la pagina*/
//tambienreacciona  a todos los eventos de la pagina

//OBTENER EL HTML

let datos = document.getElementById("datos");

//Funcion

const nombreusuario = () => {
  let nombre = prompt("Ingresa tu nombre");
  alert(nombre);
};

//funcion vacia
//eventos (onclick desde javaescript)

datos.onclick = function () {
  nombreusuario();
};
