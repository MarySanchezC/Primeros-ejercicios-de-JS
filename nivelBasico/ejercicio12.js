/* condcionales-Swith 
funciona similar a las condicionales solo que a diferencia de If-else 
SWITCH  SOLO SE PUEDE VALIDAR UNA SOLA CONDICION entre varios casos
y es utilizado cuando necesitamos compara , igual o negar una condicion 
y otra*/
/* diferentes validaciones de una condicionn */

let nombre = prompt("Type your name");
let edad = prompt("Type your age");

switch (edad) {
  case "18":
    alert("You have access to the list ");
    break;
  case "25":
    alert("You have access to the list");
    break;

  default:
    alert("You must be adult");
    break;
}
