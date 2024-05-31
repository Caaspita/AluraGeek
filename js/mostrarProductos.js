import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]");

function crearCard(titulo, precio, imagen){
    const producto = document.createElement("li");
    producto.className="card";
    producto.innerHTML=`
        <li class="card">
            <img src="${imagen}" alt="Imagen de producto">
            <div class="card_container-info">
                <p>${titulo}</p>
                <div class="card_container-value">
                    <p>${precio}</p>
                    <img src="./img/delete.svg" alt="Boton Delete">
                </div>
            </div>
        </li> `;

    return producto;
}

async function listarProductos(){
    const listaAPI = await conexionAPI.listarProductos();

    listaAPI.forEach(card => lista.appendChild(crearCard(card.titulo,card.precio,card.imagen)));
}

listarProductos();