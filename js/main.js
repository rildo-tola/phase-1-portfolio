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
description: "A mobile-first personal portfolio built with HTML, CSS, and JS. ",
features: [
      "Responsive layout",
      "Clean navigation",
      "Project showcase section"
    ],
    tech: "HTML, CSS, JavaScript",
    live: "https://rildo-tola.github.io/study-task-tracker/",
    github: "https://github.com/rildo-tola"
  },
{
    title: "Task Tracker",
    description: "A simple and user-friendly task management application built with vanilla Javascript",
features: [ "Add and delete tasks",
  "Mark tasks as completed",
  "Persistent storage with localStorage",
  "Task counter",
  "Keyboard support",
  "Accessible UI with subtle animations"
],
tech: "HTML, CSS, JavaScript",
live: "https://rildo-tola.github.io/study-task-tracker/",
github:"https://github.com/rildo-tola"
  }

];

const projectsContainer = document.querySelector("#projectsContainer");

projects.forEach((project) => {
const projectCard = document.createElement("div");
projectCard.classList.add("project");

projectCard.innerHTML = `
<h3>${project.title}</h3>
<p>${project.description}</p>
<ul>
      ${project.features.map(feature => `<li>${feature}</li>`).join("")}
    </ul>

    <p><strong>Built with:</strong> ${project.tech}</p>

    <a href="${project.live}" target="_blank">Live Demo</a> |
    <a href="${project.github}" target="_blank">GitHub Repo</a>
`;

projectsContainer.appendChild(projectCard);
});

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
