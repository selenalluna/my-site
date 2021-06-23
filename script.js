let btnRightDE = document.querySelector(".btnRightDE");
let btnLeftDE = document.querySelector(".btnLeftDE")

let btnRightDR = document.querySelector(".btnRightDR");
let btnLeftDR = document.querySelector(".btnLeftDR")

let slidesDE = document.querySelectorAll(".sliderDesign");
let slidesDR = document.querySelectorAll(".sliderDrawing");

let i = 0;
let j = 0;

btnRightDE.addEventListener("click", function () {
    ++i
    if (i >= slidesDE.length) {
        slidesDE[i-1].classList.remove("block");
        i = 0;
        slidesDE[i].classList.add("block");
    } else {
        slidesDE[i-1].classList.remove("block");
        slidesDE[i].classList.add("block");
    }
})

btnLeftDE.addEventListener("click", function () {
    --i
    if (i < 0) {
        slidesDE[i+1].classList.remove("block");
        i = slidesDE.length-1;
        slidesDE[i].classList.add("block");
    } else {
        slidesDE[i+1].classList.remove("block");
        slidesDE[i].classList.add("block");
    }
})

btnRightDR.addEventListener("click", function () {
    ++j
    if (j >= slidesDR.length) {
        slidesDR[j-1].classList.remove("block");
        j = 0;
        slidesDR[j].classList.add("block");
    } else {
        slidesDR[j-1].classList.remove("block");
        slidesDR[j].classList.add("block");
    }
})

btnLeftDR.addEventListener("click", function () {
    --j
    if (j < 0) {
        slidesDR[j+1].classList.remove("block");
        j = slidesDR.length-1;
        slidesDR[j].classList.add("block");
    } else {
        slidesDR[j+1].classList.remove("block");
        slidesDR[j].classList.add("block");
    }
})