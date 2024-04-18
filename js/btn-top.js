const goTop = (() => {
  let button = document.getElementById("goTop");
  let header_shadow = document.getElementsByTagName("header");

  window.onscroll = () => {
    button.classList[
        (document.documentElement.scrollTop > 300) ? "add" : "remove"
      ]("visible");

    header_shadow[0].classList[
        (document.documentElement.scrollTop < 200) ? "add" : "remove"
      ]("header_shadow_Mini");
  }

  window.onload = () => {
    // header_shadow[0].classList[document.documentElement.scrollTop]("header_shadow_Mini");
    header_shadow[0].classList[(document.documentElement.top = 0) ? "add" : "remove"]("header_shadow_Mini");

        // header_shadow[0].classList("header_shadow_Mini").style.
        // ]("header_shadow_Mini");
  }

  button.onclick = () => {
    window.scrollTo({
      top:0, behavior:"smooth"
    })
  }
})();