
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
    navList.style.display = navList.style.display === "block" ? "none" : "block";
    hamburger.textContent = navList.style.display === "block" ? "X" : "☰";
});
