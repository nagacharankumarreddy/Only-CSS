$(document).ready(function () {
  $(".toggler").click(() => {
    $(".nav-links").toggleClass("disp-nav");
    let margintop = $(".nav-links").css("margin-top");
    margintop == "-1000px"
      ? $(".toggler").animate({ padding: "+10px" })
      : $(".toggler").animate({ padding: "-10px" });
  });
  $("nav ul li a").click(() => {
    $(".nav-links").toggleClass("disp-nav");
  });

  $(".toggler").hover(
    () => {
      $(".h-line").css("background-color", "black");
    },
    () => {
      $(".h-line").css("background-color", "white");
    }
  );
});
