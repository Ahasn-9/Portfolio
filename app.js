// Get DOM elements
const menuIcon = document.getElementById("menuIcon");
const mobileMenu = document.getElementById("mobileMenu");
const closeBtn = document.getElementById("closeMenu");
const menuLinks = document.querySelectorAll(".menu-item");

// Function to open mobile menu
function openMenu() {
  mobileMenu.style.display = "block";
}

// Function to close mobile menu
function closeMenu() {
  mobileMenu.style.display = "none";
}

// Function to handle smooth scrolling
function smoothScroll(e) {
  e.preventDefault();

  // Get the target section id from the href
  const targetId = this.getAttribute("href").substring(1);
  const targetSection = document.getElementById(targetId);

  if (targetSection) {
    // Close mobile menu first
    closeMenu();

    // Smooth scroll to target section
    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

// Event Listeners
menuIcon.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);

// Add click event listeners to all menu links
menuLinks.forEach((link) => {
  link.addEventListener("click", smoothScroll);
});

// Also add smooth scroll to desktop menu links
const desktopLinks = document.querySelectorAll(".desktop-menu a");
desktopLinks.forEach((link) => {
  link.addEventListener("click", smoothScroll);
});
