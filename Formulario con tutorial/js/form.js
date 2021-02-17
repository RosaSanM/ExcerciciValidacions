const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");

//expresiones regulares para hacer comprobaciones
const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&_-])[A-Za-z\d$@$!%*?&_-]{8,15}$/, // 8 a 15 carácteres, min una mayúscula/una minuscula, un número y un carácter especial.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
	ciudad: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
    dire: /^[\Wa-zA-ZÀ-ÿ\s]{3,40}$/,
    provincia: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
    codigo: /^\d{5}$/
}

//objeto para realizar comprobación al dar al submit
const campos = {
    nombre: false,
    apellido: false,
    email: false,
    pass: false,
    dire: false,
    provincia: false,
    ciudad: false,
    codigo: false

}

//toma de los datos del input y validación
const validarFormulario = (evento) =>{
    switch (evento.target.name){
        case "nombre":
          validarCampo(expresiones.nombre, evento.target, "nombre"); 
        break;
        case "apellido":
            validarCampo(expresiones.nombre, evento.target, "apellido");   
        break;
        case "email":
            validarCampo(expresiones.correo, evento.target, "email");    
        break;case "pass":
            validarCampo(expresiones.password, evento.target, "pass");
            validarPass2();  
        break;
        case "pass2":
            validarPass2();       
        break;
        case "dire":
            validarCampo(expresiones.dire, evento.target, "dire");
        break;
        case "provincia":
                  
        break;
        case "ciudad":
            validarCampo(expresiones.ciudad, evento.target, "ciudad");   
        break;
        case "codigo":
            validarCampo(expresiones.codigo, evento.target, "codigo");    
        break;

    }    
};

//mensajes de error o éxito
const validarCampo = (expresion, input, campo)=> {
    if(expresion.test(input.value)){
        document.getElementById(`grupo-${campo}`).classList.remove("form-grupo-incorrecto");
        document.getElementById(`grupo-${campo}`).classList.add("form-grupo-correcto");
        document.querySelector(`#grupo-${campo} i`).classList.remove("fa-thumbs-down");
        document.querySelector(`#grupo-${campo} i`).classList.add("fa-thumbs-up");
        document.querySelector(`#grupo-${campo} .form-input-error`).classList.remove("form-input-error-encendido");
        campos[campo] = true;
    }else {
        document.getElementById(`grupo-${campo}`).classList.add("form-grupo-incorrecto");
        document.querySelector(`#grupo-${campo} i`).classList.remove("fa-thumbs-up");
        document.querySelector(`#grupo-${campo} i`).classList.add("fa-thumbs-down");
        document.querySelector(`#grupo-${campo} .form-input-error`).classList.add("form-input-error-encendido");
        campos[campo] = false;
    }
}

//comprobación de la repetición de la contraseña
const validarPass2 = () =>{
    const inputPass1 = document.getElementById("pass");
    const inputPass2 = document.getElementById("pass2");

    if(inputPass1.value !== inputPass2.value){
        document.getElementById(`grupo-pass2`).classList.add("form-grupo-incorrecto");
        document.querySelector(`#grupo-pass2 i`).classList.remove("fa-thumbs-up");
        document.querySelector(`#grupo-pass2 i`).classList.add("fa-thumbs-down");
        document.querySelector(`#grupo-pass2 .form-input-error`).classList.add("form-input-error-encendido");    
        campos["pass"] = false;
    }else{
        document.getElementById(`grupo-pass2`).classList.remove("form-grupo-incorrecto");
        document.getElementById(`grupo-pass2`).classList.add("form-grupo-correcto");
        document.querySelector(`#grupo-pass2 i`).classList.remove("fa-thumbs-down");
        document.querySelector(`#grupo-pass2 i`).classList.add("fa-thumbs-up");
        document.querySelector(`#grupo-pass2 .form-input-error`).classList.remove("form-input-error-encendido");
        campos["pass"] = true;
    }
}

//comprobamos el valor de los inputs cada vez que picamos tecla y apretamos con el 
//cursor fuera del input, llamamos a la función de validación
inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
});

//evento al clikar al botón de submit
formulario.addEventListener("submit", (evento)=> {
    evento.preventDefault();
    const terminos = document.getElementById("terminos");//comprobamos ckeckbox
    if(campos.nombre && campos.apellido && campos.email && campos.pass && campos.ciudad && terminos.checked){
        formulario.reset();

        document.getElementById("form-mensaje-exito").classList.add("form-mensaje-exito-activo");
        setTimeout ( () => {
            document.getElementById("form-mensaje-exito").classList.remove("form-mensaje-exito-activo");
        }, 5000);

        document.querySelectorAll(".form-grupo-correcto").forEach( (icono)=> {
            icono.classList.remove("form-grupo-correcto");
        })
    }else{
        document.getElementById("form-mensaje").classList.add("form-mensaje-error");
    }

    
});