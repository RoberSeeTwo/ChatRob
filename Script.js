function mostrarCuadroTexto() {
    var botonPrincipal = document.getElementById("botonPrincipal");
    var cuadroTextoContainer = document.getElementById("cuadroTextoContainer");

    // Deslizar el botón principal hacia arriba y ocultarlo
    botonPrincipal.style.transition = "transform 0.4s, opacity 0.4s";
    botonPrincipal.style.transform = "translateY(-50px)";
    botonPrincipal.style.opacity = "0";

    // Mostrar el cuadro de texto después de la animación
    setTimeout(function() {
        botonPrincipal.style.display = "none";
        cuadroTextoContainer.style.display = "flex";
        cuadroTextoContainer.style.transition = "transform 0.4s, opacity 0.4s";
        cuadroTextoContainer.style.transform = "translateY(0)";
        cuadroTextoContainer.style.opacity = "1";
    }, 400);
}

function guardarTexto() {
    var cuadroTexto = document.getElementById("cuadroTexto").value;
    var listaComentarios = document.getElementById("listaComentarios");

    if (cuadroTexto.trim() !== "") {
        var nuevoComentario = document.createElement("li");
        nuevoComentario.textContent = cuadroTexto;
        listaComentarios.appendChild(nuevoComentario);

        document.getElementById("cuadroTexto").value = ""; // Limpiar el cuadro de texto
    } else {
        alert("El cuadro de texto no puede estar vacío.");
    }
}
