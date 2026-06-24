const botones = document.querySelectorAll(".filtro");
const productos = document.querySelectorAll(".producto");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const filtro = boton.getAttribute("data-filtro");

        productos.forEach(producto => {
            if (filtro === "todos" || producto.getAttribute("data-categoria") === filtro) {
                producto.classList.remove("d-none");
            } else {
                producto.classList.add("d-none");
            }
        });
    });
});
