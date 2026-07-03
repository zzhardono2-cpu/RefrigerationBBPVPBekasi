// ======================================
// Memuat komponen HTML
// ======================================

async function loadComponent(id, file){

    const element = document.getElementById(id);

    if(!element) return;

    const response = await fetch(file);

    if(!response.ok){

        console.error("Tidak dapat memuat:", file);

        return;

    }

    const html = await response.text();

    element.innerHTML = html;

}

// ======================================
// Menentukan lokasi file
// ======================================

const basePath =
location.pathname.includes("/jobsheets/")
?
"../"
:
"";

// ======================================
// Header
// ======================================

loadComponent(
    "header",
    basePath + "components/header.html"
);

// ======================================
// Footer
// ======================================

loadComponent(
    "footer",
    basePath + "components/footer.html"
);

// ======================================
// Sidebar
// ======================================

const sidebar=document.getElementById("sidebar");

if(sidebar){

loadComponent(
"sidebar",
basePath+"components/sidebar.html"
);

}
