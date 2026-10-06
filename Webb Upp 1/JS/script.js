// ==============================
// MOBILMENY
// ==============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("show");

        if (navLinks.classList.contains("show")) {
            menuBtn.innerHTML = "✕";
        } else {
            menuBtn.innerHTML = "☰";
        }

    });


    // Stänger menyn när man klickar på en länk
    const links = navLinks.querySelectorAll("a");

    links.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("show");
            menuBtn.innerHTML = "☰";

        });

    });

}


// ==============================
// STÄNG MOBILMENYN VID RESIZE
// ==============================

window.addEventListener("resize", function () {

    if (window.innerWidth > 1000 && navLinks) {

        navLinks.classList.remove("show");

        if (menuBtn) {
            menuBtn.innerHTML = "☰";
        }

    }

});


// ==============================
// SCROLL ANIMATION
// ==============================

const animatedElements = document.querySelectorAll(
    ".card, .skill-box, .section-heading, .cta"
);

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


animatedElements.forEach(function (element) {

    element.classList.add("fade-in");

    observer.observe(element);

});


// ==============================
// NAVBAR VID SCROLL
// ==============================

const header = document.querySelector("header");

window.addEventListener("scroll", function () {

    if (!header) return;

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


// ==============================
// AKTIV MENYLÄNK
// ==============================

const currentPage = window.location.pathname.split("/").pop() || "index.html";

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {

    const linkPage = link.getAttribute("href");

    link.classList.remove("active");

    if (linkPage === currentPage) {

        link.classList.add("active");

    }

});