// Crear Asistencia
function mostrarCrear() {
    const codigo = document.getElementById('CodigoCrear').value;
    const semestre = document.getElementById('SemestreCrear').value;
    const seccion = document.getElementById('SeccionCrear').value;
    const fecha = document.getElementById('FechaCrear').value;
    const hora = document.getElementById('HoraCrear').value;

    document.getElementById('tex').innerHTML =
        `<b>Asistencia Creada:</b><br>
        Código: ${codigo}<br>
        Semestre: ${semestre}<br>
        Sección: ${seccion}<br>
        Fecha: ${fecha}<br>
        Hora: ${hora}`;
}

// Llenar Asistencia
function mostrarLlenar() {
    const codigo = document.getElementById('CodigoLlenar').value;
    const semestre = document.getElementById('SemestreLlenar').value;
    const seccion = document.getElementById('SeccionLlenar').value;
    const hora = document.getElementById('HoraLlenar').value;

    document.getElementById('tex2').innerHTML =
        `<b>Asistencia Llenada:</b><br>
        Código: ${codigo}<br>
        Semestre: ${semestre}<br>
        Sección: ${seccion}<br>
        Hora: ${hora}`;
}

// Consultar Asistencia
function mostrarConsultar() {
    const codigo = document.getElementById('CodigoConsultar').value;
    const semestre = document.getElementById('SemestreConsultar').value;
    const seccion = document.getElementById('SeccionConsultar').value;
    const hora = document.getElementById('HoraConsultar').value;

    document.getElementById('tex3').innerHTML =
        `<b>Consulta de Asistencia:</b><br>
        Código: ${codigo}<br>
        Semestre: ${semestre}<br>
        Sección: ${seccion}<br>
        Hora: ${hora}`;
}

// Modificar Asistencia
function mostrarModificar() {
    const codigo = document.getElementById('CodigoModificar').value;
    const semestre = document.getElementById('SemestreModificar').value;
    const seccion = document.getElementById('SeccionModificar').value;
    const hora = document.getElementById('HoraModificar').value;
    const tipoDoc = document.getElementById('tipoDocumentoModificar').value;
    const numDoc = document.getElementById('NumeroDocumentoModificar').value;

    document.getElementById('tex4').innerHTML =
        `<b>Asistencia Modificada:</b><br>
        Código: ${codigo}<br>
        Semestre: ${semestre}<br>
        Sección: ${seccion}<br>
        Hora: ${hora}<br>
        Tipo Doc: ${tipoDoc}<br>
        N° Doc: ${numDoc}`;
}