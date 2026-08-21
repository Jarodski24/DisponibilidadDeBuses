/* =========================================================
   BUSUCR - REGISTRO
========================================================= */


/* =========================================================
   OBTENER ELEMENTOS
========================================================= */

const formulario =
    document.getElementById("registroForm");

const nombre =
    document.getElementById("nombre");

const correo =
    document.getElementById("correo");

const carnet =
    document.getElementById("carnet");

const terminos =
    document.getElementById("terminos");

const boton =
    document.getElementById("btnRegistro");

const mensaje =
    document.getElementById("mensaje");


/* =========================================================
   MOSTRAR MENSAJE
========================================================= */

function mostrarMensaje(texto, tipo) {

    mensaje.textContent = texto;

    mensaje.className =
        "mensaje " + tipo;

}


/* =========================================================
   REGISTRO
========================================================= */

formulario.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        /* Limpiar mensaje */

        mensaje.textContent = "";

        mensaje.className =
            "mensaje";


        /* =================================================
           VALIDAR NOMBRE
        ================================================= */

        if (nombre.value.trim() === "") {

            mostrarMensaje(
                "Por favor, ingresa tu nombre completo.",
                "error"
            );

            nombre.focus();

            return;
        }


        /* =================================================
           VALIDAR CORREO
        ================================================= */

        if (correo.value.trim() === "") {

            mostrarMensaje(
                "Por favor, ingresa tu correo electrónico.",
                "error"
            );

            correo.focus();

            return;
        }


        /* =================================================
           VALIDAR CARNÉ
        ================================================= */

        if (carnet.value.trim() === "") {

            mostrarMensaje(
                "Por favor, ingresa tu carné universitario.",
                "error"
            );

            carnet.focus();

            return;
        }


        /* =================================================
           TÉRMINOS
        ================================================= */

        if (!terminos.checked) {

            mostrarMensaje(
                "Debes aceptar los términos y condiciones.",
                "error"
            );

            return;
        }


        /* =================================================
           ENVIAR CORREO
        ================================================= */

        boton.disabled = true;

        boton.textContent =
            "Enviando correo...";


        enviarCorreo(
            nombre.value,
            correo.value,
            carnet.value
        )


        .then(function() {


            /* =============================================
               CORREO ENVIADO
            ============================================= */

            mostrarMensaje(
                "¡Registro realizado correctamente! Revisa tu correo electrónico para confirmar tu cuenta.",
                "exito"
            );


            boton.textContent =
                "Registro completado";


            console.log(
                "Correo enviado correctamente."
            );


            console.log(
                "Usuario:",
                nombre.value
            );


            console.log(
                "Correo:",
                correo.value
            );


        })


        .catch(function(error) {


            /* =============================================
               ERROR
            ============================================= */

            console.error(
                "Error al enviar correo:",
                error
            );


            mostrarMensaje(
                "El registro fue correcto, pero no pudimos enviar el correo de confirmación.",
                "error"
            );


            boton.disabled = false;

            boton.textContent =
                "Crear cuenta";

        });

    }
);