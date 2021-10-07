mouseOver = function() {
    if (document.getElementById("theme").href == "file:///C:/Users/PICHAU/Documents/GitHub/Site/lightstyle.css") {
        document.getElementById("lamp").src = "file:///C:/Users/PICHAU/Documents/GitHub/Site/icons/lamp-off.png";
    } else {
        document.getElementById("lamp").src = "file:///C:/Users/PICHAU/Documents/GitHub/Site/icons/lamp-dark.png";
    }
}

mouseOut = function() {
    if (document.getElementById("theme").href == "file:///C:/Users/PICHAU/Documents/GitHub/Site/lightstyle.css") {
        document.getElementById("lamp").src = "file:///C:/Users/PICHAU/Documents/GitHub/Site/icons/lamp.png";
    } else {
        document.getElementById("lamp").src = "file:///C:/Users/PICHAU/Documents/GitHub/Site/icons/lamp-dark-off.png";
    }
}