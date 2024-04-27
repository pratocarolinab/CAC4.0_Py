// Scroll to top button
let goTop;
goTop = (() => {
  const button = document.getElementById("goTop");
  const header_shadow = document.getElementById("headerId");
  let nav_menu_items = document.querySelectorAll(".nav_menu_items");

  window.onscroll = () => {
    button.classList[
        (document.documentElement.scrollTop > 300) ? "add" : "remove"
        ]("visible");

    if (document.documentElement.scrollTop > 1) {
      header_shadow.classList.remove("header_shadow_Mini");
    } else {
      header_shadow.classList.add("header_shadow_Mini");
    }

    if (document.documentElement.scrollTop > 1) {
      nav_menu_items[0].style.top = "30px";
    } else {
      nav_menu_items[0].style.top = "50px";
    }
  }

  button.onclick = () => {
    window.scrollTo({
      top: 0, behavior: "smooth"
    })
  }
})();