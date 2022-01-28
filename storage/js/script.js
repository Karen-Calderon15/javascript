let time = sessionStorage.getItem("time");

function login() {
  // check browser support
  if (typeof Storage !== undefined) {
    console.log("Almacenamiento soportado");
    localStorage.setItem("username", "Orville46");
    contarTiempo();
  } else {
    console.log("Upps!");
  }
}

function logout() {
  localStorage.removeItem("username");
  time = 0;
  sessionStorage.removeItem("time");
}

function contarTiempo() {
  if (localStorage.getItem("username")) {
    time++;
    sessionStorage.setItem("time", time);
  }
}

function mostrarInfo() {
  const user = document.getElementById("nombre_usuario");
  user.innerHTML = ` Usuario conectado: ${localStorage.getItem(
    "username"
  )} <br>  Tiempo de conexion : ${time} segundos`;
}

setInterval(() => {
  mostrarInfo();
  contarTiempo();
}, 1000);