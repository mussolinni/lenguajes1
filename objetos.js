//clases(plantilla) y objetos(instancia de una clase)
//objetos literales
const persona ={
  nombre: "Juan",
  edad: 25,
  casado: true,
  estatura: 1.75
}

console.log(persona);
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.casado);

//objetos con objects

const estudiante = new Object();
estudiante.nombre = "Pedro";
estudiante.edad = 20;
estudiante.casado = false;
estudiante.estatura = 1.80;
console.log(estudiante);

//objetos basados en funciones

function Vehiculo(marca, modelo, anio){
  this.marca = marca;
  this.modelo = modelo;
  this.anio = anio;
}

const carro = new Vehiculo("Toyota", "Corolla", 2020);
console.log(carro)

//objetos basados en clases

class Empleado{
  constructor(nombre,apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }

  serExplotado(){
    console.log(`${this.nombre} siendo explotado...`);
  }

  resignarse(){
    console.log(` ${this.nombre} resignandose...`);
  }
}

const empleado = new Empleado("Juan", "Perez", 30);
console.log(empleado.resignarse());
console.log(empleado.serExplotado())


import Animal from "./modulos/Animal.js";

const gato = new Animal("michi", 5);
console.log(gato);
