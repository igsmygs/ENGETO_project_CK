// Funkční navigační menu s aktivní položkou
document.addEventListener("DOMContentLoaded", function () {
  // Hladké scrollování
  document.querySelectorAll(".hlavni-navigace a").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Odstranění active třídy ze všech odkazů
      document.querySelectorAll(".hlavni-navigace a").forEach((item) => {
        item.classList.remove("active");
      });

      // Přidání active třídy na kliknutý odkaz
      this.classList.add("active");

      // Plynulé scrollování
      const targetId = this.getAttribute("href");
      if (targetId !== "#") {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          });
        }
      }
    });
  });

  // Automatické zvýraznění při scrollování
  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY + 100;

    document.querySelectorAll("section").forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        document.querySelectorAll(".hlavni-navigace a").forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  });
});
