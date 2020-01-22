//Ejemplo de arreglo
console.log('Ejemplo de arreglo');

arreglo = ['HTML', 12, true];

console.log(arreglo);

//Ejemplo de objeto
console.log('Ejemplo de objeto');
objeto={
    nombre: 'Luis',
    carrera: 'Computacion',
    edad: 24,
    activo: true,
    deporte:{
        nombre: 'Futbol',
        tiempo: 2,
    }
}
//objeto simple
console.log('simple');

console.log(objeto);
console.log(objeto.edad);

// objetos anidados
console.log('anidados');
console.log(objeto);
console.log(objeto.deporte.nombre);

//Arreglo de objetos
console.log('Arreglo de objetos');

arr_obj = [
    {
        nombre: 'Luis',
        edad: 12
    },
    {
        nombre: 'Juan',
        edad: 23
    },
    {
        nombre: 'Manuel', 
        edad: 30
    },
];

for (let indice of arr_obj) {
    console.log(indice);
    console.log(indice.nombre);
    
    
}