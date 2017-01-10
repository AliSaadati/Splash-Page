(function () {
    "use strict";
    dropdownmenu = document.querySelector(".dropdown");
    var strokes = document.querySelectorAll(".strokes")
        , icon = document.querySelector(".hamburger")
        , dropdownmenu = document.querySelector(".dropdown")
        , dropdownResume = document.querySelector("#dropdown-r");
    var mq = window.matchMedia("(min-width: 720px)");

    function transformStart() {
        if (dropdownmenu.classList.contains("show")) {
            dropdownResume.nextElementSibling.classList.remove("show-rsm");
        }
        strokes[0].classList.toggle("animate0");
        strokes[1].classList.toggle("hide");
        strokes[2].classList.toggle("animate2");
        dropdownmenu.classList.toggle("show");
    }

    function menuCheck() {
        if (mq.matches) {
            dropdownmenu.classList.remove("show");
            dropdownResume.nextElementSibling.classList.remove("show-rsm");
            strokes[0].classList.remove("animate0");
            strokes[1].classList.remove("hide");
            strokes[2].classList.remove("animate2");
        }
    }

    function dropdownResumeCheck() {
        dropdownResume.nextElementSibling.classList.toggle("show-rsm");
    }
    window.addEventListener("resize", menuCheck);
    icon.addEventListener("click", transformStart);
    dropdownResume.addEventListener("click", dropdownResumeCheck);
})();