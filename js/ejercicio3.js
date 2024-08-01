// Escribe una clase que permita crear distintos objetos “rectángulos”, 
// con las propiedades de alto y ancho, 
// mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

class Rectangulo {
    #alto;
    #ancho; 
    constructor(alto, ancho){
        this.#alto = alto;
        this.#ancho = ancho; 
    }

    get alto() {
        return this.#alto;
    }

    get ancho() {
        return this.#ancho;
    }

    set alto(valor) {
        if (valor > 0) {
            this.#alto = valor;
        }
    
      
    }
   set ancho(valor){
    if (valor > 0){
        this.#ancho = valor; 
    }
}

//metodos perimetro y area. 
area() {
    return this.#alto * this.#ancho;
}

perimetro (){
    return 2 * (this.#ancho + this.#alto);
}
}

console.log(Rectangulo);

const rectangulo1 = new Rectangulo(4,5);
console.log(rectangulo1);

document.write(`<p>Valor del ancho del rectangulo ${rectangulo1.ancho} </p>`);
document.write(`<p>Valor del alto del rectangulo ${rectangulo1.alto} </p>`);

document.write(`<p>Area del rectangulo1:  ${rectangulo1.area()} </p>`);
document.write(`<p>Perimetro del rectangulo1:  ${rectangulo1.perimetro()} </p><br>` );

const rectangulo2 = new Rectangulo(10,15);
console.log(rectangulo2);

document.write(`<p>Valor del ancho del rectangulo ${rectangulo2.ancho} </p>`);
document.write(`<p>Valor del alto del rectangulo ${rectangulo2.alto} </p>`);

document.write(`<p>Area del rectangulo2:  ${rectangulo2.area()} </p>`);
document.write(`<p>Perimetro del rectangulo2:  ${rectangulo2.perimetro()} </p>`);




