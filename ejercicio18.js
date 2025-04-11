/* Crear una clase Persona con un atributo privado edad
y una subclases Empleado que acceda al método público 
setEdad() de Persona para modificar edad*/

class Persona{
    #edad;
    constructor(edad){
        this.#edad = edad;
    }

    getEdad(){
        return this.#edad;
    }
}

class Empleado extends Persona{
    constructor(edad){
        super(edad);
    }

    setEdad(){
        console.log(`La edad modificada es de: ${this.getEdad()} años`);   
    }
}

const persona1 = new Persona(20);
console.log(`La edad es de: ${persona1.getEdad()} años`);

const Emp1 = new Empleado(25);
Emp1.setEdad();


