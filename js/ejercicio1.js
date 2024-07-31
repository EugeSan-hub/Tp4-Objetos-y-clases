// Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y 
// si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

const auto = {
marca: "Honda",
modelo: ['HRV EXL', 'HRV LX'],
color:  ['blanco', 'rojo', 'gris plata', 'negro'],
anio: 2021,
motor: 1.5,

//metodos o funciones
encendido: function (){
    console.log(this)
    document.write (`<p>🚗▶️Auto encendido</p>`);
  },

  apagado: function (){
    console.log(this)
    document.write (`<p>🚗▶️Auto apagado </p>`);
  }
};

console.log(auto);

auto.encendido();
auto.apagado();
