
function mostrar(){
    document.getElementById("OcultarForm").style.display = "block";
}
function ocultar(){
    document.getElementById("OcultarForm").style.display = "none";
}

const PrevBrn = document.querySelectorAll(".btn-atrás");
const SigBtn = document.querySelectorAll(".btn-siguiente");
const Progreso = document.getElementById("progreso");
const PasosForm =document.querySelectorAll(".Formulariopaso1");

let NumPasosDelForm = 0;

SigBtn.forEach((btn) => {
 btn.addEventListener("click", () => {
    NumPasosDelForm++;
    updatepasosForm();

 });
});

function updatepasosFor() {
    PasosForm[NumPasosDelForm].classList.add("formulario-pasos-activo");

}
