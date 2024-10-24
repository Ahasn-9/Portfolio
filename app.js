document.addEventListener("DOMContentLoaded", function () {
  var menuIcon = document.getElementById("menu-icon");
  var mobileMenu = document.getElementById("mobile-menu");
  var closeMenu = document.getElementById("close-menu");
  var menuLinks = document.querySelectorAll("#mobile-menu a");

  menuIcon.addEventListener("click", function () {
    if (mobileMenu.classList.contains("active")) {
      mobileMenu.classList.remove("active");
    } else {
      mobileMenu.classList.add("active");
    }
  });

  closeMenu.addEventListener("click", function () {
    mobileMenu.classList.remove("active");
  });

  menuLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      mobileMenu.classList.remove("active");
      var targetId = link.getAttribute("href");
      var targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
