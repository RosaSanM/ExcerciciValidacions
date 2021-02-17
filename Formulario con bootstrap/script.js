// Campos validados al enviar el formulario
(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
            
            form.classList.add('was-validated');
           
                 
        }, false);
      });
    }, false);
  })();
  


//campos validados en tiempo real
nombre.addEventListener("keyup",verificarNombre);
apellido.addEventListener("keyup", verificarApellido);
dire.addEventListener("keyup", verificarDire);
provincia.addEventListener("focus", verificarProvincia);
ciudad.addEventListener("keyup", verificarCiudad);
codigo.addEventListener("keyup", verificarCodigo);
mail.addEventListener("focus", verificarEmail);
pass.addEventListener("keyup", verificarPass);
pass2.addEventListener("keyup", verificarPass2);

//funciones de validación
function verificarNombre (){
    if(nombre.value.length >= 3){
        verifiNombre = true;
        document.getElementById("nombre").classList.add('is-valid');
        document.getElementById("nombre").classList.remove('is-invalid');
        
    }else{
        document.getElementById("nombre").classList.add('is-invalid');
        document.getElementById("nombre").classList.remove('is-valid');
    }
}
function verificarApellido(){
    if(apellido.value.length >= 3){
        verifiApellido = true;
        document.getElementById("apellido").classList.add('is-valid');
        document.getElementById("apellido").classList.remove('is-invalid');
    }else{
        document.getElementById("apellido").classList.remove('is-valid');
        document.getElementById("apellido").classList.add('is-invalid');
    }
}
function verificarDire(){
    let regex = /^[\Wa-zA-ZÀ-ÿ\s]{3,40}$/;
    if(!(regex.test(dire.value))){
        document.getElementById("dire").classList.remove('is-valid');
        document.getElementById("dire").classList.add('is-invalid');   
    }else{
        verifiDire = true;
        document.getElementById("dire").classList.add('is-valid');
        document.getElementById("dire").classList.remove('is-invalid'); 
    }
}
function verificarProvincia(){
    let valor = document.querySelector(".custom-select").value;
    if(valor == 1 || valor == 2 || valor == 3 || valor == 4 ){
        document.getElementById("provincia").classList.add('is-valid');
        document.getElementById("provincia").classList.remove('is-invalid');     
    }else{
        verifiProvincia = true;
        document.getElementById("provincia").classList.remove('is-valid');
        document.getElementById("provincia").classList.add('is-invalid'); 
    }
}

function verificarCiudad(){
    let regex = /^[\Wa-zA-ZÀ-ÿ\s]{3,40}$/;
    if(!(regex.test(ciudad.value))){
        document.getElementById("ciudad").classList.remove('is-valid');
        document.getElementById("ciudad").classList.add('is-invalid');
    }else{
        verifiCiudad = true;
        document.getElementById("ciudad").classList.add('is-valid');
        document.getElementById("ciudad").classList.remove('is-invalid');
    }
}
function verificarCodigo(){
    if((codigo.value.length != 5) || isNaN(codigo.value)){
        document.getElementById("codigo").classList.remove('is-valid');
        document.getElementById("codigo").classList.add('is-invalid');
    }else{
        verifiCodigo = true;
        document.getElementById("codigo").classList.add('is-valid');
        document.getElementById("codigo").classList.remove('is-invalid');
    }
}
function verificarEmail(){
    let correo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i;
    if(!(correo.test(mail.value))){
        document.getElementById("mail").classList.remove('is-valid');
        document.getElementById("mail").classList.add('is-invalid');
    }else{
        verifiEmail = true;
        document.getElementById("mail").classList.add('is-valid');
        document.getElementById("mail").classList.remove('is-invalid');
    }
}
function verificarPass(){
    let contra = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&_-])[A-Za-z\d$@$!%*?&_-]{8,15}$/;
    if(!(contra.test(pass.value))){
        document.getElementById("pass").classList.remove('is-valid');
        document.getElementById("pass").classList.add('is-invalid');
    }else{
        verifiPass = true;
        document.getElementById("pass").classList.add('is-valid');
        document.getElementById("pass").classList.remove('is-invalid');
    }
}
function verificarPass2(){
    if(pass.value === pass2.value){
        verifiPass2 = true;
        document.getElementById("pass2").classList.remove("is-invalid");
        document.getElementById("pass2").classList.add('is-valid');
    }else{
        document.getElementById("pass2").classList.add("is-invalid");
        document.getElementById("pass2").classList.remove("is-valid");
    }
}

