const goTop = (() => {
  let button = document.getElementById("goTop");
  window.onscroll = () => {
    button.classList[
        (document.documentElement.scrollTop > 200) ? "add" : "remove"
      ]("visible")
  }
  button.onclick = () => {
    window.scrollTo({
      top:0, behavior:"smooth"
    })
  }
})();