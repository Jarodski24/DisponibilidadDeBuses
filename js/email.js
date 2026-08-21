/* =========================================================
   BUSUCR - ENVÍO DE CORREO
========================================================= */


/* =========================================================
   CONFIGURACIÓN
========================================================= */

console.log("================================");
console.log("EMAIL.JS SE ESTA EJECUTANDO");
console.log("================================");


const EMAILJS_PUBLIC_KEY =
    "QJPaB6kqAIjI0ESpT";

const EMAILJS_SERVICE_ID =
    "serviceBusUCR";

const EMAILJS_TEMPLATE_ID =
    "template_qjn4mzs";

/* =========================================================
   INICIALIZAR EMAILJS
========================================================= */

try {

    emailjs.init({

        publicKey:
            EMAILJS_PUBLIC_KEY

    });

    console.log(
        "EmailJS inicializado correctamente."
    );

} catch (error) {

    console.error(
        "ERROR AL INICIALIZAR EMAILJS:",
        error
    );

}


/* =========================================================
   FUNCIÓN PARA ENVIAR CORREO
========================================================= */

function enviarCorreo(
    nombre,
    correo,
    carnet
) {

    console.log("================================");
    console.log("INICIANDO ENVÍO DE CORREO");
    console.log("================================");


    /* =====================================================
       MOSTRAR DATOS
    ===================================================== */

    console.log(
        "Nombre:",
        nombre
    );

    console.log(
        "Correo:",
        correo
    );

    console.log(
        "Carné:",
        carnet
    );


    /* =====================================================
       DATOS PARA EMAILJS
    ===================================================== */

    const datos = {

        nombre: nombre,

        correo: correo,

        carnet: carnet

    };


    console.log(
        "Datos enviados a EmailJS:",
        datos
    );


    console.log(
        "Service ID utilizado:",
        EMAILJS_SERVICE_ID
    );

    console.log(
        "Template ID utilizado:",
        EMAILJS_TEMPLATE_ID
    );


    /* =====================================================
       ENVIAR
    ===================================================== */

    return emailjs.send(

        EMAILJS_SERVICE_ID,

        EMAILJS_TEMPLATE_ID,

        datos

    )

    .then(function(response) {

        console.log("================================");
        console.log("CORREO ENVIADO CORRECTAMENTE");
        console.log("================================");

        console.log(
            "Status:",
            response.status
        );

        console.log(
            "Respuesta:",
            response.text
        );


        return response;

    })

    .catch(function(error) {

        console.error("================================");
        console.error("ERROR AL ENVIAR CORREO");
        console.error("================================");

        console.error(
            "Error completo:",
            error
        );

        console.error(
            "Status:",
            error.status
        );

        console.error(
            "Mensaje:",
            error.text
        );


        throw error;

    });

}