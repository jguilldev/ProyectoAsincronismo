// async y await son palabras clave en JavaScript que se utilizan para manejar
//  operaciones asincrónicas de manera más sencilla
//  y legible que utilizando promesas encadenadas (then y catch).

// async:
// La palabra clave async se usa para declarar una función asíncrona.
// Una función asíncrona siempre devuelve una promesa. Si la función devuelve un valor, 
// ese valor se envuelve en una promesa resuelta automáticamente.
// Si la función lanza una excepción o devuelve una promesa rechazada, la promesa devuelta 
// por la función asíncrona será rechazada con ese valor.

// async function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('peticion resuelta');
//         }, 5000);
//     });
// }

// async function main() {
//     try {
//         const data = await fetchData();
//         console.log(data); // "peticion resuelta"
//     } catch (error) {
//         console.error(error);
//     }
// }

// main();

const fnAsync=()=>{
    return new Promise ((resolve,reject)=>{
        (true)
        ?setTimeout(()=>resolve('Async',5000)):reject(new Error('error'))
    })
}

const anothFunction =async()=>{
    const something =await fnAsync()
    console.log(something)
    console.log('Hello')
}

console.log('before')
anothFunction()
console.log('After')