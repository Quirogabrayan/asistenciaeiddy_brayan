// Variable para almacenar el nombre del departamento
let nombreDepartamento = "Ingeniería";

// Consultar Departamento
function consultarDepartamento() {
    document.getElementById("tex").innerHTML = `Nombre del Departamento: <b>${nombreDepartamento}</b>`;
}

// Modificar Departamento
function modificarDepartamento() {
    const nuevoNombre = document.getElementById("nuevoDepartamento").value.trim();
    if (nuevoNombre) {
        nombreDepartamento = nuevoNombre;
        document.getElementById("tex2").innerHTML = "Departamento Modificado Correctamente.";
        consultarDepartamento(); 
    } else {
        document.getElementById("tex2").innerHTML = "Por favor ingresa un Nombre válido.";
    }
}

// Registrar Asignatura
function registrarAsignatura() {
    const nombreAsignatura = document.getElementById("nombreAsignatura").value.trim();
    if (nombreAsignatura) {
        document.getElementById("tex3").innerHTML = `Asignatura <b>${nombreAsignatura}</b> Registrada en el Departamento <b>${nombreDepartamento}</b>.`;
        document.getElementById("result").innerHTML = ""; 
    } else {
        document.getElementById("tex3").innerHTML = "Por favor ingresa el Nombre de la Asignatura.";
        document.getElementById("result").innerHTML = "";
    }
}