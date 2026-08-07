const loader = document.querySelector('.loader');
const exploreBtn = document.querySelector('.loader button');


exploreBtn.addEventListener('click', () => {
    const animate = loader.animate([
        { transform: 'translateY(0)' },
        { transform: 'translateY(-100%)' }
    ], {
        duration: 1000,
        easing: 'ease-in-out',
        fill: 'forwards'
    });

    animate.play();
});

