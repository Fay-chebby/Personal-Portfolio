document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    document.querySelector(".text-section.left").classList.add("show");
  }, 500);
  setTimeout(() => {
    document.querySelector(".chart-container").classList.add("show");
  }, 1000);
  setTimeout(() => {
    document.querySelector(".text-section.right").classList.add("show");
  }, 1500);
});
