/* Crear una clase Persona con un atributo nombre y un método caminar() que imprima un mensaje con el nombre.*/

class persona{
    constructor(nombre){
        this.nombre = nombre;
    }

    caminar(){
        return `${this.nombre} esta caminando por el parque.`
    }
}

const persona1 = new persona("Juan");
console.log(persona1.caminar());
