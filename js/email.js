/* =========================================================
   BUSUCR - EMAILJS
========================================================= */

console.log("================================");
console.log("EMAIL.JS SE ESTA EJECUTANDO");
console.log("================================");


/* =========================================================
   CONFIGURACIÓN
========================================================= */

const EMAILJS_PUBLIC_KEY = "TU_PUBLIC_KEY";
const EMAILJS_SERVICE_ID = "TU_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "TU_TEMPLATE_ID";


console.log("Public Key:", EMAILJS_PUBLIC_KEY);
console.log("Service ID:", EMAILJS_SERVICE_ID);
console.log("Template ID:", EMAILJS_TEMPLATE_ID);


/* =========================================================
   COMPROBAR EMAILJS
========================================================= */

console.log("EmailJS disponible:", typeof emailjs);


/* =========================================================
   INICIALIZAR
========================================================= */

emailjs.init({
    publicKey: EMAILJS_PUBLIC_KEY
});

console.log("EmailJS inicializado correctamente");


/* =========================================================
   FUNCIÓN ENVIAR CORREO
========================================================= */

function enviarCorreo(nombre, correo, carnet) {

    console.log("================================");
    console.log("ENVIAR CORREO FUE EJECUTADO");
    console.log("================================");


    const datos = {

        nombre: nombre,

        correo: correo,

        carnet: carnet

    };


    console.log("Datos enviados a EmailJS:");

    console.log(datos);


    return emailjs.send(

        EMAILJS_SERVICE_ID,

        EMAILJS_TEMPLATE_ID,

        datos

    )

    .then(function(response) {

        console.log("================================");
        console.log("EMAILJS RESPONDIÓ CORRECTAMENTE");
        console.log("================================");

        console.log("Status:", response.status);

        console.log("Text:", response.text);


        return response;

    })

    .catch(function(error) {

        console.error("================================");
        console.error("ERROR DE EMAILJS");
        console.error("================================");

        console.error(error);


        throw error;

    });

}