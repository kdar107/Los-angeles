document.addEventListener('DOMContentLoaded', () => {

    // --- FUNCIONALIDAD DE AÑO AUTOMÁTICO ---
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- FUNCIONALIDAD DE MENÚ RESPONSIVO ---
    const toggleMenu = document.getElementById("menuToggle");
    const mainMenu = document.getElementById("main-menu");

    if (toggleMenu && mainMenu) {
        toggleMenu.addEventListener("click", () => {
            mainMenu.classList.toggle("open");
        });
    }

    // --- FUNCIONALIDAD SLIDER ---
    const slider = document.getElementById("slider");
    const nextButton = document.getElementById("next");
    const prevButton = document.getElementById("prev");

    if (slider && nextButton && prevButton) {
        const totalSlides = slider.children.length;
        let index = 0;

        function move(direction) {
            index = (index + direction + totalSlides) % totalSlides;
            slider.style.transform = translateX(-${index * 100}%);
        }
        
        // Asignación de botones
        nextButton.addEventListener("click", () => move(1));
        prevButton.addEventListener("click", () => move(-1));

        // Auto Slider
        setInterval(() => move(1), 6000);
    }

    // --- FUNCIONALIDAD DE TABS (Misión/Visión/Valores) ---
    const tabs = document.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".tab-content");

    if (tabs.length > 0) {
        // Asegurar que la primera pestaña esté activa al cargar
        // Tu HTML ya tiene la primera activa, pero esto es por seguridad
        // Se asegura que si hay contenido, solo el primero se vea al inicio
        // if (contents.length > 0) {
        //     contents[0].classList.add("active");
        // }
        
        tabs.forEach(tab => {
            tab.addEventListener("click", () => {
                tabs.forEach(t => t.classList.remove("active"));
                contents.forEach(c => c.classList.remove("active"));

                tab.classList.add("active");
                // Usa dataset.tab para obtener el valor de data-tab
                document.getElementById(tab.dataset.tab).classList.add("active");
            });
        });
    }


    // --- FUNCIONALIDAD DEL FORMULARIO DE CONTACTO ---
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Gracias por contactarnos. Te responderemos pronto.");
            e.target.reset(); // Limpia los campos
        });
    }

});