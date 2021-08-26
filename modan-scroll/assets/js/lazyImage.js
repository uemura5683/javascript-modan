//------------------------------
//lazyImage
// 1. "speed" is the speed of animation.
// 2. "animation" is the pattern of animation.
//------------------------------
$.fn.extend({
  lazyImage: function(speed,animation){
    var speed = speed.indexOf!="undefined"? speed : 600 ;
    var animation = animation.indexOf!="undefined"? animation : "swing" ;
    var $tname = $(this).find("img[data-src]");
    this.each(function(){
      $tname.each(function(){
        if($(this).attr("data-src") != "undefined" && $(this).attr("data-src") != $(this).attr("src") ){
          $(this).attr("src",$(this).attr("data-src"));
					$(this).show(0);
        }
      });
    });
  }
});

$.fn.extend({
  lazyScroll: function(speed,animation){
    var speed = speed.indexOf!="undefined"? speed : 400 ;
    var animation = animation.indexOf!="undefined"? animation : "swing" ;
    var $tname = $(this).find("img[data-src]");
    var $self = this;
    var pos = 0;
    $self.each(function(){
      $tname.each(function(){
        if(!$(this).is('.active')){
          pos = $(this).offset().top - $(window).height();
          if($(window).scrollTop() > pos && !$(this).is('.active') ){
            $(this).addClass('active').hide(0).attr("src",$(this).attr("data-src"));
						$(this).fadeIn();
//			console.log("testtest");
//            $(this).dequeue();
          }
        }
      });
    });

  }
});


if ( /webkit.*mobile/i.test(navigator.userAgent)) {
  (function($) {
      $.fn.offsetOld = $.fn.offset;
      $.fn.offset = function() {
        var result = this.offsetOld();
        result.top -= window.scrollY;
        result.left -= window.scrollX;
        return result;
      };
  })(jQuery);
}