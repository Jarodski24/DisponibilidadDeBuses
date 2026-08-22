// Arreglo completo con los datos proporcionados
const horariosRutas = {
    guapiles: {
        titulo: "Carrera desde Guápiles",
        subtitulo: "Ruta oficial Guápiles - UCR",
        origenHeader: "Salida Terminal",
        salidas: [
            { terminal: "6:00 a.m.", ucr: "6:20 a.m." },
            { terminal: "6:40 a.m.", ucr: "7:00 a.m." },
            { terminal: "8:10 a.m.", ucr: "8:30 a.m." },
            { terminal: "8:30 a.m.", ucr: "8:50 a.m." },
            { terminal: "9:10 a.m.", ucr: "9:30 a.m." },
            { terminal: "9:30 a.m.", ucr: "9:50 a.m." },
            { terminal: "10:10 a.m.", ucr: "10:30 a.m." },
            { terminal: "11:45 a.m.", ucr: "12:10 m.d." },
            { terminal: "12:10 m.d.", ucr: "12:30 m.d." },
            { terminal: "1:10 p.m.", ucr: "1:30 p.m." },
            { terminal: "2:10 p.m.", ucr: "2:30 p.m." },
            { terminal: "2:30 p.m.", ucr: "2:50 p.m." },
            { terminal: "3:10 p.m.", ucr: "3:30 p.m." },
            { terminal: "4:00 p.m.", ucr: "4:20 p.m." },
            { terminal: "4:10 p.m.", ucr: "4:30 p.m." },
            { terminal: "4:30 p.m.", ucr: "4:50 p.m." },
            { terminal: "5:10 p.m.", ucr: "5:30 p.m." },
            { terminal: "5:50 p.m.", ucr: "6:10 p.m." },
            { terminal: "6:10 p.m.", ucr: "6:30 p.m." },
            { terminal: "7:10 p.m.", ucr: "7:30 p.m." },
            { terminal: "8:10 p.m.", ucr: "8:30 p.m." }
        ]
    },
    jimenez: {
        titulo: "Carrera desde Jiménez",
        subtitulo: "Ruta oficial Jiménez - UCR",
        origenHeader: "Salida Jiménez",
        salidas: [
            { terminal: "6:15 a.m.", ucr: "6:45 a.m." },
            { terminal: "7:00 a.m.", ucr: "7:30 a.m." },
            { terminal: "7:10 a.m.", ucr: "7:40 a.m." },
            { terminal: "7:40 a.m.", ucr: "8:10 a.m." },
            { terminal: "8:15 a.m.", ucr: "8:45 a.m." },
            { terminal: "9:15 a.m.", ucr: "9:45 a.m." },
            { terminal: "9:40 a.m.", ucr: "10:10 a.m." },
            { terminal: "10:15 a.m.", ucr: "10:45 a.m." },
            { terminal: "11:15 a.m.", ucr: "11:45 a.m." },
            { terminal: "12:00 m.d.", ucr: "12:30 m.d." },
            { terminal: "12:15 m.d.", ucr: "12:45 m.d." },
            { terminal: "12:35 m.d.", ucr: "1:05 p.m." },
            { terminal: "1:15 p.m.", ucr: "1:45 p.m." },
            { terminal: "2:15 p.m.", ucr: "2:45 p.m." },
            { terminal: "2:50 p.m.", ucr: "3:20 p.m." },
            { terminal: "4:15 p.m.", ucr: "4:45 p.m." },
            { terminal: "4:30 p.m.", ucr: "5:00 p.m." },
            { terminal: "5:00 p.m.", ucr: "5:30 p.m." },
            { terminal: "5:15 p.m.", ucr: "5:45 p.m." },
            { terminal: "5:50 p.m.", ucr: "6:20 p.m." },
            { terminal: "6:15 p.m.", ucr: "6:45 p.m." },
            { terminal: "7:15 p.m.", ucr: "7:45 p.m." },
            { terminal: "8:15 p.m.", ucr: "8:45 p.m." }
        ]
    },
    siquirres: {
        titulo: "Carrera desde Siquirres",
        subtitulo: "Ruta oficial Siquirres - UCR",
        origenHeader: "Salida Siquirres",
        salidas: [
            { terminal: "5:45 a.m.", ucr: "6:30 a.m." },
            { terminal: "7:00 a.m.", ucr: "7:45 a.m." },
            { terminal: "11:15 a.m.", ucr: "12:00 m.d." },
            { terminal: "2:00 p.m.", ucr: "2:45 p.m." }
        ]
    }
};

function abrirModal(rutaKey) {
    const data = horariosRutas[rutaKey];
    if (!data) return;

    document.getElementById('modal-titulo').textContent = data.titulo;
    document.getElementById('modal-subtitulo').textContent = data.subtitulo;
    document.getElementById('th-origen').textContent = data.origenHeader;

    const tbody = document.getElementById('modal-tabla-body');
    tbody.innerHTML = data.salidas.map(item => `
        <tr>
            <td>${item.terminal}</td>
            <td>${item.ucr}</td>
        </tr>
    `).join('');

    document.getElementById('modal-horario').style.display = 'flex';
}

function cerrarModal() {
    document.getElementById('modal-horario').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('modal-horario');
    if (event.target === modal) {
        cerrarModal();
    }
};

function filtrarRuta() {
    const seleccion = document.getElementById('select-ruta').value;
    if (seleccion) {
        abrirModal(seleccion);
    }
}