    function toggleNav() {
      var sidenav = document.getElementById("mySidenav");
      sidenav.style.width = sidenav.style.width === "330px" ? "0" : "330px";
    }

    function toggleDropdown(link) {
      var dropdown = link.nextElementSibling;
      var caret = link.querySelector("#caret");

      if (dropdown.style.display === "none" || !dropdown.style.display) {
        dropdown.style.display = "block";
        caret.classList.remove("fa-caret-down");
        caret.classList.add("fa-caret-up");
      } else {
        dropdown.style.display = "none";
        caret.classList.remove("fa-caret-up");
        caret.classList.add("fa-caret-down");
      }
    }
