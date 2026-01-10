console.log("Portfolio loaded");  // test that JS is working
console.log("JavaScript is connected");

const nameHeading = document.querySelector("#name");

nameHeading.textContent = "Rildo Tola - Front-End Developer";

const ogText = "Rildo Tola - Front-End Developer";

const newText = "Building the future with code 🚀";

nameHeading.style.color = "#4f46e5";

// Get elements from the page
const button = document.getElementById("changeTextBtn");

// Listen for a click
button.addEventListener("click", () => {
  if (nameHeading.textContent === ogText){
nameHeading.textContent = newText
  } else{
nameHeading.textContent = ogText
  }
});
