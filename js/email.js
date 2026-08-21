/* =========================================================
   BUSUCR - ENVÍO DE CORREO
========================================================= */

/* =========================================================
   CONFIGURACIÓN
========================================================= */
console.log("================================");
console.log("EMAIL.JS SE ESTA EJECUTANDO");
console.log("================================");


const EMAILJS_PUBLIC_KEY = "QJPaB6kqAIjI0ESpT";

const EMAILJS_SERVICE_ID = "serviceBusUCR";

const EMAILJS_TEMPLATE_ID = "template_k4acgtc";


/* =========================================================
   INICIALIZAR EMAILJS
========================================================= */

emailjs.init({

    publicKey: EMAILJS_PUBLIC_KEY

});


/* =========================================================
   FUNCIÓN PARA ENVIAR CORREO
========================================================= */

function enviarCorreo(nombre, correo, carnet) {

    const datos = {

        nombre: nombre,

        correo: correo,

        carnet: carnet

    };


    return emailjs.send(

        EMAILJS_SERVICE_ID,

        EMAILJS_TEMPLATE_ID,

        datos

    );

}