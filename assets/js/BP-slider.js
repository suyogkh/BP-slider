(function ( $ ) {
    $.fn.slider = function( options ) {
      var currentelement = $(this);
      var index, displaycount, cyclecount, slideholderwidth, slideListWidth, unit, val, autoSlide, slideDuration;
      var s = $.extend({}, {
        displayCount : 1,
        cycleCount : 1,
        mesurementUnit : "vw",
        widthValue : 80,
        autoSlide: false,
        slideDuration: 2000
      }, options );
      index = 0;
      displaycount = s.displayCount;
      cyclecount = s.cycleCount;
      unit = s.mesurementUnit;
      val = s.widthValue;
      autoSlide =  s.autoSlide;
      slideDuration = s.slideDuration;

      // SlideList Width
      currentelement.find(".Slide-holder").css("width", val + unit);
      slideHolderWidth = currentelement.find(".Slide-holder").width();
      slideHolderHeight = currentelement.find(".Slide-holder").height();
      slideListWidth = slideHolderWidth / displaycount;
      currentelement.find(".Slide-list").css("width", slideListWidth);
      currentelement.find(".Slide-list").css("height", slideHolderHeight);

      // Slide list length
      slideListLength = currentelement.find(".Slide-list").length

      // cyclecount mesurement
      if (displaycount < cyclecount) {
        cyclecount =  displaycount;
      }
      cyclelength = cyclecount * slideListWidth;

      // sliding right function
      var SlideRight =  function() {
        index = index + cyclecount;
        if (index < slideListLength) {
          currentelement.find(".Slide-list:first").css('margin-left', "-"+ slideListWidth * index + "px");
        }
        if (index >= slideListLength) {
          index = slideListLength-1;
        }
      }
      var SlideRightLoop =  function() {
        currentelement.find(".Slide-list:first").css('margin-left', "-"+ 80 + "vw");
        setTimeout(function() {
          currentelement.find(".Slide-list:first").appendTo(currentelement.find(".Slide-holder"));
        }, 500)
        currentelement.find(".Slide-list:last").css('margin-left', "-"+ 0 + "vw");
      }

      // sliding left function
      var SlideLeft =  function() {
        console.log(currentelement);
        index = index - cyclecount;
        if (index < slideListLength) {
          currentelement.find(".Slide-list:first").css('margin-left', "-"+ slideListWidth * index + "px" );
        }
        if (index <= 0) {
          index = 0;
        }
      }

      currentelement.find(".slideLeft").on('click', function() {
        SlideLeft()
      })
      currentelement.find(".slideRight").on('click', function() {
        SlideRight()
      })
      if (autoSlide) {
        setInterval(SlideRightLoop, slideDuration);
      }
    };
}( jQuery ));
