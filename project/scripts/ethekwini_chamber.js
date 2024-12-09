document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const submission = {
        name,
        email,
        message
    };

    localStorage.setItem("contactSubmission", JSON.stringify(submission));
    alert("Thank you for contacting us, " + name + "!");
});

document.getElementById("donationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const submission = {
        name,
        email,
        message
    };

    localStorage.setItem("donationSubmission", JSON.stringify(submission));
    alert("Thank you for your contribution towards community service, " + name + "!");
});
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;