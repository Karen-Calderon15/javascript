const months = ["Octubre","Marzo","Julio","Febrero","Enero"];

months.sort();
months.reverse();

console.log(months);

// creando un a funcion 


const array = [1,8,2,32,9,7,4];

const fc = function(a,b){
    if(a > b) return 1; // el primer elemento es mayor
    if(a < b) return -1; // el primer elemento es menor
    return 0; // a y b son iguales
};

const fc2 = function(a,b){
    return (a - b)
};

array.sort(fc);

console.log(array);


/* OBJETOS */

const objeto = new Object(); // Manera tradicional

const objeto2 = { }; // Manera resumida (Literal)

const player = {
    name: "Manz",
    lives: 99,
    strength: 10, 
}

console.log(player.name); // Manz
console.log(player.lives); // 99
console.log(player["strength"]); //10


let computadora = {
    color: "negro",
    marca:"dell",
    año: 2017,
    nuevo: true,
    teclado: true,
   
    funciona () {
        return "Estoy funcionando"
    },
    acelerar() {
        return "Estoy Acelerando..."
    },
    frenar: () => {
        return "Estoy Frenando..."
    }


}
 console.log(coche["año"])
 console.log(coche.arrancar) // Me devuelve todo el codigo de la función arrancar
 console.log(coche.arrancar()) // Ejecuta la función arrancar
 console.log(coche.frenar()) // Ejecuta la función frenar

c