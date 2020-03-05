//IIFE (Immediately Invoked Function Expression)
//'use strict'

(function suscribete(){
  console.log(`Suscribete a mi canal`);
})();

// o tambiem
(() => {
  console.log(`Suscribete a mi canal 2`);
})();

// con parametros
((nombre='luis') => {
  console.log(`Suscribete a mi canal 3 ${nombre}`);
})('David');

/*function suscribete(){
  console.log('Suscribete a mi canal');
}

suscribete();
*/
