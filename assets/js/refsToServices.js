document.addEventListener("DOMContentLoaded", function () {
  var flexBoxes = document.querySelectorAll(".flex_einfliegen");

  flexBoxes.forEach(function (box) {
    box.addEventListener("click", function () {
      var target = this.getAttribute("data-target");
      window.location.href = target;
    });
  });
});
