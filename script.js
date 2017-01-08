(function () {
    "use strict";
    dropdownmenu = document.querySelector(".dropdown");
    var strokes = document.querySelectorAll(".strokes")
        , icon = document.querySelector(".menu")
        , dropdownmenu = document.querySelector(".dropdown");
    var mq = window.matchMedia("(min-width: 720px)");

    function transformStart() {
        strokes[0].classList.toggle("animate0");
        strokes[1].classList.toggle("hide");
        strokes[2].classList.toggle("animate2");
        dropdownmenu.classList.toggle("show");
    }

    function menuCheck() {
        if (mq.matches) {
            dropdownmenu.classList.remove("show");
            strokes[0].classList.remove("animate0")
            strokes[1].classList.remove("hide");
            strokes[2].classList.remove("animate2");
        }
    }
    window.addEventListener("resize", menuCheck);
    icon.addEventListener("click", transformStart);
})();