class Persona{
    #nombre;

    constructor(nombre, edad){
        this.#nombre = nombre;
        this.edad = edad;
    }

    getnombre(){
        return this.#nombre;
    }

    caminar(){
        return `${this.getnombre()} está caminando.`
    }

    getedad(){
        return `La edad actual de ${this.getnombre()} es de: ${this.edad}`
    }
}

class Empleado extends Persona{
    #salario;
    constructor(nombre, salario){
        super(nombre);
        this.#salario = salario;
    }

    trabajar(){
        return `${this.getnombre()} esta trabajando`
    }

    getSalario(){
        return `El salario actual es de: ${this.#salario}`;
    }

    setSalario(salario){
        if (salario > 0) {
            return `El salario actualemnte modificado es de: ${this.#salario = salario}`;
        }   else{
            console.log("El numero tiene que ser mayor a 0");  
        }
    }

    setedad(edadPersona){
        return `modificado la edad es de: ${this.edad = edadPersona}`;
    }
}

const persona1 = new Persona("Juan",20);
console.log(persona1.caminar());

const Empleado1= new Empleado("Juan", 1000);
console.log(Empleado1.trabajar());

console.log(Empleado1.getSalario());
console.log(Empleado1.setSalario(2000));

console.log(persona1.getedad());
console.log(Empleado1.setedad(21));

console.log("----------------------------------------------");


class CuentaBancaria{
    #saldo;
    constructor(saldo){
        this.#saldo = saldo;
    }

    #actualizarSaldo(nuevoSaldo){
        this.#saldo = nuevoSaldo;
        return this.#saldo;
    }

    depositar(monto){
        if (monto > 0) {
            return `Saldo actualmente con el deposito ${this.#actualizarSaldo(this.#saldo + monto)}`
        } else{
            console.log("El deposito tiene que se mayor a 0");
            
        }
    }

    retirar(monto){
        if (monto > 0 && monto <= this.#saldo) {
            return `Saldo actualmente ya retirado un monto ${this.#actualizarSaldo(this.#saldo - monto)}`
        }
    }

    getSaldo(){
        return `Saldo actualmente ${this.#saldo}`
    }
}

const salario1 = new CuentaBancaria(500);
console.log(salario1.getSaldo());

console.log(salario1.depositar(200));
console.log(salario1.retirar(300));


console.log("---------------------------------------------");


class Vehiculo{
    constructor(marca,modelo){
        this.marca = marca;
        this.modelo = modelo;
    }

    #encerMotor(){
        console.log("Encender motor");
    }

    arrancar(){
        this.#encerMotor();
        console.log(`Arrancar motor.`);
    }

    mover(){
        console.log("Mover vehiculo");
    }

    getvehiculo(){
        return `La marca del vehiculo es ${this.marca} y el modelo es ${this.modelo}.`
    }
}

class Coche extends Vehiculo{
    constructor(marca, modelo){
        super(marca, modelo);
    }

    mover(){
        console.log("Mover coche");
    }

    getcoche(){
        return `La marca del Coche es ${this.marca} y el modelo es ${this.modelo}.`
    }
}

class bicicleta extends Vehiculo{
    constructor(marca,modelo){
        super(marca, modelo);
    }

    mover(){
        console.log("Mover bicicleta");
    }

    getbici(){
        return `La marca de la bicicleta es ${this.marca} y el modelo es ${this.modelo}.`
    }
}



const Vehiculo1 = new Vehiculo("toyota", "corolla");
Vehiculo1.arrancar();
console.log(Vehiculo1.getvehiculo());


const coche1 = new Coche("Ford", "Ford Focus");
coche1.mover();
console.log(coche1.getcoche());


const bicicleta1 = new bicicleta("Trek", "Trek Verve 3");
bicicleta1.mover();
console.log(bicicleta1.getbici());

console.log("------------------------------------------------");


class EmpresaTransporte {
    static totalEmpleados = 0;
    static empleados = [];

    static registrarEmpleados() {
        EmpresaTransporte.totalEmpleados++;
        EmpresaTransporte.empleados.push(empleado1);
        console.log(`Empleado registrado. Total de empleados: ${EmpresaTransporte.totalEmpleados}`); 
    }

    static asignarVehiculo(empleado, vehiculo) {
        empleado.vehiculoAsignado = vehiculo;
        console.log(`El empleado ${empleado.nombre} ha sido asignado al vehículo ${vehiculo.modelo}`);
    }
}

class Empleado3{
    constructor(nombre) {
        this.nombre = nombre;
    }
} 

class Vehiculo2 {
    constructor(modelo) {
        this.modelo = modelo;
    }
}

const empleado1 = new Empleado3("Juan Pérez");
const empleado2 = new Empleado3("Ana Gómez");

const vehiculoF = new Vehiculo2("Camión 1000");
const vehiculoA = new Vehiculo2("Furgoneta 3000");

EmpresaTransporte.registrarEmpleados(empleado1);  
EmpresaTransporte.registrarEmpleados(empleado2); 

EmpresaTransporte.asignarVehiculo(empleado1, vehiculoF);
EmpresaTransporte.asignarVehiculo(empleado2, vehiculoA);
