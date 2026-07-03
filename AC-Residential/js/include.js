// ======================================
// Memuat komponen HTML
// ======================================

async function loadComponent(id, file) {

    const element = document.getElementById(id);

    if (!element) return;

    try {

        const response = await fetch(file);

        if (!response.ok) {
            throw new Error(file);
        }

        const html = await response.text();

        element.innerHTML = html;

    } catch (error) {

        console.log("Komponen tidak ditemukan :", file);

    }

}

// ======================================
// Menentukan lokasi file
// ======================================

const inJobsheet = window.location.pathname.includes("/jobsheets/");

const componentPath = inJobsheet
    ? "../components/"
    : "components/";

// ======================================
// Header
// ======================================

loadComponent("header", componentPath + "header.html");

// ======================================
// Footer
// ======================================

loadComponent("footer", componentPath + "footer.html");

// ======================================
// Sidebar
// ======================================

if (document.getElementById("sidebar")) {

    loadComponent("sidebar", componentPath + "sidebar.html");

}
