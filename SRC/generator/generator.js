// Un generador en JavaScript es una función que puede pausar su ejecución y posteriormente reanudarla.
//  Esto se logra mediante la palabra clave function* (asterisco después de function),
//   y dentro de la función generadora se usa la palabra clave yield para pausar y reanudar la ejecución.


// ejemplo 1
function* simpleGenerator() {
    console.log('Primera ejecución');
    yield 1;  // Pausa aquí y retorna el valor 1
    console.log('Segunda ejecución');
    yield 2;  // Pausa aquí y retorna el valor 2
    console.log('Tercera ejecución');
    yield 3;  // Pausa aquí y retorna el valor 3
    console.log('Generador completo');
}

// Crear el iterador del generador
const gen = simpleGenerator();
console.log(gen.next()); // { value: undefined, done: true }
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }

// 2.ejemplo 
const equiposDeFutbol = [
    "Real Madrid",
    "FC Barcelona",
    "Manchester United",
    "Bayern Munich",
    "Juventus",
    "Paris Saint-Germain",
    "Liverpool",
    "Chelsea",
    "Manchester City",
    "AC Milan"
];

// Funcion para iterar el array con generators 

function* itera(array){
    for(let value of array){
        yield value
    }
}

const it= itera(equiposDeFutbol)
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())


