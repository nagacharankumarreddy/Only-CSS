$(document).ready(function () {
  $(".next").click(() => {
    let cur = $(".active");
    let curBorder = $(".carousal-border");
    let next = cur.next();
    let nextBorder = curBorder.next();

    console.log(cur, next);

    if (next.length) {
      cur.removeClass("active carousal-border").css("z-index", -10);
      next.addClass("active carousal-border").css("z-index", +10);
      curBorder.removeClass(" carousal-border");
      nextBorder.addClass("carousal-border");
    }
  });
  $(".prev").click(() => {
    let cur = $(".active");
    let curBorder = $(".carousal-border");

    let prev = cur.prev();
    let prevBorder = curBorder.prev();

    if (prev.length) {
      cur.removeClass("active").css("z-index", -10);
      prev.addClass("active").css("z-index", +10);
      curBorder.removeClass(" carousal-border");
      prevBorder.addClass("carousal-border");
    }
  });
});
