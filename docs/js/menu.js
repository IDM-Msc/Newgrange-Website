const menuBtn = document.getElementById("menuBtn");
const menuPanel = document.getElementById("menuPanel");
const overlay = document.getElementById("menuOverlay");

menuBtn.addEventListener("click", () =>{
    menuPanel.classList.toggle("active");
    menuBtn.classList.toggle("active");
    overlay.classList.toggle("active");
});

overlay.addEventListener("click", () =>{
    menuPanel.classList.remove("active");
    menuBtn.classList.remove("active");
    overlay.classList.remove("active");
});