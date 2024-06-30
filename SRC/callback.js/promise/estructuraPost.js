import fetch from 'node-fetch';

const API = 'https://api.escuelajs.co/api/v1';

// La siguiente función configura la petición

function postData(urlApi, data) {
    
    return fetch(urlApi, {
        method: 'POST', // Especifica el método HTTP como 'POST'(NOTA 1)
        mode: 'cors', // Modo de la solicitud (cors, no-cors, same-origin)(NOTA 2)
        credentials: 'same-origin', // Control de credenciales (omit, same-origin, include)(NOTA 3)
        headers: {
            'content-Type': 'application/json' //Indica en headers el tipo de archivo
        },
        body: JSON.stringify(data) // Convierte el objeto JavaScript a JSON
    });
}

// Según la API, la siguiente es la estructura de creación de un nuevo producto (se guarda en data)
const data = {
    "title": "212",
    "price": 1000,
    "description": "It's only any product",
    "categoryId": 1, // Se espera que categoryId sea un número, no una cadena de texto 'test'
    "images": ["https://placeimg.com/640/480/any"]
};

// Se usa la siguiente promesa postData para que al recibir la respuesta se transforme en un objeto JSON 

postData(`${API}/products`, data)
    .then(response => response.json()) // Convierte la respuesta a JSON
    .then(data => console.log(data)) // Anidamiento de then
    .catch(error => console.error(error)) //Entrega error
    .finally(() => console.log('Finally')); //  finally siempre se usa al final de la ejecucion


    // --------------------------------------------NOTAS--------------------------------------------------

// NOTA 1
// El mode hace referencia al origen de la página

// 1. cors (Cross-Origin Resource Sharing):
// Permite que la solicitud se realice a un dominio diferente del dominio del cual se originó la página.
// Es el valor predeterminado para solicitudes entre diferentes dominios.
// Es decir, si se consume la API en un sitio diferente del dominio donde se aloja nuestro proyecto.

// 2. no-cors:
// Permite que la solicitud se realice a un dominio diferente, pero solo puede acceder a un subconjunto
// limitado de encabezados y métodos HTTP.
// Es útil para realizar solicitudes que no requieren procesar la respuesta en el cliente.
// Ejemplo: Cuando necesitas hacer una solicitud para cargar una imagen o un recurso y no necesitas
// acceder a la respuesta.

// 3. same-origin:
// Restringe la solicitud para que solo se realice al mismo dominio del cual se originó la página.
// Esto es útil para prevenir ataques de tipo Cross-Site Request Forgery (CSRF).
// Ejemplo: Cuando haces una solicitud a un recurso en el mismo dominio.

// NOTA 2
// La propiedad credentials dentro de la configuración de la solicitud (options) se utiliza para controlar
// si las cookies y las credenciales HTTP se incluyen en las solicitudes entre diferentes
// orígenes (cross-origin requests).

// 1. omit:
// Las cookies y las credenciales HTTP no se envían junto con la solicitud, incluso si la solicitud se
// realiza al mismo origen.
// Es el valor predeterminado si no se especifica otra cosa.

// 2. same-origin:
// Las cookies y las credenciales HTTP solo se envían si la solicitud se realiza al mismo origen.
// Si la solicitud se realiza a un origen diferente, las credenciales no se enviarán.

// 3. include:
// Las cookies y las credenciales HTTP se envían en todas las solicitudes, independientemente del origen.
// Esto puede ser útil si tu aplicación necesita autenticarse con un servidor, incluso si está en un dominio
// diferente.

// NOTA 3
// Los Headers indican características especiales de las solicitudes,
// como por ejemplo tipo de dato, credenciales de autorización, usuarios y contraseñas, permisos, etc.

// 1. Control y Configuración:
// Permiten al cliente especificar detalles sobre la solicitud.
// Ejemplo: Content-Type le dice al servidor el tipo de datos que se está enviando.

// 2. Seguridad:
// Headers como Authorization son esenciales para enviar tokens o credenciales de autenticación de forma
// segura.
// Ejemplo: Authorization: Bearer <token>.

// 3. Negociación de Contenido:
// Permiten al servidor y al cliente acordar el tipo de contenido que se intercambiará.
// Ejemplo: Accept especifica qué tipos de datos el cliente puede procesar.

// 4. Caché y Control de Conexión:
// Headers como Cache-Control permiten controlar cómo se almacenan y reutilizan las respuestas.
// Ejemplo: Cache-Control: no-cache instruye al navegador a no almacenar la respuesta en la caché.
