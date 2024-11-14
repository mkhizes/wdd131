// Function to calculate wind chill
function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
      return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1);
    }
    return "N/A";
  }
  
  // Static temperature and wind speed values
  const temp = 15; // Temperature in Celsius
  const windSpeed = 6; // Wind speed in km/h
  
  // Update weather section with calculated wind chill
  document.addEventListener("DOMContentLoaded", () => {
    const windChill = calculateWindChill(temp, windSpeed);
    document.getElementById("temp").textContent = temp;
    document.getElementById("wind-speed").textContent = windSpeed;
    document.getElementById("wind-chill").textContent = windChill;
  
    // Footer: Current year and last modified date
    document.getElementById("current-year").textContent = new Date().getFullYear();
    document.getElementById("last-modified").textContent = document.lastModified;
  });