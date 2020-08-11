document.querySelector(".popup-1-open").addEventListener("click", () => {
    document.querySelector(".popup-2").style.display = `none`;
    document.querySelector(".popup-1").style.display = `block`;
});

document.querySelector(".popup-1__close").addEventListener("click", () => {
    document.querySelector(".popup-2").style.display = `none`;
    document.querySelector(".popup-1").style.display = `none`;
});


document.querySelector(".popup-2-open").addEventListener("click", () => {
    document.querySelector(".popup-1").style.display = `none`;
    document.querySelector(".popup-2").style.display = `block`;
});

document.querySelector(".popup-2__close").addEventListener("click", () => {
    document.querySelector(".popup-1").style.display = `none`;
    document.querySelector(".popup-2").style.display = `none`;
});

