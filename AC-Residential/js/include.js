// ======================================
// Memuat komponen HTML
// ======================================

async function loadComponent(id, file) {

    const element = document.getElementById(id);

    if (!element) return;

    const response = await fetch(file);

    const html = await response.text();

    element.innerHTML = html;

}

// Header dan Footer selalu dimuat

loadComponent("header", "components/header.html");

loadComponent("footer", "components/footer.html");

// Sidebar hanya dimuat jika elemennya ada

const sidebar = document.getElementById("sidebar");

if(sidebar){

    loadComponent("sidebar","components/sidebar.html");

}
