const docTheme = document.getElementById("theme");
const meIcon = document.getElementById("me-icon");
const lamp = document.getElementById("lamp");
const gitHub = document.getElementById("github");
const telegram = document.getElementById("telegram");
const instagram = document.getElementById("instagram");
const linkedin = document.getElementById("linkedin");

const lightStyle = "file:///C:/Users/PICHAU/Documents/GitHub/Site/lightstyle.css";
const darkStyle = "file:///C:/Users/PICHAU/Documents/GitHub/Site/darkstyle.css";
// Variáveis para salvar o path para os temas lightstyle e darkstyle

function darkIcon() {
    meIcon.src = "file:///C:/Users/PICHAU/Documents/GitHub/Site/icons/me-icon.jpeg";
}

function lightIcon() {
    meIcon.src = "file:///C:/Users/PICHAU/Documents/GitHub/Site/icons/me-glasses-icon.jpeg";
}

themeChanger = function () {
    if (docTheme.href == lightStyle) {
        docTheme.href = darkStyle;
        darkIcon();
    } else {
        docTheme.href = lightStyle;
        lightIcon();
    }
};
