/* =========================================================
   BUSUCR - REGISTRO
========================================================= */


/* =========================================================
   OBTENER ELEMENTOS
========================================================= */

const formulario = document.getElementById("registroForm");

const nombre = document.getElementById("nombre");

const correo = document.getElementById("correo");

const carnet = document.getElementById("carnet");

const password = document.getElementById("password");

const confirmar = document.getElementById("confirmar");

const terminos = document.getElementById("terminos");

const boton = document.getElementById("btnRegistro");

const mensaje = document.getElementById("mensaje");


/* =========================================================
   MOSTRAR MENSAJE
========================================================= */

function mostrarMensaje(texto, tipo) {

    mensaje.textContent = texto;

    mensaje.className = "mensaje " + tipo;

}


/* =========================================================
   REGISTRO
========================================================= */

formulario.addEventListener("submit", function(event) {

    /*
        Evita que el formulario recargue
        la página.
    */

    event.preventDefault();


    /* Limpiar mensaje */

    mensaje.textContent = "";

    mensaje.className = "mensaje";


    /* =====================================================
       VALIDAR NOMBRE
    ===================================================== */

    if (nombre.value.trim() === "") {

        mostrarMensaje(
            "Por favor, ingresa tu nombre completo.",
            "error"
        );

        nombre.focus();

        return;
    }


    /* =====================================================
       VALIDAR CORREO
    ===================================================== */

    if (correo.value.trim() === "") {

        mostrarMensaje(
            "Por favor, ingresa tu correo electrónico.",
            "error"
        );

        correo.focus();

        return;
    }


    /* =====================================================
       VALIDAR CARNÉ
    ===================================================== */

    if (carnet.value.trim() === "") {

        mostrarMensaje(
            "Por favor, ingresa tu carné universitario.",
            "error"
        );

        carnet.focus();

        return;
    }


    /* =====================================================
       VALIDAR CONTRASEÑA
    ===================================================== */

    if (password.value.length < 8) {

        mostrarMensaje(
            "La contraseña debe tener al menos 8 caracteres.",
            "error"
        );

        password.focus();

        return;
    }


    /* =====================================================
       COMPROBAR CONTRASEÑAS
    ===================================================== */

    if (password.value !== confirmar.value) {

        mostrarMensaje(
            "Las contraseñas no coinciden.",
            "error"
        );

        confirmar.focus();

        return;
    }


    /* =====================================================
       TÉRMINOS
    ===================================================== */

    if (!terminos.checked) {

        mostrarMensaje(
            "Debes aceptar los términos y condiciones.",
            "error"
        );

        return;
    }


    /* =====================================================
       REGISTRO CORRECTO
    ===================================================== */

    mostrarMensaje(
        "¡Registro realizado correctamente!",
        "exito"
    );


    /*
        Desactivar botón temporalmente.
    */

    boton.disabled = true;

    boton.textContent = "Registrado";


    /* =====================================================
       MOSTRAR INFORMACIÓN EN CONSOLA
    ===================================================== */

    console.log("Usuario registrado:");

    console.log("Nombre:", nombre.value);

    console.log("Correo:", correo.value);

    console.log("Carné:", carnet.value);


});