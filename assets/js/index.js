// const availableThemes = ["default", "mono"];
// const stylesheet = document.styleSheets[0];


// if(!availableThemes.includes(localStorage.getItem("theme")))
// {
//     localStorage.clear()
// }

// function removeRule(url){
//     const stylesheet = document.styleSheets[0]; // Sélectionne la première feuille de style

// // Parcourt les règles de la feuille de style
// for (let i = 0; i < stylesheet.cssRules.length; i++) {
//   const rule = stylesheet.cssRules[i];
  
//   // Vérifie si c'est une règle @import et si l'URL correspond à './dynamic.css'
//   if (rule instanceof CSSImportRule && rule.href.includes(url)) {
//     stylesheet.deleteRule(i); // Supprime la règle à l'index i
//     break; // Arrête après suppression
//   }
// }

// }

// function checkTheme(){
//     if(!localStorage.getItem("theme")){
//         localStorage.setItem("theme", "default")
//         console.log("Aucun theme n'a été défini. Le thème sera donc par défaut")
//     } else {
//         console.log(`${localStorage.getItem("theme")} actif.`)
//     }    
// }

// function loadTheme(){
//     switch(localStorage.getItem("theme")){
//         case "default":
//             console.log("Default loading...")
//             document.styleSheets[0].insertRule("@import url('./dynamic.css')");
//             removeRule("./mono.css");
//         break;
    
//         case "mono":
//             console.log("Mono loading...")
//             document.styleSheets[0].insertRule("@import url('./mono.css')");
//             removeRule("./dynamic.css");
//         break;
//     }
// }

// const themeSwitcher = document.getElementById("theme-switcher");

// function switchTheme () {
//     console.log(localStorage.getItem("theme") === "default" ? true : false)

//     localStorage.getItem("theme") === "default" ? localStorage.setItem("theme", "mono") : localStorage.setItem("theme", "default")
//     loadTheme();
//     checkTheme()
// }


// window.addEventListener("load", (e) => {
//     loadTheme()
//     console.log("theme")
//     checkTheme()
// })

// themeSwitcher.addEventListener("click", (e) => {
//     switchTheme();
//     location.reload()
// });