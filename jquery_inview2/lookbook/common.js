animate_init = function(){
  //画面に入るたびに毎回動作する
  $(".inview").on("inview", function (event, isInView) {
    if (isInView) {
      var delay = $(this).data('delay') ? $(this).data('delay') : 0
        , duration = $(this).data('duration') ? $(this).data('duration') : 0;
      $(this).css('visibility', 'visible');
      if( delay > 0 ){
        let animation = {
          'animation-delay': delay + 's',
          'animation-duration': duration + 's'
        }
        $(this).css( animation );
      }
      $(this).addClass('animate__'+ $(this).data('animate') );       
    }
  });
};
$(document).ready(function(){
  animate_init();
});