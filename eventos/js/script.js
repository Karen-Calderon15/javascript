function saludar() {
    const name = prompt("Ingresa tu nombre");
    alert("Hello World!" + name);
  }

  const button = document.querySelector(
    "#btn_grettings"
  );
  console.log(button);
  /* MANERA TRADICIONAL -> ASOCIANDO UN F(x) AL ATRIBUTO onclick*/
  // button.onclick = saludar;

  /* WAY #1 Utilizando una función anónima como param  */

  // button.addEventListener("click", function () {
  //   const name = prompt("Ingresa tu nombre");
  //   alert("Hello World!" + name);
  // });

  /* WAY #2 enviar una funcion pre-definida como param  */

  // function saludar() {
  //     // TRADICIONAL
  //     const name = prompt("Ingresa tu nombre");
  //     alert("Hello World!" + name);
  //   }
  // button.addEventListener("click", saludar);

  /* WAY #3 Utilizando un Arrow Function*/

  const saludar_arrow = () => {
    const name = prompt("Ingresa tu nombre");
    alert("Hello World!" + name);
  };

  button.addEventListener("click", saludar_arrow); // CALLBACK

  /* ELIMINANDO EVENTOS DEL EVENT_LISTENER*/
  const saludar = () => {
    alert("Hello World!");
  };

  const salut = () => {
    alert("Salut Monde!");
  };

  // Añadiendo un call to action -> EventListener
  button.addEventListener("click", saludar); // CALLBACK
  button.addEventListener("click", () =>
    setTimeout(salut, 3000)
  );

  // Eliminar un call to action saludar -> EventListener
  button.removeEventListener("click", saludar);