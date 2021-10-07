const docTheme = document.getElementById("theme");
const lightStyle = "lightstyle.css";
const darkStyle = "darkstyle.css";
// Variáveis para salvar o path para os temas lightstyle e darkstyle

function darkIcon() {
    document.getElementById("me-icon").src = "icons/me-icon.jpeg";

    document.getElementById("lamp").src = "icons/lamp-dark-off.png";

    document.getElementById("github").src = "iconesredesocial/github-white.png";

    document.getElementById("telegram").src = "iconesredesocial/telegram-white.png";

    document.getElementById("instagram").src = "iconesredesocial/instagram-white.png";

    document.getElementById("linkedin").src = "iconesredesocial/linkedin-white.png";
}

function lightIcon() {
    document.getElementById("me-icon").src = "icons/me-glasses-icon.jpeg";

    document.getElementById("lamp").src = "icons/lamp.png";

    document.getElementById("github").src = "iconesredesocial/github.png";

    document.getElementById("telegram").src = "iconesredesocial/telegram.png";

    document.getElementById("instagram").src = "iconesredesocial/instagram.png";

    document.getElementById("linkedin").src = "iconesredesocial/linkedin.png";
}

themeChanger = function () {
    alert(getElementById("github").src)
    if (docTheme.href == lightStyle) {
        docTheme.href = darkStyle;
        darkIcon();
    } else {
        docTheme.href = lightStyle;
        lightIcon();
    }
};