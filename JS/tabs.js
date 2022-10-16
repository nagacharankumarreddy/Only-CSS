var buttons = $(".test-content-heads button");
var tabs = $(".tab-content");
function show(index) {
  $.each(buttons, function (element) {
    $(buttons[element]).css({ "background-color": "white", color: "black" });
  });
  $(buttons[index]).css({ "background-color": "black", color: "white" });

  $.each(tabs, function (element) {
    $(tabs[element]).css({ display: "none" });
  });

  $(tabs[index]).css({ display: "block" });
}
$(tabs[0]).css({ display: "block" });

console.log(buttons, tabs);
