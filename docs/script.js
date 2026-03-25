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
