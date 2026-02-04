// este document.queryselector sirve para seleccionar la parte del codgio del html que queramos modificar
const bar = document.querySelector(".decoration_bar");

//aqui se obtiene la hora y fecha actual, por medio de funciones ya establecidas
const now = new Date();
const hour = now.getHours();
const day = now.getDay();

// que dias hay
const days = [
  "domingo",
  "lunes",
  "martes",
  "miércoles",
  "jueves",
  "viernes",
  "sábado"
];

// let ssaludo es nuestra variable que puede cambiar dependiendo de la hora y el dia, va a decri distintas cosas
let saludo;

if (hour >= 1 && hour < 12) {
  saludo = "BUEN_DÍA";
} else if (hour >= 12 && hour < 18) {
  saludo = "BUENAS_TARDES";
} else {
  saludo = "BUENAS_NOCHES";
}

// aqui construimos el saludo final, utilizamos una funcion prederterminada para mayusculas
const message = `▓▒░ ▸ ${saludo} // FELIZ_${days[day].toUpperCase()} ▸ ░▒▓`;

// aqui ya solo metemos el mensaje que queramos en donde queramos
bar.textContent = message;


// DARK/LIGHT MODE
const modeBtn = document.getElementById("dark_mode");
const page = document.querySelector(".color_cv");

modeBtn.addEventListener("click", () => {
  page.classList.toggle("light");

  if (page.classList.contains("light")) {
    modeBtn.textContent = "Dark mode";
  } else {
    modeBtn.textContent = "Light mode";
  }
});

// BOTON CONTACT
const toggleBtn = document.querySelector(".toggle_btn");
const toggleContent = document.querySelector(".toggle_content");

toggleBtn.addEventListener("click", () => {
  toggleContent.classList.toggle("show");
  toggleBtn.classList.toggle("active");
});

// BOTON EXPERIENCIA RELEVANTE
const toggleBtns = document.querySelector(".toggle_btns");
const toggleContents = document.querySelector(".toggle_contents");

toggleBtns.addEventListener("click", () => {
  toggleContents.classList.toggle("show");
  toggleBtns.classList.toggle("active");
});


// BUSCADOR DE SKILLS
const skillSearch = document.getElementById("skillSearch");
const skillsList = document.getElementById("skillsList");
const skillItems = skillsList.querySelectorAll("li");

skillSearch.addEventListener("input", () => {
  const query = skillSearch.value.trim().toLowerCase();

  skillItems.forEach((li) => {
    const text = li.textContent.toLowerCase();

    if (text.includes(query)) {
      li.classList.remove("skill-hidden");
    } else {
      li.classList.add("skill-hidden");
    }
  });
});
