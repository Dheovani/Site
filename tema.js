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
    alert(document.getElementById("theme").href)
    if (document.getElementById("theme").href == "lightstyle.css") {
        document.getElementById("theme").href = "darkstyle.css";
        darkIcon();
    } else {
        document.getElementById("theme").href = "lightstyle.css";
        lightIcon();
    }
};