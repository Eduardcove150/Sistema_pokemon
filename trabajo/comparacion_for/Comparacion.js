//comparacion

if(5 == 5){
    console.log("5 es igual que 5")
}
if(5 === 5){
    console.log("5 es igual que 5")
}

let a = 6;
console.log(typeof a)


let b = "6";
console.log(typeof b)


if(a == b){
    console.log("5 es igual que 5")
}
if(a === b){
    console.log("5 es igual que 5")
}
// el segundo que se le coloca === evalua no solo contenido sino 
// tambien el tipo de variable que es.



//distinto

let c=10;
let d=10;

// distinto que basico

if (c != d){
    console.log("distinto DEBIL")
}

if (c !== d){
    console.log("distinto FUERTE")
}

//mayor que y menor que 
let max=10;
let min=5;

if (max > min){
    console.log("max es mayor que min")
}
if (max >= min){
    console.log("max es mayor o igual que min")
}
if (max < min){
    console.log("min es menor que max")
}
if (max <= min){
    console.log("min es menor o igual que max")
}