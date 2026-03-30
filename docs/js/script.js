const title = document.querySelector('.hero-title');
const items = document.querySelectorAll('.timeline-item');

window.addEventListener('scroll', () => {
  let scrollValue = window.scrollY;
  title.style.transform = `translateY(${scrollValue * -0.5}px)`;
});

const track = document.getElementById("hero-track");
track.innerHTML += track.innerHTML;

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