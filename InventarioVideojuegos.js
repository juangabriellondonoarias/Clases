/* class Inventario: IngresarVideojuego, eliminarVideojuegos, actualizarVideojuego.

[{nombre:"Mario", precio:70000, categoria:"plataforma"}]

class Admin: propiedades nombre, contraseña, email.
	métodos: agregarVideojuego --> llama al método ingresarVideojuego de inventario.*/

class Inventario{
    #videojuegos;
    constructor(){
        this.#videojuegos = []
    }

    ingresarVideojuego(nuevoVideojuego){
        this.#videojuegos.push(nuevoVideojuego);
    }

        eliminarVideojuego(nombre) {
            const index = this.#videojuegos.findIndex(vj => vj.nombre === nombre);
            if (index !== -1) {
                this.#videojuegos.splice(index, 1);
            }
        }

        actualizarVideojuego(nuevoVideojuego) {
            const index = this.#videojuegos.findIndex(vj => vj.nombre === nuevoVideojuego.nombre);
            if (index !== -1) {
                this.#videojuegos[index] = {
                    ...this.#videojuegos[index],
                    ...nuevoVideojuego
                };
            }
        }
        
    obtenerTodosVideojuegos(){
        return this.#videojuegos;
    }
    
}

let inventario = new Inventario();
inventario.ingresarVideojuego({nombre: "Minecraft", precio: 100000, categoria: "Sandbox"});
inventario.ingresarVideojuego({nombre: "Mario", precio: 20000, categoria: "plataforma"});

console.log("Lista videojuegos");
console.log(inventario.obtenerTodosVideojuegos());

inventario.actualizarVideojuego({nombre:"Mario", precio: 30000, categoria:"xbox" });
console.log("\nDespués de actualizar 'Mario':");
console.log(inventario.obtenerTodosVideojuegos());

inventario.eliminarVideojuego("");
console.log("\nDespués de eliminar 'Minecraft':");
console.log(inventario.obtenerTodosVideojuegos());