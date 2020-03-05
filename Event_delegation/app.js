//Variables globales

const BtnBotones = document.querySelector('#BtnBotones');
const Botones = document.querySelector('#botones');

//declaracion de funcion IIFE
(()=>{
  BtnBotones.addEventListener('click', agregarBtones);
  Botones .addEventListener('click', delegacion);
})();

function delegacion(e){
  e.preventDefault();
  const ColorBoton = e.target.classList[1];

  //console.log('Diste click');

  switch (ColorBoton) {

    case ('btn-primary'):
      console.log('Diste click en primary');

      fondo.className = 'bg-primary';
      break;

    case ('btn-secondary'):
      console.log('Diste click en secondary');

      fondo.className = 'bg-secondary';
      break;

    case ('btn-danger'):
      console.log('Diste click en danger');

      fondo.className = 'bg-danger';
      break;

    case ('btn-success'):
      console.log('Diste click en Success');

      fondo.className = 'bg-success';
      break;

    case ('btn-warning'):
      console.log('Diste click en warning');

      fondo.className = 'bg-warning';
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
