//modulos: se usan para separar el codigo en diferentes archivos, cumplen una funcion especifica
//modulos nativos de nodejs: vienen con nodejs
//modulos de terceros: se instalan con npm(gestor d epaquetes de nodejs)
//modulos propios(son modulo creado por nosotros)

import { suma, resta, multiplicacion } from "./modulos/operaciones.js"
console.log(suma(10, 20));
console.log(resta(10, 20));
console.log(multiplicacion(10, 20))