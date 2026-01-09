console.log("Portfolio loaded");  // test that JS is working
console.log("JavaScript is connected");

// Get elements from the page
const button = document.getElementById("changeTextBtn");
const message = document.getElementById("message");

// Listen for a click
button.addEventListener("click", () => {
  message.textContent = "You clicked the button!";
});
