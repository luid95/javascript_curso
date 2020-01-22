alert("Funcionando");

let i = 50;

console.log("Var, let y const");

console.log('Dentro del cilo for');

for (let i = 0; i <= 5; i++) {
    console.log(i);
}

console.log("Fuera del ciclo for");

console.log(i);

//Concicional if

console.log("Condicional if");
let num = 60;

if(true){
    let num = 5;
    console.log("Dentro del if el valor es: " + num);    
}
console.log("Fuera de la condicional if es: " + num);

///////////////
let num1;//variable indefinida
var num2;//variable indefinida

const num3=44; //error, debe estar inicializado
console.log(num1);
console.log(num2);
console.log(num3);

// pero si podemos agregar valores, en cadenas
const numeros = [10, 20, 30];
console.log(numeros);
 
numeros.push(40);
console.log(numeros);
