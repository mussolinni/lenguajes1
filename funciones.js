//funciones propias de js
function suma(numero1, numero2) {
  return numero1 + numero2;
}

let resultado = suma(10, 20);

//funcion anonima
let resta = function (numero1, numero2) {
  return numero1 - numero2;
};

let multiplicacion = (numero1, numero2) => {
  console.log("multiplicacion");
  return numero1 * numero2;
};

let division = (numero1, numero2) => numero1 / numero2;

console.log(resultado);
console.log(resta(10, 20));
console.log(multiplicacion(10, 20));
console.log(division(10, 20));

//funciones nativas de js
console.log(Math.sqrt(9));
console.log(Math.random());

let nombre = "Juan";
console.log(nombre.toUpperCase());
console.log(nombre.toLowerCase());
console.log(nombre.length);


//funcion autoinvocable
(() => console.log("funcion autoinvocable"))();
