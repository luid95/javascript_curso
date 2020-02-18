console.log("Funcionando...");

var formulario = document.getElementById('formulario');
var respuesta = document.getElementById('respuesta');

formulario.addEventListener('submit', function(e){

    e.preventDefault();
    console.log("Me diste un click");

    var datos = new FormData(formulario);

    // console.log(datos);
    // console.log(datos.get('usuario'));
    // console.log(datos.get('pass'));    

    //fetch por defecto trabajo con metodo get
    //asi que agregamos el metodo post para enviar informacion
    fetch('post.php',{
        method: 'POST',
        body: datos
        
    })
    .then(res => res.json() )
    .then(data => {
        console.log(data)
        if(data=== 'error'){
            respuesta.innerHTML= `
            <div class="alert alert-danger" role="alert">
            Llena todos los campos!
            </div>
            `
        }else{
            respuesta.innerHTML= `
            <div class="alert alert-primary" role="alert">
                ${data}
            </div>
            `
        }
    })
});