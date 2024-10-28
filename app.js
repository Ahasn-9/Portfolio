var menuIcon = document.getElementById("menuIcon");
var mobileMenu = document.getElementById("mobileMenu");
var closeBtn = document.getElementById("closeMenu");

function openMenu() {
  mobileMenu.style.display = "block";
}

function closeMenu() {
  mobileMenu.style.display = "none";
}

menuIcon.onclick = function () {
  openMenu();
};

closeBtn.onclick = function () {
  closeMenu();
};
