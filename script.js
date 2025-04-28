document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector("header");
    const navContainer = document.querySelector(".container .d-flex");
    const elementsToHide = document.querySelectorAll(".nav-linkLight, .header-middle, .header-bottom, .divider-light");
    const navbarLogo = document.createElement("img");

    navbarLogo.src = "placeholder.png"; // Percorso dell'immagine
    navbarLogo.alt = "Logo Navbar";
    navbarLogo.classList.add("navbar-logo");

    let lastScrollY = 0;

    function updateNavbarOnScroll() {
        if (window.scrollY > navbar.offsetHeight) {
            navbar.classList.add("scrolled");
            elementsToHide.forEach(element => element.style.display = "none"); // Nasconde gli elementi
            if (navContainer && !navContainer.contains(navbarLogo)) {
                navContainer.insertBefore(navbarLogo, navContainer.children[1]); // Inserisce il logo al centro
            }
        } else {
            navbar.classList.remove("scrolled");
            elementsToHide.forEach(element => element.style.display = ""); // Ripristina gli elementi
            if (navContainer && navContainer.contains(navbarLogo)) {
                navContainer.removeChild(navbarLogo); // Rimuove il logo
            }
        }
    }

    function updateNavbarOnResize() {
        // Mantieni la navbar scrolled visibile se la pagina è già scorsa
        if (window.scrollY > navbar.offsetHeight) {
            navbar.classList.add("scrolled");
            elementsToHide.forEach(element => element.style.display = "none");
            if (navContainer && !navContainer.contains(navbarLogo)) {
                navContainer.insertBefore(navbarLogo, navContainer.children[1]);
            }
        } else {
            navbar.classList.remove("scrolled");
            elementsToHide.forEach(element => element.style.display = "");
            if (navContainer && navContainer.contains(navbarLogo)) {
                navContainer.removeChild(navbarLogo);
            }
        }
    }

    window.addEventListener("scroll", updateNavbarOnScroll);
    window.addEventListener("resize", updateNavbarOnResize); // Aggiungi il listener per il ridimensionamento

    // Esegui l'aggiornamento iniziale per gestire il ridimensionamento all'avvio
    updateNavbarOnResize();
});
