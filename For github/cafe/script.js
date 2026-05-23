// MOBILE MENU TOGGLE

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if(menuBtn){
    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}

// SMOOTH SCROLL EFFECT

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function(e){

        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 70,
            behavior: "smooth"
        });

    });
});

// HERO BUTTON ACTION

const heroButton = document.querySelector(".hero button");

if(heroButton){
    heroButton.addEventListener("click", () => {

        const menuSection = document.querySelector("#menu");

        window.scrollTo({
            top: menuSection.offsetTop - 70,
            behavior: "smooth"
        });

    });
}

// CONTACT FORM MESSAGE

const contactForm = document.querySelector(".contact-form");

if(contactForm){

    contactForm.addEventListener("submit", function(e){

        e.preventDefault();

        alert("Thank you! Your message has been sent.");

        contactForm.reset();

    });

}

// SCROLL ANIMATION

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < window.innerHeight - 100){
            section.classList.add("show");
        }

    });

});

// CURRENT YEAR IN FOOTER

const footerText = document.querySelector("footer p");

if(footerText){

    const year = new Date().getFullYear();

    footerText.innerHTML =
    `© ${year} Bunny Café. All Rights Reserved.`;

}