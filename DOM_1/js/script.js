  
const lista = document.querySelector("ul"); // 1 elemento
const items = document.querySelectorAll("ul > li"); // todos los elementos
//const items = document.getElementsByTagName("li");

console.log(items[0].isConnected);

console.log("Eliminando el item 1");
items[0].remove();
console.log(items[0].isConnected);

//lista.appendChild(items[0]); // insertarlo al final
lista.insertAdjacentElement("afterbegin", items[0]); // inserta al inicio

  
  