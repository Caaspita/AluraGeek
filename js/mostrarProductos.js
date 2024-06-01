import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]");

export default function crearCard(titulo, precio, imagen, id){
    const producto = document.createElement("li");
    producto.className="card";
    producto.innerHTML=`
        <li class="card">
            <img src="${imagen}" alt="Imagen de producto">
            <div class="card_container-info">
                <p>${titulo}</p>
                <div class="card_container-value">
                    <p>${precio}</p>
                    <img class="btn-borrar" src="./img/delete.svg" alt="Boton Delete" data-id="${id}">
                </div>
            </div>
        </li> `;

    const borrarProducto = producto.querySelector("[data-id]");

    borrarProducto.addEventListener("click", () => {
        conexionAPI.eliminarProducto(id);
        producto.remove();
    })
    return producto;
}

async function listarProductos(){
    const listaAPI = await conexionAPI.listarProductos();

    listaAPI.forEach(card => lista.appendChild(crearCard(card.titulo,card.precio,card.imagen, card.id)));
}

listarProductos();