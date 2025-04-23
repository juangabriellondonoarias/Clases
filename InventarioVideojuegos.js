/* class Inventario: IngresarVideojuego, eliminarVideojuegos, actualizarVideojuego.

[{nombre:"Mario", precio:70000, categoria:"plataforma"}]

class Admin: propiedades nombre, contraseña, email.
	métodos: agregarVideojuego --> llama al método ingresarVideojuego de inventario.*/


class Inventario{
    #videojuegos;
    constructor(){
        this.#videojuegos = [];
    }

    ingresarVideojuego(nuevoVideojuego){
        this.#videojuegos.push(nuevoVideojuego);
    }

        eliminarVideojuego(indice){
            if (indice >= 0 && indice < this.#videojuegos.length) {
                this.#videojuegos.splice(indice, 1);
            } else {
                console.log("Error indice invalido, introduzca un induce valido");
            }
        }

    obtenerTodosVideojuegos(){
        return this.#videojuegos;
    }


    actualizarVideojuego(indice, propiedad, nuevoValor) {
        if (indice >= 0 && indice < this.#videojuegos.length &&
                propiedad in this.#videojuegos[indice]
        ) {
                this.#videojuegos[indice][propiedad] = nuevoValor;
        } else {
                console.log("Error, indice o propiedad no válidos.");
        }
    }

    // buscarVideojuego(nombre){
    //     this.#videojuegos.filter(nombre);
    // }
}

class Admin {
    constructor(nombre, contraseña, email, inventario) {
        this.nombre = nombre;
        this.contraseña = contraseña;
        this.email = email;
        this.inventario = inventario;
    }
    administrador(){
        return `Administrador: ${this.nombre}, Contraseña: ${this.contraseña}, Email: ${this.email}`
    }

    agregarVideojuego(videojuego) {
        this.inventario.ingresarVideojuego(videojuego);
    }

    verVideojuegos() {
        console.log("Lista de todos los videojuegos:");
        console.table(this.inventario.obtenerTodosVideojuegos());
    }
}

let inventario = new Inventario();
inventario.ingresarVideojuego({nombre: "Minecraft", precio: 100000, categoria: "Sandbox"});
inventario.ingresarVideojuego({nombre: "Mario", precio: 200000, categoria: "plataforma"});
inventario.ingresarVideojuego({nombre: "Free Fire", precio: 300000, categoria: "Garena"});
console.table(inventario.obtenerTodosVideojuegos());

console.log("--------------------------");

console.log("Actualizaciones");
inventario.actualizarVideojuego(0,"nombre", "Grand Theft Auto");
inventario.actualizarVideojuego(0,"precio", 400000);
inventario.actualizarVideojuego(1,"categoria", "RTS");
console.table(inventario.obtenerTodosVideojuegos());

console.log("----------------------------");

console.log("Eliminaciones");
inventario.eliminarVideojuego(2);
console.table(inventario.obtenerTodosVideojuegos());

console.log("------------------");
console.log("Videojuegos Antes que el Administrador Cambie cosas");
console.table(inventario.obtenerTodosVideojuegos());


let admin = new Admin("Gabriel", "01264", "gabriel12_98@gmail.com", inventario);
console.log(admin.administrador());
admin.agregarVideojuego({ nombre: "Call of Duty: Warzone", precio: 500000, categoria: "Battle Royale" });
admin.agregarVideojuego({ nombre: "Roblox", precio: 150000, categoria: "Plataforma" });

console.log("Videojuegos despúes que el Administrador hizo todo lo que necesitaba");
admin.verVideojuegos();

console.log(inventario.buscarVideojuego("Mario"));

