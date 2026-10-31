const pages = document.querySelectorAll(".page");
const buttons = document.querySelectorAll("[data-page]");

function showPage(id) {
  pages.forEach(page => page.classList.remove("active"));
  const target = document.getElementById(id);
  if (target) {
    target.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

buttons.forEach(button => {
  button.addEventListener("click", () => showPage(button.dataset.page));
});

// contador: 26 de novembro de 2025, às 00:00, no horário local do visitante.
const startDate = new Date(2025, 10, 26, 0, 0, 0);

function addMonths(date, months) {
  const result = new Date(date);
  result.setMonth(result.getMonth() + months);
  return result;
}

function updateCounter() {
  const now = new Date();

  if (now < startDate) return;

  let months = (now.getFullYear() - startDate.getFullYear()) * 12
             + (now.getMonth() - startDate.getMonth());

  let anchor = addMonths(startDate, months);

  if (anchor > now) {
    months--;
    anchor = addMonths(startDate, months);
  }

  let remaining = now - anchor;
  const dayMs = 86400000;
  const hourMs = 3600000;
  const minuteMs = 60000;
  const secondMs = 1000;

  const days = Math.floor(remaining / dayMs);
  remaining %= dayMs;

  const hours = Math.floor(remaining / hourMs);
  remaining %= hourMs;

  const minutes = Math.floor(remaining / minuteMs);
  remaining %= minuteMs;

  const seconds = Math.floor(remaining / secondMs);

  document.getElementById("months").textContent = months;
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

updateCounter();
setInterval(updateCounter, 1000);
