const goTop = (() => {
  let button = document.getElementById("goTop");
  let header_shadow = document.getElementsByTagName("header");
  window.onscroll = () => {
    button.classList[
        (document.documentElement.scrollTop > 300) ? "add" : "remove"
      ]("visible");
    header_shadow[0].classList[
        (document.documentElement.scrollTop > 50) ? "add" : "remove"
      ]("header_No-shadow_Mini");
  }
  button.onclick = () => {
    window.scrollTo({
      top:0, behavior:"smooth"
    })
  }
})();