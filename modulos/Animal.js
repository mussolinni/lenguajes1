class Animal{
  constructor(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
  }

  toString(){
    return `Nombre: ${this.nombre} Edad: ${this.edad}`;
  }
}

export default Animal