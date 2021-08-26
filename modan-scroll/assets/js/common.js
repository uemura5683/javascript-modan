  
  //-----------------------
  // category accordion
  //-----------------------
  $(function() {
    $(".list-category .has-child").click(function(){
      if($(this).is(".select")){
        $(this).removeClass("select");
      } else {
        $(this).addClass("select");
      }
      $(this).next(".child-category").slideToggle("normal","swing");
      return false;
    });
  
    //子カテゴリーactive時
    $(".child-category").each(function(){
      if($(this).children().hasClass("active")){
        $(this).css({"display":"block"});
        $(this).prev().find(".has-child").addClass("select");
      }
    });
  });
  
  //-----------------------
  // smp list category accordion
  //-----------------------
  $(function(){
    var doc
    ,CONST_TAB_W = 980
    ,check_doc_size = function () {
      doc = {
        width: $($(document)).width(),
        height: $($(document)).height()
      }
      return doc;
    };
    // category list - child
    $('#sidearea #category > ul li.has_child').ds2front({
       eventType: 'dropdown'
      ,listener: 'click'
      ,animation: 'slide'
      ,target: 'a'
      ,relationIs: 'next'
      ,dropTarget: '.nav-list'
      ,shown: function (obj) {
        $('#sidearea #category > ul li.has_child a').removeClass('open');
        $('#sidearea #category > ul li.has_child .child-category').removeClass('open').slideUp('fast');
        obj.prev('a').addClass('open');
      }
      ,hidden: function(obj) {
        obj.prev('a').removeClass('open');
      }
    });
  
  });
  

  $(function(){
    let is_flag     = $('#sidearea').length ? true : false; // 判定フラグ
       shouldPcFunction = function () {
          return ( ( window.innerWidth || document.documentElement.clientWidth || 0 ) >= 979 );
        }; // ブレイクポイント判定フラグ

    if( is_flag ) { // サイドナビの要素が存在していた時に処理をする
      var start_pos = 0;
      $( window ).on( 'scroll resize load', function(){
        let target      = $('#sidearea')
          , parent      = $('body.item .list-layout > .span3')
          , maincont    = $('body.item .list-layout > .span9')
          , checkitem   = $('#checked-items').length ? $('#checked-items').outerHeight(true) + 80 : 0
          , headerH     = $('#page-header').outerHeight(true)
          , footerH     = $('#page-footer').outerHeight(true)
          , windowS     = $(window).scrollTop()
          , windowH     = $(window).outerHeight(true)
          , docmentH    = $(document).innerHeight()
          , targetH     = target.outerHeight(true)
          , targetT     = parent.get(0).offsetTop
          , targetL     = parent.get(0).offsetLeft
          , targetB     = docmentH - footerH - windowH - targetH
          , targetW     = parent.width()
          , maincontH   = maincont.outerHeight(true)
          , is_normal   = { "position":"static", "bottom": "auto", "top":"0", "left": '0px', "transform": 'translate3d(0px, 0px, 0px)', "width": '100%' }
          , is_sticky   = { "position":"fixed", "bottom": "0", "top": "auto", "left": targetL + 'px', "transform": 'translate3d(0px, 0px, 0px)', "width": targetW + 'px'}
          , is_sticky_t = { "position":"fixed", "bottom": "auto", "top": headerH + 'px', "left": targetL + 'px', "transform": 'translate3d(0px, 0px, 0px)', "width": targetW + 'px'}
          , is_asolute  = { "position":"absolute", "bottom": "0", "top": "auto", "left": '0px', "transform": 'translate3d(0px, 0px, 0px)', "width": '100%'}
          , current_pos = $(this).scrollTop()
          , isscrolltop = function() {
              // スクロール中か最下層の時
              if( windowS > (targetT - headerH) ) {
                // 最下層のとき
                if( windowS > (docmentH - footerH - checkitem - targetH) ) {
                  target.css( is_asolute );
                // スクロール中の時
                } else {
                  if( targetH > windowH - headerH ) {
                    target.css( is_sticky );
                  } else {
                    target.css( is_sticky_t );
                  }
                }
              // 最上部の時
              } else {
                target.css( is_normal );
              }
            }
          , isscrollbtm = function() {
              // 最下層のとき
              if( windowS > (docmentH - footerH - checkitem- targetH) ) {
                target.css( is_asolute );
              } else {
                // 最上部のとき
                if( windowS < targetT - headerH) {
                  target.css( is_normal );
                // スクロール中の時
                } else {
                  target.css( is_sticky_t );   
                }
              }
            }
          // ブレイクポイントがPCまたはサイドナビの高さがメインビジュアルの高さのほうが大きい時
          if( shouldPcFunction() && maincontH > targetH ) {
            // 下へスクロールするとき
            if (current_pos > start_pos) {
              isscrolltop();
            // 上へスクロールするとき
            } else if (current_pos < start_pos) { 
              isscrollbtm();
            } else {
              isscrolltop();
            }
            start_pos = current_pos;
          } else {
            // SMPはサイドナビの追従をリセット
            target.css( is_normal );
          }
      });
    }
  });