// PRIMER EJEMPLO 

// primera funcion 
function sum (a,b){
    return a+b;
}

// segunda funcion 
function calc (a,b,callback){ //callback aqui seria como en algebra x se le puede asignar cualquier numero
    //para nuestro caso callback como argumento se refiere a cualquier funcion
    return callback (a,b)
}


console.log(calc(2,2,sum))//llamado primer argumento de la primera funcion
                          //llamado segundo argumento de la primera funcion
                            //llamado a la funcion sum primera funcion pasada como tercer argumento (callback)    
                            
                            
// SEGUNDO EJEMPLO (setTimeout)

setTimeout(function(){ //setTimeOut por si misma ya es un callback
    console.log("este es un mensaje con retardo")
}, 10000)