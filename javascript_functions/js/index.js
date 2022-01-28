// CAJA DE HERRAMIENTAS (Acciones) => FUNCIONES() -> Verbos en infinitivo
function verEstadoMadera(estado){
console.log("El estado de la madera :", estado );
}
function martillar(mesa){
console.log("Estoy martillando una ",mesa, "par probar su resistencia");
mesa_final = "Mesa resistente (Prueba Existosa)";
return mesa_final;
}
function atornillar(piezas_orificios,n_tornillos){
console.log("Estoy atornillando unas "+ piezas_orificios ,"con "+n_tornillos+ " Tornillos")
madera = "Mesa ensamblada";
return madera;
}
function serruchar(madera){
console.log("Estoy serruchando un ", madera);
let piezas = "Piezas de madera de " + madera; // Roble
return piezas;
}
function taladrar(piezas,broca){
console.log("Estoy taladrando unas ", piezas, "con una broca de :", broca);
piezas_orificios = piezas + " con orificios de " + broca ; // Pieza de madera con orificios
return piezas_orificios;
}
// =================================
// PROGRAMA PRINCIPAL

// Voy a construir una mesa

// Paso 0: Comprar una madera
let madera = "Roble"

verEstadoMadera(madera);
// Paso 1: Cortar la madera
madera = sierra(madera); // La madera está cortada

verEstadoMadera(madera);

// Paso 2: Hacer huecos
let broca = "3/8";
madera = taladro(madera,broca); // piezas con orificios

verEstadoMadera(madera);

let tornillos_38 = 20;
// Paso 3: Unir las piezas
madera = atornillador(madera,tornillos_38); // Mesa ensamblada

verEstadoMadera(madera);

// Paso 5: probar resistencia de la mesa
madera = martillo(madera); // Mesa Funcional