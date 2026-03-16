// Selecciona la barra de saludo
const bar = document.querySelector(".decoration_bar");

// Obtiene hora y día actuales
const now = new Date();
const hour = now.getHours();
const day = now.getDay();

const days = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];

let saludo;
if (hour >= 1 && hour < 12) {
  saludo = "BUEN_DÍA";
} else if (hour >= 12 && hour < 18) {
  saludo = "BUENAS_TARDES";
} else {
  saludo = "BUENAS_NOCHES";
}

bar.textContent = `▓▒░ ▸ ${saludo} // FELIZ_${days[day].toUpperCase()} ▸ ░▒▓`;


// DARK / LIGHT MODE
const modeBtn = document.getElementById("dark_mode");
const page = document.querySelector(".color_cv");

modeBtn.addEventListener("click", () => {
  page.classList.toggle("light");
  modeBtn.textContent = page.classList.contains("light") ? "Dark mode" : "Light mode";
});


// TOGGLE EXPERIENCIA RELEVANTE
const toggleBtns = document.querySelector(".toggle_btns");
const toggleContents = document.querySelector(".toggle_contents");

toggleBtns.addEventListener("click", () => {
  toggleContents.classList.toggle("show");
  toggleBtns.classList.toggle("active");
});


// BUSCADOR DE SKILLS
const skillSearch = document.getElementById("skillSearch");
const skillsList = document.getElementById("skillsList");
const skillItems = skillsList.querySelectorAll(".skill_tag");

skillSearch.addEventListener("input", () => {
  const query = skillSearch.value.trim().toLowerCase();

  skillItems.forEach((tag) => {
    const text = tag.textContent.toLowerCase();
    tag.classList.toggle("skill-hidden", !text.includes(query));
  });
});
