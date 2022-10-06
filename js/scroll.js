let btnn = document.querySelector(".scroll");
window.onscroll = function () {
    if (window.scrollY >= 400) {
        btnn.style.display = "block";
    } else {
        btnn.style.display = "none";
    }
};
let btn = document.querySelectorAll(".btn");
let div = document.querySelector(".page-2");
let btnExist = document.querySelector(".btn-close");
let btnBack = document.querySelector("#btn-back");
let addDis = document.querySelector(".add-dis");
btn.forEach((x) => {
    x.onclick = function () {
        div.classList.add("active");
        btnBack.style.display = "block";
        addDis.style.display = "none";
    };
});
window.onclick = function () {
    btnn.onclick = function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    btnBack.onclick = function () {
        div.classList.remove("active");
        btnBack.style.display = "none";
        addDis.style.display = "block";
    };
    btnExist.onclick = function () {
        div.classList.remove("active");
        btnBack.style.display = "none";
        addDis.style.display = "block";
    };
};
new WOW().init();

