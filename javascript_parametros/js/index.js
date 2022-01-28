// function tabla_multiplicar(tabla, hasta = 10){
//     for (i = 0; i<= hasta; i++)
//     console.log(tabla, "x", i, "=", tabla * i);
// }

// //Ejecución
// tabla_multiplicar(2);//Esta tabla llegará hasta el numero 10
// tabla_multiplicar(2,15); //Esta tabla llegará hasta el numero 15




// FUNCIONES                    5     10
function generarNumeroAleatorio(min, max) {
    // Entrada: numero maximo
    // Salida : numero aleatorio entre 0 - numero maximo
    //Inicializacion de variables
    let suerte = 0; // 
    let random = 0;
                                   // 3 y el 6
    suerte = Math.random() * (max-min); // (0.01 - 0.99) * 3 = 0.01 - 2.99 
    random = min+ Math.round(suerte);  // round(5.59)+3 = 6+3 = 9 , round(0.06)+3 = 0+3 = 3
  
    return random;
  }
  
  function avanzar() {
    let metros = 0;
    metros = generarNumeroAleatorio(10, 20);
    return metros;
  }
  
  // MAIN
  
  let auto = 0; // Metros
  const META = 100; 
  
  
  auto = avanzar(); // 12metros
  
  auto = auto + avanzar() 
  
  console.log("El auto avanzo ", auto, "metros");