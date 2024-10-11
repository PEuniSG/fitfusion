window.addEventListener("load", function () {
  let imgEinfliegen = document.querySelectorAll(".flex_einfliegen>img");

  function imViewport() {
    for (let i = 0; i < imgEinfliegen.length; i++) {
      if (imgEinfliegen[i].getBoundingClientRect().top >= 0) {
        if (
          imgEinfliegen[i].getBoundingClientRect().top <= window.innerHeight
        ) {
          imgEinfliegen[i].style.transform = "translateX(0)";
        }
      }
    }
  }
  imViewport();

  window.addEventListener("scroll", imViewport);
});
