function highlightInput(elm) {
    console.log(`dando foco ${elm.id}`);
    elm.style.background = "lightgreen";
  }
    
    function clearInput(elm) {
      console.log(`perdio foco ${elm.id}`);
      elm.style.background = "white";
    }
    
    function showOption(event, elm) {
    // Muestra el valor seleccionado desde el evento
    console.log(event.target.value);
    // Muestra el valor seleccionado desde el elemento
    console.log(elm.value);
    //Obtener el indice de la opción seleccionada
    console.log(event.target.selectedIndex);
    console.log(elm.selectedIndex);
  }
    
function validateForm(event, elem) {
event.preventDefault();
console.log(elem);
console.log(event);
// Validar los campos del formulario
// Envia el formulario
}