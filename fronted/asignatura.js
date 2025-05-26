// Función para consultar asignatura
function ConsultarAsignatura() {
    const Codigo = document.getElementById("CodigoConsultar")?.value || "";
    const Semestre = document.getElementById("SemestreConsultar")?.value || "";
    const Seccion = document.getElementById("SeccionConsultar")?.value || "";
    
    
    if (!Codigo || !Semestre || !Seccion) {
        document.getElementById("texConsultar").textContent = "Por favor, complete todos los campos.";
        return;
    }
    
    
    const resultado = `Asignatura: ${Codigo}, Semestre: ${Semestre}, Sección: ${Seccion}`;
    
    document.getElementById("texConsultar").textContent = resultado;  
}
    
// Función para modificar asignatura
function ModificarAsignatura() {
    const Codigo = document.getElementById("CodigoModificar")?.value || "";
    const Semestre = document.getElementById("SemestreModificar")?.value || "";
    const Seccion = document.getElementById("SeccionModificar")?.value || "";
    
   
    if (!Codigo || !Semestre || !Seccion) {
        document.getElementById("texModificar").textContent = "Por favor, complete todos los campos.";
        return;
    }
    
    
    const resultado = `Asignatura modificada: ${Codigo}, Semestre: ${Semestre}, Sección: ${Seccion}`;
    
    
        document.getElementById("texModificar").textContent = resultado;  
}
    
// Función para registrar asignatura
function RegistrarAsignatura() {
    const Nombre = document.getElementById("NombreRegistrar")?.value || "";
    const Codigo = document.getElementById("CodigoRegistrar")?.value || "";
    const Semestre = document.getElementById("SemestreRegistrar")?.value || "";
    const Seccion = document.getElementById("SeccionRegistrar")?.value || "";
    const Creditos = document.getElementById("CreditosRegistrar")?.value || "";
    
    // Validar que los campos no estén vacíos
    if (!Nombre || !Codigo || !Semestre || !Seccion || !Creditos) {
        document.getElementById("texRegistrar").textContent = "Por favor, complete todos los campos.";
        return;
    }
    

    const resultado = `Asignatura registrada: ${Nombre}, Código: ${Codigo}, Semestre: ${Semestre}, Sección: ${Seccion}, Créditos: ${Creditos}`;

    
    document.getElementById("texRegistrar").textContent = resultado;
}