'use strict';

var lang_button = document.getElementById("lang-switch");
var current_lang = "zhcn";

function switchLang () {
    [].forEach.call(document.querySelectorAll(".lang-" + current_lang), function (el) {
        el.style.display = 'none';
    });
    if (current_lang === "zhcn") {
        current_lang = "enus";
        lang_button.textContent = "切换语言";
    }
    else {
        current_lang = "zhcn";
        lang_button.textContent = "Switch Language";
    }
    [].forEach.call(document.querySelectorAll(".lang-" + current_lang), function (el) {
        el.style.display = '';
    });
}

lang_button.addEventListener("click", switchLang, false);