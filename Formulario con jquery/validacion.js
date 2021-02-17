//Mensaje de enviado
$.validator.setDefaults( {
    submitHandler: function () {
       alert( "Enviado!" );
    }
});


//Mensajes de error
$(document).ready(function(){
    //validación de la contraseña
    $.validator.addMethod("contra", function(value, element) {
        return this.optional( element ) ||  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&_-])[A-Za-z\d$@$!%*?&_-]{8,15}$/.test( value );
    });
    
    
    $("#form").validate({
       
        rules: {
            nombre:{
                required: true,
                minlength: 3
            },
            apellido:{
                required: true,
                minlength: 3
            },
            dire:{
                required: true,
                minlength: 5
            },
            ciudad:{
                required: true,
                minlength: 3
            },
            provincia:{
                required: true
            },
            codigo:{
                required: true,
                minlength:5,
                digits: true
            },
            email:{
                required: true,
                email: true
            },
            pass:{
                required: true,
                contra: "required"
            },
            pass2:{
                required: true,
                minlength: 8,
                equalTo: "#pass"
            },
            terminos:{
                required: true
            }
            
        },
        messages:{
            nombre:{
                required: "Ingresa un nombre",
                minlength: "Has de introducir un mínimo de tres carácteres."
            },
            apellido:{
                required: "Ingresa un apellido",
                minlength: "Has de introducir un mínimo de tres carácteres."    
            },
            dire:{
                required: "Ingresa una dirección",
                minlength: "Has de introducir un mínimo de cinco carácteres."
            },
            provincia:{
                required: "Elige una opción"
            },
            ciudad:{
                required: "Ingresa una ciudad",
                minlength: "Has de introducir un mínimo de tres carácteres."
            },
            codigo:{
                required: "Ingresa un codigo postal",
                minlength: "Has de introducir un mínimo de cinco digitos.",
                digit:  "Has de introducir un mínimo de cinco digitos."
            },
            email:"Ingresa un correo válido.",
            pass:{
                required: "Ingresa una contraseña",
                contra: "Ingresa un mínimo de 8 carácteres, una mayúscula, un carácter especial y un número."
            },
            pass2:{
                required: "Confirma tu contraseña!",
                minlength: "Ingresa un mínimo de 8 carácteres, una mayúscula y un número.",
                equalTo: "La contraseña no coincide"
            },
            terminos:{
                required: "Acepta los términos"
            } 
        },
        errorElement: "em",
        errorPlacement: function(error,element){
            error.addClass("help-block");
            if(element.prop("type") === "checkbox"){
                error.insertAfter(element.parent("label"));

            }else{
                error.insertAfter(element);
            }
        },
        highlight: function(element, errorClass, validClass){
            $(element).parents(".form-control1").addClass("has-error").removeClass("has-success");
        },
        unhighlight: function (element, errorClass, validClass){
            $(element).parents(".form-control1").addClass("has-success").removeClass("has-error");
        }
    });
});

