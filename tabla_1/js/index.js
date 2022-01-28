//CONSTANTES
const PI = 3.1415926;

//FUNCIONES

//suma
function suma(numero1, numero2) {
  let resultado = numero1 + numero2;
  return resultado;
}

//resta
function resta(numero1, numero2) {
  let resultado = numero1 - numero2;
  return resultado;
}

//multiplicacion
function multiplicacion(numero1, numero2) {
  let resultado = numero1 * numero2;
  return resultado;
}

//division
function division(numero1, numero2) {
  let resultado = numero1 / numero2;
  return resultado;
}

//modulo
function modulo(numero1, numero2) {
  let resultado = numero1 % numero2;
  return resultado;
}

//raiz
function raiz(numero) {
  let resultado = Math.sqrt(numero);
  return resultado;
}

function area_circulo(radio) {
  // Algoritmo
  // Entrada : radio de un circulo (radio)
  // Salida : area del circulo (resultado)
  // Inicializar variables
  let resultado = 0;
  // Calculo
  resultado = PI * (radio * radio);
  // Devolver el valor
  return resultado;
}

//area del cilindro
function area_cilindro(altura, radio) {
  // Inicializar variables
  let area = 0;
  let a_circulo = 0;
  let a_lateral = 0;
  // Calculo
  a_circulo = area_circulo(radio);
  a_lateral = 2 * PI * radio * altura;
  // AREA =  Area_Lateral + 2 * (Area_circulo)
  area = a_lateral + 2 * a_circulo;
  return area;
}

//areal del trapecio
function area_trapecio(base_menor, base_mayor, altura) {
  let resultado = 0.5 * altura * (base_mayor + base_menor);
  return resultado;
}

//areal del triangulo con lados
function area_triangulo(lado1, lado2, lado3) {
  let semiperimetro = 0.5 * (lado1 + lado2 + lado3);
  let resultado = Math.sqrt(
    Math.abs(
      semiperimetro *
        ((semiperimetro - lado1) *
          (semiperimetro - lado2) *
          (semiperimetro - lado3))
    )
  );
  return resultado;
}

//main
console.log("Mi calculadora integrada correctamente");
