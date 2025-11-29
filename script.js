document.addEventListener('DOMContentLoaded', function () {
  // Поставим текущий год
  const yearSpan = document.getElementById('year');
  yearSpan.textContent = new Date().getFullYear();

  // Кнопка alert
  const btn = document.getElementById('btn');
  btn.addEventListener('click', function () {
    alert("Кнопка працює!");
  });
});
