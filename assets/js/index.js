const availableThemes = ["default", "mono"];
const stylesheet = document.styleSheets[0];
const themeSwitcher = document.getElementById("theme-switcher");
const linkTag = document.getElementById("css-link");

// Stocker le thème localement pour éviter les multiples appels à localStorage
let currentTheme = localStorage.getItem("theme");

if (!availableThemes.includes(currentTheme)) {
    currentTheme = "default";
    localStorage.setItem("theme", currentTheme);
}

function loadTheme() {
    // Dynamiser le chargement du thème sans recharger la page
    let themeUrl = "";
    
    switch(currentTheme) {
        case "default":
            themeUrl = "dynamic.css";
            break;
        case "mono":
            themeUrl = "mono.css";
            break;
    }
    
        let tag = linkTag.href.split("/");
        tag[tag.length-1] = themeUrl
        console.log(tag.join("/"))
        linkTag.href = tag.join("/");
}

window.addEventListener("load", () => {
    loadTheme();    
});

themeSwitcher.addEventListener("click", () => {
    currentTheme = (currentTheme === "default") ? "mono" : "default";
    localStorage.setItem("theme", currentTheme);
    loadTheme();
    // Pas de rechargement de page nécessaire, on gère dynamiquement le changement
});
