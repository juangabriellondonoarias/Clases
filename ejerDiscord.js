class persona{
    #nombre;
    constructor(nombre){
        this.#nombre = nombre;
    }

    caminar(){
        console.log(`${this.#nombre} esta caminando.`);
    }
}

class empleado extends persona{
    #salario;
    constructor(nombre, salario){
        super(nombre);
        this.#salario = salario;

    }

    
    trabajar(){
        return `${this.nombre} esta trabajando`
    }

}

let salario1 = new persona("Juan");
salario1.caminar();

let empleado1 = new empleado();
empleado1.trabajar();


