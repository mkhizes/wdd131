// Get the current year and display it in the first paragraph
const currentYear = new Date().getFullYear();
document.querySelector("footer p:nth-of-type(1)").textContent = `© ${currentYear}`;

// Get the last modified date and display it in the second paragraph
const lastModified = document.lastModified;
document.querySelector("footer p:nth-of-type(2)").textContent = `Last modified: ${lastModified}`;