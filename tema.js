const docTheme = document.getElementById("theme");
const lightStyle = "file:///C:/Users/PICHAU/Documents/GitHub/Site/lightstyle.css";
const darkStyle = "file:///C:/Users/PICHAU/Documents/GitHub/Site/darkstyle.css";
// Variáveis para salvar o path para os temas lightstyle e darkstyle

function darkIcon() {
    document.getElementById("me-icon").src = "file:///C:/Users/PICHAU/Documents/GitHub/Site/icons/me-icon.jpeg";

    document.getElementById("lamp").src = "file:///C:/Users/PICHAU/Documents/GitHub/Site/icons/lamp-dark-off.png";

    document.getElementById("github").src = "file:///C:/Users/PICHAU/Documents/GitHub/Site/iconesredesocial/github-white.png";

    document.getElementById("telegram").src = "file:///C:/Users/PICHAU/Documents/GitHub/Site/iconesredesocial/telegram-white.png";

    document.getElementById("instagram").src = "file:///C:/Users/PICHAU/Documents/GitHub/Site/iconesredesocial/instagram-white.png";

    document.getElementById("linkedin").src = "file:///C:/Users/PICHAU/Documents/GitHub/Site/iconesredesocial/linkedin-white.png";
}

function lightIcon() {
    document.getElementById("me-icon").src = "file:///C:/Users/PICHAU/Documents/GitHub/Site/icons/me-glasses-icon.jpeg";

    document.getElementById("lamp").src = "file:///C:/Users/PICHAU/Documents/GitHub/Site/icons/lamp.png";

    document.getElementById("github").src = "file:///C:/Users/PICHAU/Documents/GitHub/Site/iconesredesocial/github.png";

    document.getElementById("telegram").src = "file:///C:/Users/PICHAU/Documents/GitHub/Site/iconesredesocial/telegram.png";

    document.getElementById("instagram").src = "file:///C:/Users/PICHAU/Documents/GitHub/Site/iconesredesocial/instagram.png";

    document.getElementById("linkedin").src = "file:///C:/Users/PICHAU/Documents/GitHub/Site/iconesredesocial/linkedin.png";
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