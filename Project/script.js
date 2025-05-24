// Footer Date
document.getElementById("date").textContent = `Today's Date: ${new Date().toLocaleDateString()}`;

// Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("formStatus");

  if (!name || !email || !message) {
    status.style.color = "red";
    status.textContent = "Please fill in all fields.";
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    status.style.color = "red";
    status.textContent = "Please enter a valid email address.";
    return;
  }

  status.style.color = "green";
  status.textContent = "Message sent successfully! (Simulated)";
  
  // Optional: Reset form
  this.reset();
});


document.addEventListener("DOMContentLoaded", function () {
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links"); 

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-links li").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  });
});
});
