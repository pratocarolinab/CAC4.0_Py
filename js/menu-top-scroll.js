let lastScrollTop = 0;
window.onscroll = function() {
  let st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > lastScrollTop) {
    document.getElementById("menu-top").style.top = "-100%";
  } else {
    document.getElementById("menu-top").style.top = "0";
  }
  lastScrollTop = st;
};