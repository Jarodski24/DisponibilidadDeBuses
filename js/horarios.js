// Base de datos de horarios
const basesDeDatosHorarios = {
    guapiles: [
        { salida: "6:00 a.m.", llegada: "6:20 a.m." },
        { salida: "6:40 a.m.", llegada: "7:00 a.m." },
        { salida: "8:10 a.m.", llegada: "8:30 a.m." },
        { salida: "8:30 a.m.", llegada: "8:50 a.m." },
        { salida: "9:10 a.m.", llegada: "9:30 a.m." },
        { salida: "9:30 a.m.", llegada: "9:50 a.m." },
        { salida: "10:10 a.m.", llegada: "10:30 a.m." },
        { salida: "11:45 a.m.", llegada: "12:10 m.d." },
        { salida: "12:10 m.d.", llegada: "12:30 m.d." },
        { salida: "1:10 p.m.", llegada: "1:30 p.m." },
        { salida: "2:10 p.m.", llegada: "2:30 p.m." },
        { salida: "2:30 p.m.", llegada: "2:50 p.m." },
        { salida: "3:10 p.m.", llegada: "3:30 p.m." },
        { salida: "4:00 p.m.", llegada: "4:20 p.m." },
        { salida: "4:10 p.m.", llegada: "4:30 p.m." },
        { salida: "4:30 p.m.", llegada: "4:50 p.m." },
        { salida: "5:10 p.m.", llegada: "5:30 p.m." },
        { salida: "5:50 p.m.", llegada: "6:10 p.m." },
        { salida: "6:10 p.m.", llegada: "6:30 p.m." },
        { salida: "7:10 p.m.", llegada: "7:30 p.m." },
        { salida: "8:10 p.m.", llegada: "8:30 p.m." }
    ],
    jimenez: [
        { salida: "6:15 a.m.", llegada: "6:45 a.m." },
        { salida: "7:00 a.m.", llegada: "7:30 a.m." },
        { salida: "7:10 a.m.", llegada: "7:40 a.m." },
        { salida: "7:40 a.m.", llegada: "8:10 a.m." },
        { salida: "8:15 a.m.", llegada: "8:45 a.m." },
        { salida: "9:15 a.m.", llegada: "9:45 a.m." },
        { salida: "9:40 a.m.", llegada: "10:10 a.m." },
        { salida: "10:15 a.m.", llegada: "10:45 a.m." },
        { salida: "11:15 a.m.", llegada: "11:45 a.m." },
        { salida: "12:00 m.d.", llegada: "12:30 m.d." },
        { salida: "12:15 m.d.", llegada: "12:45 m.d." },
        { salida: "12:35 m.d.", llegada: "1:05 p.m." },
        { salida: "1:15 p.m.", llegada: "1:45 p.m." },
        { salida: "2:15 p.m.", llegada: "2:45 p.m." },
        { salida: "2:50 p.m.", llegada: "3:20 p.m." },
        { salida: "4:15 p.m.", llegada: "4:45 p.m." },
        { salida: "4:30 p.m.", llegada: "5:00 p.m." },
        { salida: "5:00 p.m.", llegada: "5:30 p.m." },
        { salida: "5:15 p.m.", llegada: "5:45 p.m." },
        { salida: "5:50 p.m.", llegada: "6:20 p.m." },
        { salida: "6:15 a.m.", llegada: "6:45 a.m." },
        { salida: "7:15 p.m.", llegada: "7:45 p.m." },
        { salida: "8:15 p.m.", llegada: "8:45 p.m." }
    ],
    siquirres: [
        { salida: "4:40 a.m.", llegada: "5:25 a.m." },
        { salida: "5:30 a.m.", llegada: "6:15 a.m." },
        { salida: "6:00 a.m.", llegada: "6:45 a.m." },
        { salida: "6:30 a.m.", llegada: "7:15 a.m." },
        { salida: "7:30 a.m.", llegada: "8:15 a.m." },
        { salida: "8:00 a.m.", llegada: "8:45 a.m." },
        { salida: "8:30 a.m.", llegada: "9:15 a.m." },
        { salida: "9:15 a.m.", llegada: "10:00 a.m." },
        { salida: "10:00 a.m.", llegada: "10:45 a.m." },
        { salida: "11:00 a.m.", llegada: "11:45 a.m." },
        { salida: "11:30 a.m.", llegada: "12:15 m.d." },
        { salida: "12:15 p.m.", llegada: "1:00 p.m." },
        { salida: "12:45 p.m.", llegada: "1:30 p.m." },
        { salida: "1:30 p.m.", llegada: "2:15 p.m." },
        { salida: "2:15 p.m.", llegada: "3:00 p.m." },
        { salida: "3:30 p.m.", llegada: "4:15 p.m." },
        { salida: "4:30 p.m.", llegada: "5:15 p.m." },
        { salida: "5:20 p.m.", llegada: "6:05 p.m." },
        { salida: "6:45 p.m.", llegada: "7:30 p.m." }
    ]
};

