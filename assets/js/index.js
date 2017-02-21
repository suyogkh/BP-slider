(function ( $ ) {
    $.fn.slider = function( options ) {
      var index, displaycount, cyclecount, slideholderwidth, slideListWidth, unit, val;
      var s = $.extend({
        displayCount : 1,
        cycleCount : 1,
        mesurementUnit : "vw",
        widthValue : 80
      }, options );
      index = 0;
      displaycount = s.displayCount;
      cyclecount = s.cycleCount;
      unit = s.mesurementUnit;
      val = s.widthValue;

      // SlideList Width
      $(".Slide-holder").css("width", val + unit);
      slideHolderWidth = $(".Slide-holder").width();
      slideHolderHeight = $(".Slide-holder").height();
      slideListWidth = slideHolderWidth / displaycount;
      $(".Slide-list").css("width", slideListWidth);
      $(".Slide-list").css("height", slideHolderHeight);

      // Slide list length
      slideListLength = $(".Slide-list").length

      // cyclecount mesurement
      if (displaycount < cyclecount) {
        cyclecount =  displaycount;
      }
      cyclelength = cyclecount * slideListWidth;

      // sliding right function
      var SlideRight =  function() {
        index = index + cyclecount;
        if (index < slideListLength) {
          $(".Slide-list:first").css('margin-left', "-"+ slideListWidth * index + "px");
        }
        if (index >= slideListLength) {
          index = slideListLength-1;
        }
      }

      // sliding left function
      var SlideLeft =  function() {
        index = index - cyclecount;
        if (index < slideListLength) {
          $(".Slide-list:first").css('margin-left', "-"+ slideListWidth * index + "px" );
        }
        if (index <= 0) {
          index = 0;
        }
      }

      $("#slideLeft").on('click', function() {
        SlideLeft()
      })
      $("#slideRight").on('click', function() {
        SlideRight()
      })
    };
}( jQuery ));
