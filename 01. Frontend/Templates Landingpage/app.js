function eraseBorder() {
    const navRight1 = document.getElementById("navRight-1");
    const navRight2 = document.getElementById("navRight-2");
    const navRight3 = document.getElementById("navRight-3");
    const navRight4 = document.getElementById("navRight-4");

    navRight1.style.borderLeft = "none";
    navRight2.style.borderLeft = "none";
    navRight3.style.borderLeft = "none";
    navRight4.style.borderLeft = "none";
}

function calculateWidth() {
    let widthImages = 0;
    let images = document.querySelectorAll('.slide-track .slide img');

    images.forEach(image => {
        const imageStyles = getComputedStyle(image);
        const imageWidth = image.offsetWidth + parseFloat(imageStyles.marginLeft) + parseFloat(imageStyles.marginRight);
        widthImages += imageWidth;
    });

    console.log(widthImages);
    return widthImages / 2;
}

function scroll() {
    const slideTrack = document.querySelectorAll(".slide-track");

    document.documentElement.style.setProperty('--width-images', `${calculateWidth()}px`);
    document.documentElement.style.setProperty('--amount-images', `${document.querySelectorAll('.slide img').length}`);
    slideTrack.forEach((track) => {
        track.style.animation = "scroll 10s linear infinite";
    })
}

document.addEventListener("DOMContentLoaded", () => {
    const navTogglerOpen = document.getElementById("navTogglerOpen");
    const navTogglerClose = document.getElementById("navTogglerClose");
    const nav = document.getElementById("nav");

    const navLeft = document.getElementById("navLeft");
    const navRight1 = document.getElementById("navRight-1");
    const navRight2 = document.getElementById("navRight-2");
    const navRight3 = document.getElementById("navRight-3");
    const navRight4 = document.getElementById("navRight-4");

    navTogglerOpen.addEventListener("click", () => {
        nav.classList.toggle("active");

        scroll();
    });

    navTogglerClose.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

    navRight1.addEventListener("click", () => {
        navLeft.innerHTML = '<li><a href="#">Geschichte</a></li>\
                                <li><a href="#">Vorstand</a></li>\
                                <li><a href="#">Organisation</a></li>\
                                <li><a href="#">Aktivitäten</a></li>\
                                <li><a href="#">Mitglieder</a></li>';
        eraseBorder();
        navRight1.style.borderLeft = "10px solid red";
    });

    navRight2.addEventListener("click", () => {
        navLeft.innerHTML = '<li><a href="#">Theaterstück</a></li>\
                                <li><a href="#">Spielplan</a></li>\
                                <li><a href="#">Aufführungsort</a></li>\
                                <li><a href="#">Billette</a></li>';
        eraseBorder();
        navRight2.style.borderLeft = "10px solid red";
    });

    navRight3.addEventListener("click", () => {
        navLeft.innerHTML = '<li><a href="#">Spieler</a></li>\
                                <li><a href="#">Hinter der Bühne</a></li>';
        eraseBorder();
        navRight3.style.borderLeft = "10px solid red";
    });

    navRight4.addEventListener("click", () => {
        navLeft.innerHTML = '<li><a href="#">Sponsoren</a></li>\
                                <li><a href="#">Nächste Termine</a></li>\
                                <li><a href="#">Fragen + Antworten</a></li>\
                                <li><a href="#">Statuten</a></li>\
                                <li><a href="#">Disclaimer</a></li>\
                                <li><a href="#">Links</a></li>\
                                <li><a href="#">Kontakt</a></li>\
                                <li><a href="#">Medienberichte</a></li>';
        eraseBorder();
        navRight4.style.borderLeft = "10px solid red";
    });
});