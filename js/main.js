function menu() {
    var wrap = document.getElementById("wrap");
    var mobile__menu = document.getElementById("mobile__menu");

    if (mobile__menu.style.marginRight == "100vw") {
        mobile__menu.style.margin = "0px"
        mobile__menu.style.left = "0";
        wrap.style.margin = "20px";
        wrap.style.transition = "all 1s";
        wrap.style.boxShadow = "0px 5px 5px #aaaaaa";
    } else {
        mobile__menu.style.marginRight = "100vw"
        mobile__menu.style.marginLeft = "-100vw"
        mobile__menu.style.transition = "all 1s";
        wrap.style.margin = "0px";
        wrap.style.boxShadow = "none";
    }
}
