// Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
// Una propiedad titular con el valor "Alex".
// Una propiedad saldo, teniendo como valor inicial 0.
// Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
// Un método extraer() que permita retirar la cantidad pasada como parámetro.
// Un método informar() que retorne la información del estado de la cuenta. 

// Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y
//  volver a mostrar la descripción del estado de la cuenta.

const cuenta = {
    titular: "Alex",
    saldo: 0,

    ingresar: function (cantidad) {
        this.saldo += cantidad;
        console.log(`Nuevo saldo: ${this.saldo}`);
        document.write(`<p>💵 Se han ingresado $${cantidad}. Nuevo saldo: $${this.saldo}</p>`);
    },

    extraer: function (cantidad) {
        if (cantidad > this.saldo) {
            console.log("Saldo insuficiente");
            document.write(`<p>❌ Saldo insuficiente para extraer $${cantidad}. Saldo actual: $${this.saldo}</p>`);
        } else {
            this.saldo -= cantidad;
            console.log(`Nuevo saldo: ${this.saldo}`);
            document.write(`<p>💵 Se han extraído $${cantidad}. Nuevo saldo: $${this.saldo}</p>`);
        }
    },

    informar: function () {
        const info = `Titular: ${this.titular}, Saldo: $${this.saldo}`;
        console.log(info);
        document.write(`<p>💼 ${info}</p>`);
        return info;
    }
};

console.log(cuenta);

console.log("Descripción inicial de la cuenta:");
cuenta.informar();

console.log("Ingresando $200 a la cuenta:");
cuenta.ingresar(200);

console.log("Extrayendo $100 de la cuenta:");
cuenta.extraer(100);

console.log("Intentando extraer $150 de la cuenta:");
cuenta.extraer(150);  

console.log("Descripción final de la cuenta:");
cuenta.informar();