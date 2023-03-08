
// Alert que avisa que estas por salir de la pagina hacia otro sitio (redes sociales)

const btnRedes = document.querySelector ("#iconoPie");

btnRedes.addEventListener ("click" , alerta =>{
    alert("Usted esta por salir de esta pagina");
});

// Modal para informacion de contacto

const botonModalCentro = document.querySelector("#boton-modal-centro");
const modalCentro = document.querySelector("#modal-centro");
const cerrarModalCentro = document.querySelector("#cerrar-modal-centro");

botonModalCentro.addEventListener ("click", (Mostrar) => {
    modalCentro.classList.add("active");
}); 

cerrarModalCentro.addEventListener("click", (Cerrar) => {
    modalCentro.classList.remove("active");
});

