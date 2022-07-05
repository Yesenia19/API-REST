function getClientes() {
    var request = new XMLHttpRequest();
    //Accede a la session de la pagina
    username= sessionStorage.getItem("username");
    password= sessionStorage.getItem("password");
   
    request.open('GET', 'https://8000-yesenia19-apirest-tfnscafx6c7.ws-us51.gitpod.io/clientes/');
    request.setRequestHeader("Accept", "application/json");
    request.setRequestHeader("Authorization", "Basic " + btoa(username + ":" + password))
    request.setRequestHeader("Content-Type", "application/json");
    const  tabla   = document.getElementById("tabla_Clientes");
   
    var tblBody = document.createElement("tbody");
    var tblHead = document.createElement("thead");
    
    tblHead.innerHTML = `
        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
        </tr>`;
   
    request.onload = () => {
            // Almacena la respuesta en una variable, si es 202 es que se obtuvo correctamente
            const response = request.responseText;
            const json = JSON.parse(response);
            
            if (request.status === 401 || request.status === 403) {
                alert(json.detail);
            }
            else if (request.status == 202){
                const response = request.responseText;
                const json = JSON.parse(response);
                for (let i = 0; i < json.length; i++) {
                    var tr = document.createElement('tr');
                    var id_cliente = document.createElement('td');
                    var nombre = document.createElement('td');
                    var email = document.createElement('td');
    
                    id_cliente.innerHTML = json[i].id_cliente;
                    nombre.innerHTML = json[i].nombre;
                    email.innerHTML = json[i].email;
    
                    tr.appendChild(id_cliente);
                    tr.appendChild(nombre);
                    tr.appendChild(email);
                    
                    tblBody.appendChild(tr);
                }
                tabla.appendChild(tblHead);
                tabla.appendChild(tblBody);
        }    
    };
    request.send();
}