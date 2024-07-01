
// Basada en Promesas (fetch por defecto es una promesa): fetch devuelve una promesa que se resuelve con la respuesta a la solicitud. 
// Esto permite un manejo de errores más limpio y encadenamiento de múltiples operaciones asincrónicas.
// Más Flexible: Soporta una amplia gama de opciones configurables, como métodos de solicitud, encabezados,
// cuerpos de solicitud, etc.
// Manejo de CORS: Tiene soporte incorporado para Cross-Origin Resource Sharing (CORS), lo que facilita
//  el trabajo con solicitudes entre dominios.

// Sintaxis Básica

// fetch(url, options)
//     .then(response => {
//         // Manejar la respuesta
//     })
//     .catch(error => {
//         // Manejar el error
//     });


import fetch from "node-fetch" //se debe instalar node y ejecutar en la teminal "npm i node-fetch"

const API ='https://api.escuelajs.co/api/v1'

function fetchData(urlApi){
    return fetch(urlApi)
}

fetch(`${API}/products`)
    .then(response=>response.json())
    .then(products=>{//se pueden usar varios thens, para traer cada cosa que necesite
        console.log(products)
    })
    .catch(error=>console.log(error))