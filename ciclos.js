//ciclos
//for, while, do while

let palabra_oculta = "hola grupo unisalle";

for (let i = 0; i < palabra_oculta.length; i++) {
  console.log(palabra_oculta[i]);
}
//while
let inicio = 0;
let fin = palabra_oculta.length;
while (inicio < fin) {
  console.log(palabra_oculta[inicio]);
  inicio++;
}

//do while
let inicio2 =100;
let fin2 = palabra_oculta.length;
do {
  console.log(palabra_oculta[inicio2]);
  inicio2++;
} while (inicio2 < fin2);
 