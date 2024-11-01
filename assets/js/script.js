window.addEventListener("scroll", function() {
    var navbar = document.getElementById("navbar");
    var alturaParaFixar = 1000; // Defina a altura (em pixels) após a qual a navbar deve ficar fixa
  
    if (window.scrollY >= alturaParaFixar) {
      navbar.classList.add("fixed");
    } else {
      navbar.classList.remove("fixed");
    }
  });