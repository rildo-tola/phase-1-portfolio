console.log("Portfolio loaded");  // test that JS is working
console.log("JavaScript is connected");



const nameHeading = document.querySelector("#name");

nameHeading.textContent = "Rildo Tola - Front-End Developer";

nameHeading.style.color = "#4f46e5";

// Get elements from the page
const button = document.getElementById("changeTextBtn");

// Listen for a click
button.addEventListener("click", () => {
  nameHeading.textContent = "Building the future with code 🚀";
});
