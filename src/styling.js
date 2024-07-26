document.addEventListener("scroll", function (e) {
  let header = document.querySelector(".header-inner");
  if (window.location.pathname === "/") {
    if (window.pageYOffset >= 200) {
      header.classList.add("light"); // Append your class to the header element
    } else if (window.pageYOffset === 0) {
      header.classList.remove("light"); // Append your class to the header element
    }
  }
});
