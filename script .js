document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".text-section.left").classList.add("show");
  document.querySelector(".chart-container").classList.add("show");
  document.querySelector(".text-section.right").classList.add("show");
});

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.querySelectorAll(".bar").forEach((bar) => {
      bar.classList.add("animated");
    });
  }, 500);
});
