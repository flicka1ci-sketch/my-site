document.addEventListener('DOMContentLoaded', function () {
  const yearSpan = document.getElementById('year');
  yearSpan.textContent = new Date().getFullYear();

  const btn = document.getElementById('btn');
  btn.addEventListener('click', function () {
    alert("Кнопка працює!");
  });
});
