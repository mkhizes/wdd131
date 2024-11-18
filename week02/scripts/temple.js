
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
    navList.style.display = navList.style.display === "block" ? "none" : "block";
    hamburger.textContent = navList.style.display === "block" ? "X" : "☰";
});

// Static weather data
const temperature = 10; // in °C
const windSpeed = 5; // in km/h

// Calculate and display wind chill
const windChillElement = document.getElementById("wind-chill");
if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = `${windChill.toFixed(1)}°C`;
} else {
    windChillElement.textContent = "N/A";
}
;

// Wind chill calculation function
function calculateWindChill(temp, speed) {
return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(speed, 0.16) +
    0.3965 * temp * Math.pow(speed, 0.16)
);
}