// Espera a que todo el contenido del DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {

    // Selecciona el contenedor donde se insertará el navbar
    const navbarElement = document.querySelector(".navbar-container");

    // Verifica que el contenedor del navbar exista en el DOM
    if (navbarElement) {

        // Carga el archivo externo HTML que contiene la estructura del navbar
        fetch("/frontend/public/views/components/navbar.html")
            .then(response => response.text()) // Convierte la respuesta en texto plano (HTML)
            .then(data => {
                // Inserta el contenido HTML del navbar en el contenedor correspondiente
                navbarElement.innerHTML = data;

                // === Lógica para resaltar el enlace activo en el navbar ===

                // Obtiene el nombre del archivo de la ruta actual (por ejemplo: "clientes.html")
                // Si no hay archivo especificado ("/"), se asume que es "index.html"
                const currentPage = window.location.pathname.split("/").pop() || "index.html";

                // Selecciona todos los enlaces del navbar que usarán la clase personalizada
                const navLinks = navbarElement.querySelectorAll(".navbar__link");

                // Recorre cada enlace del navbar
                navLinks.forEach(link => {
                    // Verifica si el href del enlace incluye el nombre de la página actual
                    if (link.getAttribute("href").includes(currentPage)) {
                        // Si es la página actual, se le asigna la clase 'active' para destacar visualmente
                        link.classList.add("active");
                    }
                });
            })
            // Muestra un error en consola si falla la carga del navbar
            .catch(error => console.error("Error cargando el navbar", error));
    }
});