const nombresRutas = {
    guapiles: "Guápiles - UCR",
    jimenez: "Jiménez - UCR",
    siquirres: "Siquirres - UCR (Guápiles)"
};

// Convierte texto de hora a minutos totales del día
function convertirAMinutos(strHora) {
    if (!strHora) return 0;
    let limpio = strHora.toLowerCase().trim();
    let partes = limpio.split(' ');
    let h_m = partes[0].split(':');
    let horas = parseInt(h_m[0]);
    let minutos = parseInt(h_m[1]);
    let periodo = partes[1] || '';

    if ((periodo.includes('p.m.') || periodo.includes('pm')) && horas !== 12) horas += 12;
    if ((periodo.includes('a.m.') || periodo.includes('am')) && horas === 12) horas = 0;

    return (horas * 60) + minutos;
}

document.addEventListener('DOMContentLoaded', () => {
    const ruta = localStorage.getItem('rutaSeleccionada');
    const horaBuscada = localStorage.getItem('horaBuscada');
    const contenedor = document.getElementById('contenedor-tabla');

    if (!ruta || !basesDeDatosHorarios[ruta] || !contenedor) {
        window.location.href = 'index.html';
        return;
    }

    const datosHorario = basesDeDatosHorarios[ruta];
    const nombreMostrar = nombresRutas[ruta];

    let tablaHTML = `
        <div class="horario-header">
            <h1>Horarios de la ruta: ${nombreMostrar}</h1>
            <p>Lunes a Sábado</p>
        </div>
        
        <div class="tabla-container">
            <table class="horarios-table">
                <thead>
                    <tr>
                        <th>Salida</th>
                        <th>Llegada UCR</th>
                    </tr>
                </thead>
                <tbody>
    `;

    // Renderizamos las filas con un ID único para ubicarlas con el scroll
    datosHorario.forEach((item, index) => {
        tablaHTML += `
            <tr id="fila-bus-${index}">
                <td>${item.salida}</td>
                <td>${item.llegada}</td>
            </tr>
        `;
    });

    tablaHTML += `
                </tbody>
            </table>
        </div>
        <br>
        <a href="index.html" class="btn-volver">← Volver al inicio</a>
    `;

    contenedor.innerHTML = tablaHTML;

    // SI EL USUARIO BUSCÓ UNA HORA DESDE EL INICIO, HACEMOS MAGIA Y BAJAMOS LA PÁGINA
    if (horaBuscada) {
        let partes = horaBuscada.split(':');
        let minutosUsuario = (parseInt(partes[0]) * 60) + parseInt(partes[1]);

        let indiceEncontrado = -1;
        let menorDiferencia = 999999;

        datosHorario.forEach((item, index) => {
            let minutosBus = convertirAMinutos(item.salida);
            let diferencia = minutosBus - minutosUsuario;

            if (diferencia >= 0 && diferencia < menorDiferencia) {
                menorDiferencia = diferencia;
                indiceEncontrado = index;
            }
        });

        // Si no encontró uno futuro, agarramos el último
        if (indiceEncontrado === -1 && datosHorario.length > 0) {
            indiceEncontrado = datosHorario.length - 1;
        }

        if (indiceEncontrado !== -1) {
            const filaEncontrada = document.getElementById(`fila-bus-${indiceEncontrado}`);
            if (filaEncontrada) {
                // Pequeño retraso para asegurarnos de que la página renderizó por completo antes de hacer scroll
                setTimeout(() => {
                    filaEncontrada.style.backgroundColor = '#dbeafe'; // Resaltado azul claro
                    filaEncontrada.style.fontWeight = 'bold';
                    filaEncontrada.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center' // Centra la fila exactamente en la pantalla
                    });
                }, 150);
            }
        }
    }
});