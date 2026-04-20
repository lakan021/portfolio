// TEXT FADE ON SCROLL 
const introItems = document.querySelectorAll(".h1-letters, .intro-content h2, .intro-content p");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate");
        }
    });
}, { threshold: 0.5, rootMargin: "0px 0px -50px 0px" });

introItems.forEach(el => observer.observe(el));




// NAV ANIMATIONS ON SCROLL
const sections = Array.from(document.querySelectorAll(".hero, .intro, .about, .projects, .contact"));
const dots = document.querySelectorAll(".nav-dot");

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const backToTop = document.querySelector(".back-to-top");
            dots.forEach(dot => dot.classList.remove("active"));
        
            const index = sections.indexOf(entry.target);
            console.log(entry.target);
            console.log(sections.indexOf(entry.target));

            if (index == 0){
                console.log("first section");
                backToTop.classList.remove("active");
            } else {
                dots[index - 1].classList.add("active");
                backToTop.classList.add("active");
            }
        }
    });
}, {threshold: 0.2, rootMargin: "0px 0px -50px 0px" });

sections.forEach(section => sectionObserver.observe(section));


// THUMBNAIL HOVER EFFECT
const thumbs = document.querySelectorAll(".thumb");

thumbs.forEach(thumb => {
    let backgroundSize = window.getComputedStyle(thumb).backgroundSize;
    thumb.addEventListener("mouseenter", () => {
        thumb.style.backgroundSize = `${parseFloat(backgroundSize) + 20}%`;
    });
    thumb.addEventListener("mouseleave", () => {
        thumb.style.backgroundSize = `${parseFloat(backgroundSize)}%`;
    });
});

