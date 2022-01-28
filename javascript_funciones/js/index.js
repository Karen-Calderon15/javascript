function tabla(tm){
    for (i = 0; i<=10; i++)
    document.write(tm + "*" + i + "=" + tm*i + "<br>");
}

let tm =prompt("Ingresa el numero de la tabla que desea visualizar:")
tabla(tm);

