// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    
    // Mobile Menu Toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active"); // Toggle menu visibility
        menuToggle.classList.toggle("open"); // Change button appearance
    });

    // Close menu when clicking outside (for mobile users)
    document.addEventListener("click", function (event) {
        if (!menuToggle.contains(event.target) && !navLinks.contains(event.target)) {
            navLinks.classList.remove("active");
            menuToggle.classList.remove("open");
        }
    });

    // Smooth Scrolling for Internal Links
    const smoothScrollLinks = document.querySelectorAll("a[href^='#']");
    
    smoothScrollLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Lazy Load Images (if not supported natively)
    const lazyImages = document.querySelectorAll("img[loading='lazy']");

    if ("IntersectionObserver" in window) {
        let imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    let img = entry.target;
                    img.src = img.dataset.src || img.src; 
                    observer.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    }

    // Dark Mode Toggle (Optional Feature)
    const darkModeToggle = document.createElement("button");
    darkModeToggle.innerText = "🌙 Dark Mode";
    darkModeToggle.classList.add("dark-mode-toggle");
    document.body.appendChild(darkModeToggle);

    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        darkModeToggle.innerText = document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
    });
});
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
    });