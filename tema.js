const docTheme = document.getElementById("theme");

themeChanger = function () {
    if (docTheme.href == "file:///C:/Users/PICHAU/Documents/GitHub/Site/lightstyle.css") {
            docTheme.href = "file:///C:/Users/PICHAU/Documents/GitHub/Site/darkstyle.css";
        } else {
            docTheme.href = "file:///C:/Users/PICHAU/Documents/GitHub/Site/lightstyle.css";
        }
};
