document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector("#nav");
    const abrir = document.querySelector("#abrir");
    const cerrar = document.querySelector("#cerrar");
    const enlaces = document.querySelectorAll("#nav a"); // Seleccionar todos los enlaces dentro del menú
    
    abrir.addEventListener("click", () => {
        nav.classList.add("visible");
    });

    cerrar.addEventListener("click", () => {
        nav.classList.remove("visible");
    });

    // Agregar evento de clic a cada enlace del menú para cerrar el menú después de hacer clic en ellos
    enlaces.forEach(enlace => {
        enlace.addEventListener("click", () => {
            nav.classList.remove("visible");
        });
    });
});
