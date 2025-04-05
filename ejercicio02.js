/* Crear una clase Contador con un atributo estático cuenta
y un método estático incrementar() que aumente el valor de cuenta*/

class contador{

    static cuenta = 0;

    static incrementar(){
    contador.cuenta++;
    }
}

contador.incrementar();
contador.incrementar();
contador.incrementar();
contador.incrementar();

console.log(`El valor de la cuenta es de ${contador.cuenta}`);
