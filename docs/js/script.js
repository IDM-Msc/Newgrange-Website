//this is the javascript for the scrolling text track for Newgrange/Brú na Bóinne
const title = document.querySelector('.hero-title');
const track = document.getElementById('hero-track');

// parallax scroll effect for title
window.addEventListener('scroll', () => {
  if (title) {
    title.style.transform = `translateY(${window.scrollY * -0.5}px)`;
  }
});

if (track) {
  const group = track.querySelector('.track-group');
  let x = 0;
  let groupWidth = 0;
  const speed = 1;

  const updateWidth = () => {
    groupWidth = group.offsetWidth;
  };

  const animate = () => {
    x -= speed;

    // this resets the position so there is a seamless loop, initially the loop was visible
    if (Math.abs(x) >= groupWidth) {
      x += groupWidth;
    }

    track.style.transform = `translateX(${x}px)`;
    requestAnimationFrame(animate);
  };

  if (group) {
    track.append(group.cloneNode(true), group.cloneNode(true), group.cloneNode(true));
    updateWidth();
    window.addEventListener('resize', updateWidth);
    animate();
  }
}

const timeline = document.querySelector('.timeline');
const timelineProgress = document.querySelector('.timeline-progress');

//this is the javascript for the timeline bar animation--thanks youtube//
function updateTimelineProgress() {
  if (!timeline || !timelineProgress) return;

  const rect = timeline.getBoundingClientRect();
  const timelineHeight = rect.height;

  // track based on how far timeline has moved through viewport
  let progress = (-rect.top + window.innerHeight * 0.5) / timelineHeight;

  // keep it between 0–1
  progress = Math.max(0, Math.min(1, progress));

  timelineProgress.style.height = `${progress * timelineHeight}px`;
}

window.addEventListener('scroll', updateTimelineProgress);
window.addEventListener('resize', updateTimelineProgress);
window.addEventListener('load', updateTimelineProgress);

document.addEventListener("DOMContentLoaded", () => {
  const langButtons = document.querySelectorAll(".lang-btn");
  const translatable = document.querySelectorAll("[data-i18n]");

  function setLanguage(lang) {
    translatable.forEach((el) => {
      const newText = el.getAttribute(`data-${lang}`);
      if (newText) {
        el.textContent = newText;
      }
    });

    document.documentElement.lang = lang === "ga" ? "ga" : "en";
    localStorage.setItem("siteLanguage", lang);

    langButtons.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    window.siteLanguage = lang;
    window.dispatchEvent(new CustomEvent("languageChanged", { detail: { lang } }));
  }

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      setLanguage(btn.dataset.lang);
    });
  });

  const savedLanguage = localStorage.getItem("siteLanguage") || "en";
  setLanguage(savedLanguage);
});