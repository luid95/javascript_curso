'use strict'

console.log("arcihvo ajax2.js cargado...");

document.querySelector('#boton2').addEventListener('click', traerDatos);

function traerDatos(){
  console.log('Dentro de la funcion');

  const xhttp = new XMLHttpRequest();

  //indicar metodos
  xhttp.open('GET', 'catalogo.json', true);

  //enviamos  nuestros datos
  xhttp.send();

  //esperamos una respuesta
  xhttp.onreadystatechange = function () {
      if(this.readyState ==4 && this.status == 200){
          //console.log(this.responseText);
          let datos = JSON.parse(this.responseText);
          //console.log( datos );

          let res = document.querySelector('#respuesta2');
          res.innerHTML = '';

          for (let  dato of datos) {
            //console.log(dato.titulo);
            res.innerHTML += `
            <tr>
              <td>${dato.titulo}</td>
              <td>${dato.artista}</td>
            </tr>
            `
          }

      }
  }

}
