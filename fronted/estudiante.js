// Utilidad para obtener y guardar estudiantes en localStorage
function getEstudiantes() {
    return JSON.parse(localStorage.getItem('estudiantes') || '[]');
}
function setEstudiantes(estudiantes) {
    localStorage.setItem('estudiantes', JSON.stringify(estudiantes));
}

// Consultar estudiante en departamento
function consultarEstudianteDepto() {
    const tipo = document.getElementById('tipdocumentoEDepto').value.trim();
    const num = document.getElementById('numdocumentoEDepto').value.trim();
    const estudiantes = getEstudiantes();
    const est = estudiantes.find(e => e.tipo === tipo && e.num === num);
    const p = document.getElementById('consultarEDep');
    if (est) {
        p.textContent = `Estudiante: ${est.nombre || 'Sin nombre'}, Departamento: ${est.departamento || 'Sin departamento'}`;
    } else {
        p.textContent = 'Estudiante no encontrado en departamento.';
    }
}

// Modificar estudiante en departamento
function modificarEstudianteDepto() {
    const tipo = document.getElementById('tipdocumentod').value.trim();
    const tipoNuevo = document.getElementById('tipdocumentonv').value.trim();
    let estudiantes = getEstudiantes();
    const idx = estudiantes.findIndex(e => e.tipo === tipo);
    const p = document.getElementById('modificarEDep');
    if (idx !== -1) {
        estudiantes[idx].tipo = tipoNuevo;
        setEstudiantes(estudiantes);
        p.textContent = 'Tipo de documento modificado correctamente.';
    } else {
        p.textContent = 'Estudiante no encontrado.';
    }
}

// Adicionar estudiante en departamento
function adicionarEstudianteDepto() {
    // Puedes agregar más campos según lo que pidas en el HTML
    const departamento = document.getElementById('departamenton').value.trim();
    // Ejemplo: podrías pedir tipo, num, nombre, etc.
    const tipo = prompt('Tipo de documento del estudiante:');
    const num = prompt('Número de documento del estudiante:');
    const nombre = prompt('Nombre del estudiante:');
    if (!departamento || !tipo || !num || !nombre) {
        document.getElementById('adicionarEDep').textContent = 'Todos los campos son obligatorios.';
        return;
    }
    let estudiantes = getEstudiantes();
    if (estudiantes.find(e => e.tipo === tipo && e.num === num)) {
        document.getElementById('adicionarEDep').textContent = 'El estudiante ya existe.';
        return;
    }
    estudiantes.push({ tipo, num, nombre, departamento });
    setEstudiantes(estudiantes);
    document.getElementById('adicionarEDep').textContent = 'Estudiante adicionado correctamente.';
}

// Adicionar estudiante en asignatura
function adicionarAsignatura() {
    const tipo = document.getElementById('tipdocumentoa').value.trim();
    const num = document.getElementById('numdocumentoa').value.trim();
    const semestre = document.getElementById('semestre').value.trim();
    const codigo = document.getElementById('codigo').value.trim();
    const seccion = document.getElementById('seccion').value.trim();
    if (!tipo || !num || !semestre || !codigo || !seccion) {
        document.getElementById('adicionarAsig').textContent = 'Todos los campos son obligatorios.';
        return;
    }
    let estudiantes = getEstudiantes();
    let est = estudiantes.find(e => e.tipo === tipo && e.num === num);
    if (!est) {
        est = { tipo, num, asignaturas: [] };
        estudiantes.push(est);
    }
    if (!est.asignaturas) est.asignaturas = [];
    est.asignaturas.push({ semestre, codigo, seccion });
    setEstudiantes(estudiantes);
    document.getElementById('adicionarAsig').textContent = 'Asignatura adicionada correctamente.';
}

// Consultar estudiante en asignatura
function consultarEstudianteAsignatura() {
    const tipo = document.getElementById('tipdocumentoAsig').value.trim();
    const num = document.getElementById('numdocumentoAsig').value.trim();
    const estudiantes = getEstudiantes();
    const est = estudiantes.find(e => e.tipo === tipo && e.num === num);
    const p = document.getElementById('consultarEAsig');
    if (est && est.asignaturas && est.asignaturas.length > 0) {
        p.textContent = 'Asignaturas: ' + est.asignaturas.map(a => `${a.codigo} (Semestre ${a.semestre}, Sección ${a.seccion})`).join(', ');
    } else {
        p.textContent = 'No se encontraron asignaturas para este estudiante.';
    }
}