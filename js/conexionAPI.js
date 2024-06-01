

async function listarProductos(){
    const conexion = await fetch("http://localhost:3001/productos");

    const conexionConvertida = conexion.json()

    return conexionConvertida
}

async function enviarProducto(titulo, precio, imagen){
    const conexion = await fetch("http://localhost:3001/productos", {
        method: "POST",
        headers: {"Content-type":"application/json"},
        body: JSON.stringify({
            titulo:titulo,
            precio:`${precio} $`,
            imagen:imagen
        })
    })
    const conexionConvertida = conexion.json();
    return conexionConvertida;
}
async function eliminarProducto(id){
    return fetch(`http://localhost:3001/productos/${id}`,{
        method: "DELETE"

    });
}


export const conexionAPI={
    listarProductos, enviarProducto, eliminarProducto
}
//listarProductos();