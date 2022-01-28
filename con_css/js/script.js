const boton = document.querySelector("#boton");

boton.addEventListener("click", () => {
  /* # Way 01 -> asignar una clase directamente 
a través de las propiedades del element */

  // console.log(boton.className);
  // boton.className = " bg";
  // console.log(boton.className);

  /*  #Way 02 -> utilizando setAttribute */

  console.log(boton.getAttribute("class"));
  boton.setAttribute("class", "bg");
  console.log(boton.getAttribute("class"));
});