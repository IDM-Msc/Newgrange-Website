const solsticeIllustration = document.getElementById("solsticeIllustration");
const solsticeToggle = document.getElementById("solsticeToggle");

if (solsticeIllustration && solsticeToggle) {
  solsticeToggle.addEventListener("click", () => {
    solsticeToggle.classList.toggle("active");
    solsticeIllustration.classList.toggle("active");
  });
}