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

    eliminarVideojuego(){
        this.#videojuegos.splice(1 , 1);
    }

    obtenerTodosVideojuegos(){
        return this.#videojuegos;
    }

    actualizarVideojuego(){
        this.#videojuegos.splice()
    }
}

let inventario = new Inventario();
inventario.ingresarVideojuego({nombre: "Minecraft", precio: 100000, categoria: "Sandbox"});
inventario.ingresarVideojuego({nombre: "Mario", precio: 200000, categoria: "Sandbox"});
inventario.ingresarVideojuego({nombre: "Free Fire", precio: 300000, categoria: "Garena"});
console.log(inventario.obtenerTodosVideojuegos());

console.log("--------------------------");

// inventario.eliminarVideojuego();
// console.log(inventario.obtenerTodosVideojuegos());

inventario.actualizarVideojuego();
console.log(inventario.obtenerTodosVideojuegos());