function setTheme() {
    var themeValue = window.localStorage.getItem("themeVal");
    if (themeValue === null | themeValue === "default") {
        document.getElementById("resetthemeSelection").checked = true;
        setDefaultBodyTheme();
        let themeColor = document.getElementsByTagName("div")[0].getAttribute("class");
        if (themeColor == "darktheme") {
            setLinkTheme('linkdarktheme');
            return;
        }
        else if (themeColor == "lighttheme") {
            setLinkTheme('linklighttheme');
            return;
        }
        return;
    }
    else if (themeValue === "darktheme") {
        darkThemeSetting('darktheme');
        setLinkTheme('linkdarktheme');
        return;
    }
    else if (themeValue === "lighttheme") {
        lightThemeSetting('lighttheme');
        setLinkTheme('linklighttheme');
        return;
    }
}
function lightThemeSetting(theme) {
    setBodyTheme(theme);
    document.getElementById("lightthemeSelection").checked = true;
}
function darkThemeSetting(theme) {
    setBodyTheme(theme);
    document.getElementById("darkthemeSelection").checked = true;
}
function setDefaultBodyTheme() {
    var defaultTheme = document.getElementsByTagName('div')[0].getAttribute("class");
    var setTheme = document.getElementsByTagName('body')[0].getAttribute("class");
    var elem = document.getElementsByTagName('body')[0];
    if (elem.classList.contains(defaultTheme))
        return;
    else {
        elem.classList.remove(setTheme);
        elem.classList.add(defaultTheme);
    }
}
function setBodyTheme(theme) {
    var setTheme = document.getElementsByTagName('body')[0].getAttribute("class");
    var elem = document.getElementsByTagName('body')[0];
    if (elem.classList.contains(theme))
        return;
    else {
        elem.classList.remove(setTheme);
        elem.classList.add(theme);
    }
}
function setLinkTheme(theme) {
    if (document.links.length != 0)
        var linkTheme = document.links[0].getAttribute("class");
    for (let i = 0, l = document.links.length; i < l; ++i) {
        let lnk = document.links[i];
        if (lnk.classList.contains(theme))
            return;
        else {
            lnk.classList.remove(linkTheme);
            lnk.classList.add(theme);
        }
    }
}
function setDarkTheme() {
    window.localStorage.setItem("themeVal", "darktheme");
    setTheme();
}
function setLightTheme() {
    window.localStorage.setItem("themeVal", "lighttheme");
    setTheme();
}
function resetTheme() {
    window.localStorage.removeItem("themeVal");
    setTheme();
}