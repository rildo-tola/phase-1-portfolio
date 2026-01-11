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

const projects = [
  {
title : "Responsive Portfolio",
description: "A mobile-first personal portfolio built with HTML, CSS, and JS. "
},
{
    title: "Flexbox Grid Project",
    description: "A layout project demonstrating modern CSS Flexbox techniques."
},
{
    title: "JavaScript Interaction Demo",
    description: "A simple interactive page using DOM manipulation and events."
}
];

const projectContainer = document.querySelector("#projectsContainer");

projects.forEach((project) => {
const projectCard = document.createElement("div");
projectCard.classList.add("project");

projectCard.innerHTML = `
<h3>${project.title}</h3>
<p>${project.description}</p>
`;

projectsContainer.appendChild(projectCard);
});1`1`

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    const top = window.scrollY;
    const offset = section.offsetTop - 100;
    const height = section.offsetHeight;

    if (top >= offset && top < offset + height) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });
});
