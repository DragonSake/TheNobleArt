/* ===========================
   MOBILE MENU
=========================== */

const hamburger = document.getElementById("hamburger");
const nav = document.querySelector("nav");
const menuLinks = document.querySelectorAll("nav a");

if (hamburger) {

    hamburger.addEventListener("click", () => {

        nav.classList.toggle("active");

        const icon = hamburger.querySelector("i");

        if (nav.classList.contains("active")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");

        } else {

            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");

        }

    });

}

menuLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        const icon = hamburger.querySelector("i");

        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");

    });

});


/* ===========================
   STICKY HEADER
=========================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.style.background = "#0f1115";
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.25)";

    } else {

        header.style.background = "rgba(10,10,10,.85)";
        header.style.boxShadow = "none";

    }

});


/* ===========================
   SCROLL ANIMATION
=========================== */

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: .2

});

document.querySelectorAll(".card").forEach(el => {

    el.classList.add("fade-up");

    observer.observe(el);

});

document.querySelectorAll(".bestuur-card").forEach(el => {

    el.classList.add("fade-up");

    observer.observe(el);

});

document.querySelectorAll(".info-box").forEach(el => {

    el.classList.add("fade-up");

    observer.observe(el);

});

document.querySelectorAll(".contact-card").forEach(el => {

    el.classList.add("fade-up");

    observer.observe(el);

});

document.querySelectorAll(".about-grid").forEach(el => {

    el.classList.add("fade-up");

    observer.observe(el);

});

document.querySelectorAll(".cta").forEach(el => {

    el.classList.add("fade-up");

    observer.observe(el);

});


/* ===========================
   ACTIVE MENU
=========================== */

const currentPage = location.pathname.split("/").pop();

menuLinks.forEach(link => {

    link.classList.remove("active");

    if (link.getAttribute("href") === currentPage) {

        link.classList.add("active");

    }

});

if (currentPage === "") {

    document.querySelector('a[href="index.html"]').classList.add("active");

}


/* ===========================
   BUTTON RIPPLE
=========================== */

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const diameter = Math.max(this.clientWidth, this.clientHeight);

        circle.style.width = circle.style.height = diameter + "px";

        circle.style.left = e.offsetX - diameter / 2 + "px";
        circle.style.top = e.offsetY - diameter / 2 + "px";

        circle.classList.add("ripple");

        const ripple = this.querySelector(".ripple");

        if (ripple) ripple.remove();

        this.appendChild(circle);

    });

});


/* ===========================
   SCROLL TO TOP
=========================== */

const topBtn = document.createElement("button");

topBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';

topBtn.className = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ===========================
   FORM VALIDATION
=========================== */

const forms = document.querySelectorAll("form");

forms.forEach(form => {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        let valid = true;

        const fields = form.querySelectorAll("input, textarea, select");

        fields.forEach(field => {

            if (field.hasAttribute("required") && field.value.trim() === "") {

                valid = false;

                field.style.borderColor = "#D62828";

            } else {

                field.style.borderColor = "#333";

            }

        });

        if (valid) {

            alert("Bedankt! Je formulier is succesvol verzonden.");

            form.reset();

        }

    });

});


/* ===========================
   HERO IMAGE FLOAT
=========================== */

const heroImage = document.querySelector(".hero-image img");

if (heroImage) {

    window.addEventListener("mousemove", (e) => {

        const x = (window.innerWidth / 2 - e.clientX) / 40;
        const y = (window.innerHeight / 2 - e.clientY) / 40;

        heroImage.style.transform =
            `translate(${x}px, ${y}px)`;

    });

}


/* ===========================
   YEAR
=========================== */

const year = document.querySelector("#year");

if (year) {

    year.textContent = new Date().getFullYear();

}