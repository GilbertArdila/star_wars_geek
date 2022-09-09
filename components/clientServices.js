//creamos los métodos para el http request
const url=' https://starwarsgeek.herokuapp.com/producto';

//POST Crear producto
const crearProducto=(foto,nombre,precio,descripcion,clase)=>{
      return fetch(url,{
          method:'POST',
          headers:{
              'Content-type':'application/json'
          },
          //convertimos los datos que recibimos por párametro en string y creamos el id automaticamente
          body:JSON.stringify({foto,nombre,precio,descripcion,clase,id:uuid.v4})
      })
}

//GET Mostrar productos
const mostrarProducto=async ()=>{
    const respuesta = await fetch(url);
    return await respuesta.json();
    

   
}
//Obtenemos los datos de los productos para mostrarlos para el PUT
const datosProducto=async (id)=>{
    const respuesta = await fetch(url+`/${id}`);
    return await respuesta.json();
}
//PUT
const actualizarProducto=async(foto,nombre,precio,descripcion,clase,id)=>{
    try{
       const respuesta= await fetch(url+`/${id}`,{
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body:JSON.stringify({foto,nombre,precio,descripcion,clase})
       });
       return respuesta
    }catch (error) {
        return console.log(error);
    }

}
//DELETE
const eliminarProducto=(id)=>{
    return fetch(url+`/${id}`,{
        method:"DELETE"
    })
}

export const clientServices={
    crearProducto,
    mostrarProducto,
    datosProducto,
    actualizarProducto,
    eliminarProducto
}

