$(document).ready(function () {
  $(".next").click(() => {
    let cur = $(".active");
    let curBorder = $(".carousal-border");
    let next = cur.next();
    let nextBorder = curBorder.next();

    if (next.length) {
      cur.removeClass("active carousal-border").css("z-index", -10);
      next.addClass("active carousal-border").css("z-index", +10);
      curBorder.removeClass("carousal-border").css({
        "border-bottom": "2px solid white",
        opacity: "0.5",
        color: "rgb(100,100,100)",
      });
      nextBorder.addClass("carousal-border").css({
        "border-bottom": "2px solid black",
        opacity: "1",
        color: "rgb(208, 60, 222)",
      });
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
      curBorder
        .removeClass(" carousal-border")
        .css({
          "border-bottom": "2px solid white",
          opacity: "0.5",
          color: "rgb(100,100,100)",
        });

      prevBorder
        .addClass("carousal-border")
        .css({
          "border-bottom": "2px solid black",
          opacity: "1",
          color: "rgb(208, 60, 222)",
        });
    }
  });
  $(".prev").hover(
    () => {
      $(".prev").css({
        "background-color": "white",
        color: "black",
        border: "2px dotted black",
        position: "relative",
      });
    },
    () => {
      $(".prev").css({
        "background-color": "black",
        color: "white",
      });
    }
  );
  $(".next").hover(
    () => {
      $(".next").css({
        "background-color": "white",
        color: "black",
        border: "2px dotted black",
      });
    },
    () => {
      $(".next").css({ "background-color": "black", color: "white" });
    }
  );
});
