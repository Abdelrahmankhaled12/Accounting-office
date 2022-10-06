let btnn = document.querySelector(".scroll");
let section = document.querySelector(".numbers");
let sect = document.querySelector(".about");
let x = document.querySelectorAll(".number");
let y = document.querySelectorAll(".num");
let started = !1;
let start = !1;
function startCount(y) {
    let goal = y.dataset.goal;
    let count = setInterval(() => {
        y.textContent++;
        if (y.textContent == goal) {
            clearInterval(count);
        }
    }, 3000 / goal);
}
function startCounnt(y) {
    let goal = y.dataset.goal;
    let count = setInterval(() => {
        y.textContent++;
        if (y.textContent == goal) {
            clearInterval(count);
        }
    }, 0.001);
}
window.onscroll = function () {
    if (window.scrollY >= section.offsetTop - 500) {
        if (!started) {
            x.forEach((num) => startCount(num));
        }
        started = !0;
    }
    if (window.scrollY >= sect.offsetTop - 500) {
        if (!start) {
            y.forEach((num) => startCounnt(num));
        }
        start = !0;
    }
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

