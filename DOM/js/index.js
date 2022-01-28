// /* Busqueda por ID (Metodo tradicional Vs Moderno)*/
// const page = document.getElementById("header");
// const page2 = document.querySelector("#header")
// console.log(page)
// console.log(page2)

// /* Busqueda por Clase (Metodo tradicional Vs Moderno)*/

// const list = document.getElementsByClassName("box");
// const first_item = document.querySelector(".box");
// const list2 = document.querySelectorAll(".box")
// console.log(list);
// console.log(first_item);
// console.log(list2);

// /* Busqueda por selector personalizado (2do Div -> #content>)*/
// const content_div = document.querySelector(".box:nth-child(2)")
// console.log(content_div);

// const content_div = document.querySelector("#header + div")
// console.log(content_div);

// /* Busqueda por nombre (Metodo tradicional Vs Moderno)*/

// const opts = document.getElementsByName("genero");
// console.log(opts);

// const opts2 = document.querySelectorAll("[name='genero']");
// console.log(opts2) ;

// /* Busqueda por etiqueta (Metodo tradicional Vs Moderno)*/
// const divs = document.getElementsByTagName("div");
// const divs2 = document.querySelectorAll("div");
// console.log(divs)
// console.log(divs2)



/*CREANDO ELEMENTOS*/


const divisor = document.createElement("div");
const comentario = document.createComment("Comentario");
const texto = document.createTextNode("Hola a todos");

//Modificar nuestro elemento creado
divisor.id = "header"; // id="header"
divisor.className = "box"; // class="box"
divisor.style = "background:lightgreen;";

console.log(divisor.hasAttributes()); // TRUE -> Tiene elementos
console.log(divisor.hasAttribute("name")); // FALSE -> No tiene attr name
console.log(divisor.getAttributeNames()); // ['id', 'class', 'style']
console.log(divisor.getAttribute("style")); // Valor del atributo style =>(background: lightgreen;)
divisor.removeAttribute("id"); // Eliminamos el atributo "id"
divisor.setAttribute("class", "caja"); // camabiamos el valor box -> caja

const attr_class = divisor.getAttributeNode("class"); // class="caja"
console.log(attr_class);
const class_extr = divisor.removeAttributeNode(attr_class); // attributo class extraido
console.log(class_extr);


const attr_style = divisor.getAttributeNode("style"); // obtenemos el atributo como Nodo
console.log(attr_style); // Mostramos el Atributo Style (Nodo)
attr_style.value = "color:red;"; // Modificamos el valor del attr
const style_mod = divisor.setAttributeNode(attr_style); // reemplazamos el attr
console.log(style_mod); // atributo style actualizado ->  <div style="color:red;"></div>
console.log(divisor);


/*  MODIFICANDO EL HTML de un ELEMENTO*/


// const divisor = document.getElementById("header");
const divisor = document.querySelector("#header");

console.log(divisor.nodeName); // DIV (Only read)

divisor.textContent = "Sub titulo <strong>01</strong>"; // No interpreta como html
console.log(divisor.textContent); // "Titulo principal"

divisor.innerHTML = "Sub titulo <strong>01</strong>"; // Modifica el html interno
console.log(divisor.innerHTML); // <h1>Titulo principal</h1>

divisor.outerHTML = "<h1> Header </h1>"; // Modifica todo el html incluyendo al contenedor
console.log(divisor.outerHTML); // <div id="header"> <h1>Titu...</div>

/* CREANDO UN ELEMENTO e INSERTANDOLO EN EL BODY*/
  
const img = document.createElement("img");

img.src = "https://picsum.photos/200/300";
img.width = 200;
img.height = 300;
document.body.appendChild(img);


// CREANDO UN NODO <div> (Contenedor)
const div = document.createElement("div");
div.id = "div_insertado";
div.textContent = "Texto insertado desde JS";
// CREANDO UN NODO <h1>
const h1 = document.createElement("h1");
h1.id = "title";
h1.textContent = "Titulo H1";
// Inserta el h1 (hijo) dentro del div (contenedor)

const container = document.querySelector("#container"); // busqueda
container.appendChild(div);
// Inserta un elemento en una posición
// (antes del elemento -> beforebegin)
// (antes del texto -> afterbegin)
// (despues del texto -> beforeend)
// (despues del elemento -> beforeend)
div.insertAdjacentElement("beforebegin", h1);

console.log(div);

