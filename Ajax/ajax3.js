'use strict'

console.log("arcihvo ajax3.js cargado...");

document.querySelector('#dolar').addEventListener('click', function(){
  obtenerDatos('dolar');
});

document.querySelector('#uf').addEventListener('click', function(){
  obtenerDatos('uf');
});

function obtenerDatos(valor){
  let url = `https://mindicador.cl/api/${valor}`;

  const api = new XMLHttpRequest();

  //indicar metodos
  api.open('GET', url, true);

  //enviamos  nuestros datos
  api.send();

  //esperamos una respuesta
  api.onreadystatechange = function () {
      if(this.readyState ==4 && this.status == 200){
        //console.log(this.responseText);
        let datos = JSON.parse(this.responseText);
        //console.log( datos.serie);

        let r_dolar = document.querySelector('#r_dolar');
        r_dolar.innerHTML = '';
        for (let dato of datos.serie) {
          r_dolar.innerHTML += `
            <li>${dato.fecha.substr(0,10)} || $ ${dato.valor}</li>
          `;
        }
      }
  }

}
