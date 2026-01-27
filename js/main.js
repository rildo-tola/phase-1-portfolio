console.log("Portfolio loaded");  // test that JS is working
console.log("JavaScript is connected");

// creating the Heading constant
const nameHeading = document.querySelector("#name");

//changing the heading 
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

// project objects
const projects = [
  {
title : "Responsive Portfolio",
description: "A mobile-first personal portfolio website designed to showcase projects, skills, and contact information in a clean and accessible way. Built with vanilla web technologies, focusing on responsiveness, usability, and maintainable code. ",
features: [
      "Fully responsive layout using mobile-first design principles",
      "Clean and intuitive navigation across all screen sizes",
      "Organized folder structure and eusable styles"
    ],
    tech: "HTML, CSS, JavaScript",
    live: "https://rildo-tola.github.io/study-task-tracker/",
    github: "https://github.com/rildo-tola/phase-1-portfolio",
    image: "images/portfolio.png"
  },
{
    title: "Task Tracker",
    description: "A lightweight task management application built with vanilla JavaScript, focused on simplicity, accessibility, and smooth user interaction. Designed to help users manage daily tasks efficiently without external libraries. ",
features: [ "Add and delete tasks with instant UI updates",
  "Mark tasks as completed with visual feedback",
  "Persistent storage with localStorage",
  "Real-time task counter for better progress tracking",
  "Full keyboard support for improved accessibility",
  "Subtle animations to enhance user experience"
],
tech: "HTML, CSS, JavaScript",
live: "https://rildo-tola.github.io/study-task-tracker/",
github:"https://github.com/rildo-tola/study-task-tracker",
image: "images/task-tracker.png"
  }

];

// stating project container
const projectsContainer = document.querySelector("#projectsContainer");

// loads projects into project card div
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
<img src="${project.image}" alt="${project.title} screenshot">

    `;

    // load project cards to project container
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
