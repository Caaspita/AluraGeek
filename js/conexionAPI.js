
async function listarProductos(){
    const conexion = await fetch("https://rest-api-fake.vercel.app/productos")
    const conexionConvertida = await conexion.json()
    return conexionConvertida
}

async function enviarProducto(titulo, precio, imagen){
    const conexion = await fetch("https://rest-api-fake.vercel.app/productos", {
        method: "POST",
        headers: {"Content-type":"application/json"},
        body: JSON.stringify({
            titulo:titulo,
            precio:`${precio} $`,
            imagen:imagen
        })
    })
    const conexionConvertida = await conexion.json();
    return conexionConvertida;
}
async function eliminarProducto(id){
    return fetch(`https://rest-api-fake.vercel.app/productos/${id}`,{
        method: "DELETE"
    });
}

export const conexionAPI={
    listarProductos, enviarProducto, eliminarProducto
}
