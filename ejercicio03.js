/* Crear una clase CuentaBancaria que tenga un saldo
privado y métodos públicos para depositar y retirar dinero.*/

class cuentaBancaria{
    #saldo;

    constructor(saldo){
        this.#saldo = saldo;
    }

    depositar(monto){
        if (monto > 0) {
            this.#saldo = this.#saldo + monto;
        } else{
            console.log("Error el deposito tiene que ser mayor a 0");
            
        }
    }

    retirar(monto){
        if (monto > 0 && monto <= this.#saldo) { 
            this.#saldo = this.#saldo - monto
        } else {
            console.log(`Error saldo insufucinete, tienes : ${this.#saldo}`)
        }
       
    }

    getSaldo(){
        return this.#saldo;
    }
}

const cuentaBancaria1 = new cuentaBancaria(2000);
console.log(`saldo actual:${cuentaBancaria1.getSaldo()}`);

cuentaBancaria1.depositar(2000);
console.log(`el saldo ya depositado, la cantidad:${cuentaBancaria1.getSaldo()}`);

cuentaBancaria1.retirar(1000);
console.log(`el saldo ya retirado, la cantidad: ${cuentaBancaria1.getSaldo()}`);

