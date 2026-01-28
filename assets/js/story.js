import { projects } from "./data.js";

console.log("story.js loaded");
console.log("search:", window.location.search);

const params = new URLSearchParams(window.location.search);
const key = params.get("project");

console.log("projectKey:", key);
console.log("projects:", projects);
console.log("project:", projects[key]);

const project = projects[key];

if (!project) {
  document.body.innerHTML = "<h1>Proyecto no encontrado</h1>";
  throw new Error("Invalid project key");
}

// Textos
document.getElementById("title").textContent = project.title;
document.getElementById("subtitle").textContent = project.subtitle;
document.getElementById("context").textContent = project.context;
document.getElementById("solution").textContent = project.solution;
document.getElementById("role").textContent = project.role;

// Badges
const badges = document.getElementById("badges");
project.badges.forEach((b) => {
  const span = document.createElement("span");
  span.textContent = b;
  span.className = "badge";
  badges.appendChild(span);
});

// Galería
const gallery = document.getElementById("gallery");
project.images.forEach((src) => {
  const img = document.createElement("img");
  img.src = src;
  img.loading = "lazy";
  gallery.appendChild(img);
});

// CTA
document.getElementById("liveLink").href = project.liveUrl;
