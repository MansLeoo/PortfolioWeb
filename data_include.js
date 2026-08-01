// Charge dynamiquement les fragments HTML (header, footer, etc.)
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-include]").forEach(el => {
        const file = el.getAttribute("data-include");
        fetch(file)
            .then(res => {
                if (!res.ok) throw new Error("Erreur de chargement: " + file);
                return res.text();
            })
            .then(html => { el.innerHTML = html; })
            .catch(err => console.error(err));
    });
});