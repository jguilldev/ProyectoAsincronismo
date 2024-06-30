// Fetch Post es una función en JavaScript que se utiliza para realizar 
// una solicitud HTTP POST a un servidor y enviar datos para ser procesados. 
// Esta función es parte del estándar Fetch API, que proporciona una interfaz moderna y 
// flexible para hacer solicitudes HTTP.

// Estructura del Objeto de Solicitud (fetch()):

// Debes proporcionar la URL del servidor al que deseas enviar la solicitud.
// Especifica el método HTTP como 'POST'.
// Configura los encabezados para indicar el tipo de contenido que estás enviando (por ejemplo, JSON, 
// formulario codificado, etc.).
// Opcionalmente, puedes incluir datos en el cuerpo de la solicitud, como un objeto JSON o datos de
//  formulario.

import fetch from 'node-fetch'

const API = 'https://api.escuelajs.co/api/v1'

function postData(urlApi,data){
    const response = fetch(urlApi,{
        method:'POST', //method: Especifica el método HTTP como 'POST'
        mode:'cors', //explicacion extensa como comentario NOTA, mas abajo
        credentials:'same-origin',//explicacion extensa como comentario NOTA2, mas abajo
        headers:{//los headers Proveen información adicional sobre la solicitud o la respuesta (NOTA3) mas abajo
            'content-Type':'application/json'
        },
        body:JSON.stringify(data)
    })
    return response;
}

// NOTA 
// El mode  hace referencia hace referencia al origen de la pagina

// 1. cors (Cross-Origin Resource Sharing):

// Permite que la solicitud se realice a un dominio diferente del dominio del cual se originó la página.
// Es el valor predeterminado para solicitudes entre diferentes dominios.
// Es decir si se se consume la API a un sitio diferente del dominio donde se aloja nuestro proyecto

// 2. no-cors 

// Permite que la solicitud se realice a un dominio diferente, pero solo puede acceder a un subconjunto 
// limitado de encabezados y métodos HTTP.
// Es útil para realizar solicitudes que no requieren procesar la respuesta en el cliente.
// Ejemplo: Cuando necesitas hacer una solicitud para cargar una imagen o un recurso y no necesitas
//  acceder a la respuesta.

// 3.same-origin

// Restringe la solicitud para que solo se realice al mismo dominio del cual se originó la página.
// Esto es útil para prevenir ataques de tipo Cross-Site Request Forgery (CSRF).
// Ejemplo: Cuando  hace una solicitud a un recurso en el mismo dominio.


// NOTA2

// la propiedad credentials dentro de la configuración de la solicitud (options) se utiliza para controlar
//  si las cookies y las credenciales HTTP se incluyen en las solicitudes entre diferentes 
//  orígenes (cross-origin requests).

// 1.omit

// Las cookies y las credenciales HTTP no se envían junto con la solicitud, incluso si la solicitud se 
// realiza al mismo origen.
// Es el valor predeterminado si no se especifica otra cosa.

// 2.same-origin

// Las cookies y las credenciales HTTP solo se envían si la solicitud se realiza al mismo origen.
// Si la solicitud se realiza a un origen diferente, las credenciales no se enviarán.

// 3.include

// Las cookies y las credenciales HTTP se envían en todas las solicitudes, independientemente del origen.
// Esto puede ser útil si tu aplicación necesita autenticarse con un servidor, incluso si está en un dominio 
// diferente.


// NOTA 3

// Los Headers indican caracteristicas especiales de las solicitudes,
// como por Ejemplo tipo de dato, credenciales de autorizacion usuauarios y passwords,permisos, CustomElementRegistryotros

// 1.Control y Configuración:

// Permiten al cliente especificar detalles sobre la solicitud.
// Ejemplo: Content-Type le dice al servidor el tipo de datos que se está enviando.

// 2.Seguridad:

// Headers como Authorization son esenciales para enviar tokens o credenciales de autenticación de forma
//  segura.
// Ejemplo: Authorization: Bearer <token>.

// 3.Negociación de Contenido:

// Permiten al servidor y al cliente acordar el tipo de contenido que se intercambiará.
// Ejemplo: Accept especifica qué tipos de datos el cliente puede procesar.

// 4.Caché y Control de Conexión:

// Headers como Cache-Control permiten controlar cómo se almacenan y reutilizan las respuestas.
// Ejemplo: Cache-Control: no-cache instruye al navegador a no almacenar la respuesta en la caché.
