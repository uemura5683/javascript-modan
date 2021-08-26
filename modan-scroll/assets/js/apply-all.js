function stickey() {
  var stickey_el    = $( '#page-header .brand' ),
      stickey_el_h  = $( '#page-header .brand' ).height(),
      base_h        = $( '#page-header' ).height();
      nav_container = $( '.navbar-inner .container' ).height();
  $( '.navbar-inner .container' ).css( 'height', nav_container );
  $(window).scroll(function() {
    var sc = $(this).scrollTop();
    if ( base_h < sc ) {
      stickey_el.addClass( 'fixed' );
    }
    else {
      stickey_el.removeClass( 'fixed' );
    }
  });
}

(function () {
  var windowsize = window.innerWidth || document.documentElement.clientWidth || $( window ).innerWidth();
  if ( windowsize < 980 ) {
    stickey();
  }
  else {
    $( '.navbar-inner .container' ).css( 'height', 'auto' );
  }
}());

//リサイズ時の処理を定義
(function () {
  var timer = 0;
  window.onresize = function () {
    if (timer > 0) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      var windowsize = window.innerWidth || document.documentElement.clientWidth || $( window ).innerWidth();
      if ( windowsize < 980 ) {
        stickey();
      }
      else {
        $( '.navbar-inner .container' ).css( 'height', 'auto' );
      }
    }, 200);
  };
}());

// ds2 ajax templates
ds2_ajax = function (parameters) {
  var deferred = $.Deferred()
     ,defaults = {
        url: ''
       ,data: {}
       ,dataType: 'html'
     }
     ,parameters = $.extend(true, {}, defaults, parameters);
  $.ajax(parameters)
  .done( function (data, status, jqXHR) {
    deferred.resolve(data, status, jqXHR)
  })
  .fail( function (jqXHR, textStatus, errorThrown) {
    deferred.reject(jqXHR, textStatus, errorThrown)
  })
  .progress( function () {
    deferred.notify()
  })
  .then(
    function (data, status, jqXHR) {
      deferred.resolve(data, status, jqXHR)
    }
   ,function (jqXHR, textStatus, errorThrown) {
      deferred.reject(jqXHR, textStatus, errorThrown)
    }
   ,{}
  )
  return deferred.promise();
}

// ds2 parallel ajax
ds2_parallel_ajax = function (parameters) {
  var thread = parameters.length
     ,ajaxes = [];
  for (var i=0; i < thread; i++) {
    ajaxes.push(ds2_ajax(parameters[i]));
  }
  return ajaxes;
}