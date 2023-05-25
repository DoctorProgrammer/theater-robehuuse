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

    return widthImages / 2;
}

function scroll() {
    const slideTrack = document.querySelectorAll(".slide-track");

    document.documentElement.style.setProperty('--width-images', `${calculateWidth()}px`);
    document.documentElement.style.setProperty('--amount-images', `${document.querySelectorAll('.slide img').length}`);
    slideTrack.forEach((track) => {
        track.style.animation = "scroll 30s linear infinite";
    })
}

function deselectOl() {
    ueberUns.classList.add("hidden");
    auffuehrungen.classList.add("hidden");
    dieBuehne.classList.add("hidden");
    informationen.classList.add("hidden");
}

document.addEventListener("DOMContentLoaded", () => {
    const navTogglerOpen = document.getElementById("navTogglerOpen");
    const navTogglerClose = document.getElementById("navTogglerClose");
    const nav = document.getElementById("nav");

    const ueberUns = document.getElementById("ueberUns");
    const auffuehrungen = document.getElementById("auffuehrungen");
    const dieBuehne = document.getElementById("dieBuehne");
    const informationen = document.getElementById("informationen");

    const navRight1 = document.getElementById("navRight-1");
    const navRight2 = document.getElementById("navRight-2");
    const navRight3 = document.getElementById("navRight-3");
    const navRight4 = document.getElementById("navRight-4");

    // open navigation bar

    navTogglerOpen.addEventListener("click", () => {
        nav.classList.toggle("active");

        scroll();
    });

    // close navigation bar

    navTogglerClose.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

    document.onkeyup = function (e) {
        if (e.key === 'Escape') {
            nav.classList.remove("active");
        }
    }

    // change navigation bar

    navRight1.addEventListener("click", () => {
        deselectOl();
        eraseBorder();
        ueberUns.classList.remove("hidden");
        navRight1.style.borderLeft = "10px solid red";
    });

    navRight2.addEventListener("click", () => {
        deselectOl();
        eraseBorder();
        auffuehrungen.classList.remove("hidden");
        navRight2.style.borderLeft = "10px solid red";
    });

    navRight3.addEventListener("click", () => {
        deselectOl();
        eraseBorder();
        dieBuehne.classList.remove("hidden");
        navRight3.style.borderLeft = "10px solid red";
    });

    navRight4.addEventListener("click", () => {
        deselectOl();
        eraseBorder();
        informationen.classList.remove("hidden");
        navRight4.style.borderLeft = "10px solid red";
    });
});