mouseOver = function() {
    if (document.getElementById("theme").href == "lightstyle.css") {
        document.getElementById("lamp").src = "icons/lamp-off.png";
    } else {
        document.getElementById("lamp").src = "icons/lamp-dark.png";
    }
}

mouseOut = function() {
    if (document.getElementById("theme").href == "lightstyle.css") {
        document.getElementById("lamp").src = "icons/lamp.png";
    } else {
        document.getElementById("lamp").src = "icons/lamp-dark-off.png";
    }
}