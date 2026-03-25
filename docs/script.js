const title = document.querySelector('.hero-title');
const items = document.querySelectorAll('.timeline-item');

window.addEventListener('scroll', () => {
  let scrollValue = window.scrollY;
  title.style.transform = `translateY(${scrollValue * -0.5}px)`;
});

const track = document.getElementById("hero-track");
track.innerHTML += track.innerHTML;

