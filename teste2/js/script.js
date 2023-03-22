let menuToggle = document.querySelector(".menuToggle");
let header = document.querySelector("header");

menuToggle.onclick = function () {
    header.classList.toggle('active');
}

window.sr = ScrollReveal({ reset: true});

sr.reveal('#sobre', { duration: 2000});
sr.reveal('#portfolio', { duration: 2000});