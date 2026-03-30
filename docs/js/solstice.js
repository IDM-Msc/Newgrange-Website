const solsticeSection = document.getElementById("solstice-section");
const beam = document.getElementById("solsticeBeam");
const glow = document.getElementById("solsticeGlow");

function updateSolsticeOnScroll() {
  if (!solsticeSection || !beam || !glow) return;

  const rect = solsticeSection.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  let progress = 0;

  if (rect.top < windowHeight * 0.7) {
    progress = (windowHeight * 0.7 - rect.top) / (windowHeight * 0.4);
    progress = Math.max(0, Math.min(progress, 1));
  }

  beam.style.opacity = progress;
  glow.style.opacity = progress;
  glow.style.transform = "translate(-50%, -50%) scale(" + (0.6 + progress * 0.6) + ")";
}

window.addEventListener("scroll", updateSolsticeOnScroll);
window.addEventListener("resize", updateSolsticeOnScroll);
window.addEventListener("load", updateSolsticeOnScroll);