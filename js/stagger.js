const h1 = document.querySelector(".h1-letters");

// Split "Portfolio" into individual letter spans
h1.innerHTML = [...h1.textContent.trim()]
  .map((letter, i) => `<span class="h1-letter" style="animation-delay:${i * 0.04}s">${letter}</span>`)
  .join("");

// Add animate class to each letter to trigger the stagger animation
h1.querySelectorAll(".h1-letter").forEach(span => span.classList.add("animate"));





// NAV DOTS ANIMATION
const navlinks = document.querySelectorAll(".nav-links");
// console.log(navlinks);

navlinks.forEach(link => {
    // console.log(link);
    link.addEventListener("click", () => {
        let activedots = document.querySelectorAll(".nav-dot.active");
        activedots.forEach(dot => dot.classList.remove("active"));

        const dot = link.querySelector(".nav-dot");
        dot.classList.add("active");
    });
});

