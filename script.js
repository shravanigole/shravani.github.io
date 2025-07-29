// === Theme Toggle ===
const toggleBtn = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-theme");
  toggleBtn.innerText = "Light Mode";
} else {
  toggleBtn.innerText = "Dark Mode";
}

toggleBtn.onclick = function () {
  document.body.classList.toggle("dark-theme");
  const theme = document.body.classList.contains("dark-theme") ? "dark" : "light";
  localStorage.setItem("theme", theme);
  toggleBtn.innerText = theme === "dark" ? "Light Mode" : "Dark Mode";
};

// === Scroll To Top ===
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
  scrollToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
};

scrollToTopBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
