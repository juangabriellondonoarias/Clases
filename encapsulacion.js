class persona{
    #nombre;

    constructor(nombre){
        this.#nombre = nombre;
    }

    getNombre(){
        return this.#nombre;
    }

    setNombre(nombre){
        if (nombre.length > 0) {
            this.#nombre = nombre;
        } else {
            console.log("El nombre no puede estar vacio.");
        }
    }
}

const persona1 = new persona("Juan");
console.log(persona1.getNombre());

persona1.setNombre("carlos");
console.log(persona1.getNombre());

// console.log(persona1.#nombre);


