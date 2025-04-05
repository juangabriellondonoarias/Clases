class persona{
    constructor(nombre){
        this.nombre = nombre;
    }

    caminar(){
        return `${this.nombre} esta caminando`
    }
}

const persona1 = new persona("Juan");
console.log(persona1.caminar());
