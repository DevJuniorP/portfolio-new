let menuToggle = document.querySelector(".menuToggle");
let header = document.querySelector("header");
let typedEffect = new Typed(".typed", {
    strings : ["Junior Peron", "Dev Front-End"],
    loop : true,
    typedSpeed : 100,
    backSpeed : 50,
    backDelay: 100,
})

menuToggle.onclick = function () {
    header.classList.toggle('active');
}

window.sr = ScrollReveal({ reset: true});

sr.reveal('#sobre', { duration: 2000});
sr.reveal('#portfolio', { duration: 2000});
sr.reveal('#contato', { duration: 2000});