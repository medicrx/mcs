function toggleNav() {
  let sidenav = document.getElementById("mySidenav");

  if (sidenav.classList.contains("active")) {
    closeNav();
  } else {
    openNav();
  }
}

function openNav() {
  let sidenav = document.getElementById("mySidenav");
  let backdrop = document.getElementById("backdrop");
  let menuBtn = document.getElementById("menuBtn");
  let menuIcon = document.getElementById("menuIcon");
  let main = document.querySelector(".main");

  sidenav.classList.add("active");
  backdrop.classList.add("active");
  if (menuBtn) {
    menuBtn.classList.add("active");
  }
  if (menuIcon) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-times");
  }
  if (main) main.classList.add("blur");
  document.body.style.overflow = "hidden";
}

function closeNav() {
  let sidenav = document.getElementById("mySidenav");
  let backdrop = document.getElementById("backdrop");
  let menuBtn = document.getElementById("menuBtn");
  let menuIcon = document.getElementById("menuIcon");
  let main = document.querySelector(".main");

  sidenav.classList.remove("active");
  backdrop.classList.remove("active");
  if (menuBtn) {
    menuBtn.classList.remove("active");
  }
  if (menuIcon) {
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-bars");
  }
  if (main) main.classList.remove("blur");
  document.body.style.overflow = "";
}


function toggleDropdown(link) {
  let dropdown = link.nextElementSibling;
  let caret = link.querySelector("#caret");

  if (dropdown.classList.contains("show")) {
    dropdown.classList.remove("show");
    caret.classList.remove("fa-caret-up");
    caret.classList.add("fa-caret-down");
  } else {
    dropdown.classList.add("show");
    caret.classList.remove("fa-caret-down");
    caret.classList.add("fa-caret-up");
  }
}

// Add keyboard and mobile support
document.addEventListener("DOMContentLoaded", function() {
  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
      closeNav();
    }
  });

  window.addEventListener("resize", function() {
    if (window.innerWidth > 768) {
      closeNav();
    }
  });
});
