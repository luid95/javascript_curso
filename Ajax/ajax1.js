'use strict'

console.log('Archivo ajax1.js cargado...');

var b_ajax = document.querySelector('#boton').addEventListener('click', function(){
    console.log('Funcion activado');

    const xhttp = new XMLHttpRequest();

    //indicar metodos
    xhttp.open('GET', 'archivo.txt', true);

    //enviamos  nuestros datos
    xhttp.send();

    //esperamos una respuesta
    xhttp.onreadystatechange = function () {
        if(this.readyState ==4 && this.status == 200){
            //console.log(this.responseText);
            document.querySelector('#respuesta').innerHTML = `
            ${this.responseText}
            `
        }
    }
    
})
