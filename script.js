// Ano no rodapé
document.getElementById("year").textContent = new Date().getFullYear();

// Animação de entrada ao rolar
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("is-visible");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// Idioma PT / EN — o texto em português fica no HTML, o inglês no atributo data-en
const nodes = document.querySelectorAll("[data-en]");
nodes.forEach((el) => (el.dataset.pt = el.innerHTML.trim()));

const toggle = document.getElementById("langToggle");

function setLang(lang) {
  nodes.forEach((el) => (el.innerHTML = lang === "en" ? el.dataset.en : el.dataset.pt));
  document.documentElement.lang = lang === "en" ? "en" : "pt-BR";
  toggle.textContent = lang === "en" ? "PT" : "EN";
  try { localStorage.setItem("lang", lang); } catch (_) {}
}

toggle.addEventListener("click", () =>
  setLang(document.documentElement.lang === "en" ? "pt" : "en")
);

// Idioma inicial: ?lang=en na URL > escolha salva > idioma do navegador
const param = new URLSearchParams(location.search).get("lang");
let saved = null;
try { saved = localStorage.getItem("lang"); } catch (_) {}
const initial = param || saved || (navigator.language.startsWith("pt") ? "pt" : "en");
if (initial === "en") setLang("en");
