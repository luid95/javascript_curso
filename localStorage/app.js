//LocalStorage: Guarda cadenas de texto en el navegador del usuario, clave => valor

//SET => Guardando

//GET => Obtener
/*
console.log('LocalStorage');
console.log("Archivo app.js cargado");

console.log("guardamos infomacion en el localStorage");
const nombre= 'Ignacio';
localStorage.setItem('nombre_usuario', nombre);

console.log('Mostrar el contenido de la variable que esta en el localStorage');
const nombre_LS = localStorage.getItem('nombre_usuario');
console.log(nombre_LS);


console.log('Eliminamos lo que esta guardado en el localStorage');
localStorage.removeItem('nombre_usuario');
*/

const BtnBotones = document.querySelector('#BtnBotones');
const Botones = document.querySelector('#botones');
const Fondo = document.querySelector('#fondo');

//declaracion de funcion IIFE
(()=>{
  BtnBotones.addEventListener('click', agregarBtones);
  Botones .addEventListener('click', delegacion);
})();

(()=>{
  const color = localStorage.getItem('fondoColor');

  if(color === null){
    Fondo.className = 'bg-dark';
  }else{
    Fondo.className = color;
  }

})();

function delegacion(e){
  e.preventDefault();
  const ColorBoton = e.target.classList[1];

  //console.log('Diste click');

  switch (ColorBoton) {

    case ('btn-primary'):
      console.log('Diste click en primary');

      Fondo.className = 'bg-primary';
      localStorage.setItem('fondoColor', 'bg-primary');
      break;

    case ('btn-secondary'):
      console.log('Diste click en secondary');

      Fondo.className = 'bg-secondary';
      localStorage.setItem('fondoColor', 'bg-secondary');
      break;

    case ('btn-danger'):
      console.log('Diste click en danger');

      Fondo.className = 'bg-danger';
      localStorage.setItem('fondoColor', 'bg-danger');
      break;

    case ('btn-success'):
      console.log('Diste click en Success');

      Fondo.className = 'bg-success';
      localStorage.setItem('fondoColor', 'bg-success');
      break;

    case ('btn-warning'):
      console.log('Diste click en warning');

      Fondo.className = 'bg-warning';
      localStorage.setItem('fondoColor', 'bg-warning');
      break;

    default:

  }
}

function agregarBtones(e){
  e.preventDefault();
  //console.log('Diste click en el boton negro');

  Botones.innerHTML = `
            <button class="btn btn-primary" id="BtnBotones"> Primary </button>
            <button class="btn btn-secondary" id="BtnBotones"> Secondary </button>
            <button class="btn btn-danger" id="BtnBotones"> Danger </button>
            <button class="btn btn-success" id="BtnBotones"> Success </button>
            <button class="btn btn-warning" id="BtnBotones"> Warning </button>
  `;
}
