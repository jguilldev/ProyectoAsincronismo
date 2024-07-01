// // Las promesas tienen tes estados
// pendiente (pending)
// cumplido(fullfilled)
// rechazado(rejected)

//la promesa regresa una funcion con dos funciones dentro

// Sintaxis Básica
// Crear una Promesa

// const myPromise = new Promise((resolve, reject) => {
//     // Operación asincrónica
//     const success = true; // Simulando una condición

//     if (success) {
//         resolve('Operación completada con éxito');
//     } else {
//         reject('Ocurrió un error');
//     }
// });

// Consumir una Promesa
// Para manejar el resultado de una promesa, se utilizan los métodos then y catch.

// myPromise
//     .then((result) => {
//         console.log(result); // 'Operación completada con éxito'
//     })
//     .catch((error) => {
//         console.error(error); // 'Ocurrió un error'
//     });




const promise= new Promise(function(resolve,reject){
    resolve(``)
})

const vacas = 3;

const countCows = new Promise(function(resolve, reject) {
    if (vacas > 10) {
        resolve(`Tenemos las vacas necesarias: ${vacas}`);
    } else {
        reject(`No contamos con las suficientes vacas`);
    }
});

countCows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(()=>console.log(`Finally`));//finally se usa para aclarar que todo el 
// codigo ya ha corrido y ha finalizado
