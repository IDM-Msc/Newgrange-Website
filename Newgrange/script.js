const title = document.querySelector('.hero-title');

window.addEventListener('scroll', () => {
  let scrollValue = window.scrollY;
  title.style.transform = `translateY(${scrollValue * -0.5}px)`;
});

const track = document.getElementById("marquee-track");
track.innerHTML += track.innerHTML;