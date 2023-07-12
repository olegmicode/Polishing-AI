$(function () {
    var centerInfoWindow = function () {
      if (window.innerWidth > 960) {
        $(".info-arrow").show();
        var position = $("#custom-handle").position();
        var handleWidth = $("#custom-handle").outerWidth();
        var width = $(".info-window").outerWidth();
        var left = position.left + handleWidth / 2;
        var leftWindow = left - width / 2;
        $(".info-window").css({
          left: leftWindow - 4,
        });
      } else {
        $(".info-window").removeAttr("style");
        $(".info-arrow").hide();
      }
    };
    var setValue = function (value) {
      $(".fee-amount").text(
        "$" + (value / 10).toLocaleString()
      );
    };
    var handle = $("#custom-handle");
    $("#slider").slider({
      range: "min",
      min: 1000,
      max: 10000,
      step: 100,
      value: 5800,
      create: function () {
        var value = $(this).slider("value");
        handle.text("$" + value.toLocaleString());
        centerInfoWindow();
        setValue(value);
      },
      slide: function (event, ui) {
        handle.text("$" + ui.value.toLocaleString());
        centerInfoWindow();
        setValue(ui.value);
      },
      change: function (event, ui) {
        centerInfoWindow();
        setValue(ui.value);
      },
    });
    $(window).resize(function () {
      centerInfoWindow();
    });
  });