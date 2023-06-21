const headers = document.querySelectorAll("header");

window.addEventListener("scroll", function() {
  headers.forEach(header => {
    header.classList.toggle("sticky", window.scrollY > 0);
  });
});