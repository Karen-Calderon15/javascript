function agregar(){
    const table = document.querySelector("#tabla");
    const row = table.insertRow(0);
    table.appendChild(row);
    row.innerHTML = "<td> New Cell1</td><td>New Cell2</td>";
    }
    document.querySelector("#btn").onclick = function(){
    agregar();
    }

    console.log(tabla);







