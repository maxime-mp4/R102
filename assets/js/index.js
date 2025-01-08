const availableThemes = ["default", "mono"];
const stylesheet = document.styleSheets[0];
const themeSwitcher = document.getElementById("theme-switcher");


if(!availableThemes.includes(localStorage.getItem("theme"))){
    localStorage.clear()
}

function removeRule(url){
    const stylesheet = document.styleSheets[0];

    for (let i = 0; i < stylesheet.cssRules.length; i++) {
        if (stylesheet.cssRules[i] instanceof CSSImportRule && stylesheet.cssRules[i].href.includes(url)) {
        break;
        }
    }
}

function checkTheme(){
    if(!localStorage.getItem("theme")){
        localStorage.setItem("theme", "default")
    }   
}

function loadTheme(){
    switch(localStorage.getItem("theme")){
        case "default":
            document.styleSheets[0].insertRule("@import url('./dynamic.css')");
        break;
    
        case "mono":
            document.styleSheets[0].insertRule("@import url('./mono.css')");
        break;
    }
}

function switchTheme () {
    localStorage.getItem("theme") === "default" ? localStorage.setItem("theme", "mono") : localStorage.setItem("theme", "default");
    checkTheme();
    loadTheme();
}


window.addEventListener("load", (e) => {
    checkTheme();
    loadTheme();
})

themeSwitcher.addEventListener("click", (e) => {
    switchTheme();
    location.reload()
});