window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".menu");
    const scrolled = window.scrollY > 20; // Cambia el valor 50 según desees

    if (scrolled) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });