import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");
const borrar = document.querySelector(".btn-limpiar")

async function crearProducto(evento){

    const titulo = document.querySelector("[data-titulo]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;

    await conexionAPI.enviarProducto(titulo, precio, imagen);


}

formulario.addEventListener("submit",evento => crearProducto(evento));

function limpiarForm(){
    document.querySelector("[data-titulo]").value = "";
    document.querySelector("[data-precio]").value = "";
    document.querySelector("[data-imagen]").value = "";


}
borrar.addEventListener("click", e =>{
    e.preventDefault();
    limpiarForm();
})