
  /*
  * Swiper
  */
  var SwiperObject = (function() {

    var SwiperObject = function( el, option, resize_flag ) {
      this.$el = el;
      this.instances = [];
      this.w_width;
      this.slider_option = option;
      this.resize_flag = resize_flag;
    }
    SwiperObject.prototype = {
      init: function() {
        this.load();
        if ( this.resize_flag ) {
          this.resize();
        }
      },
      get_width: function() {
        this.w_width = window.innerWidth || $(document).$(documentElement).clientWidth || $( window ).innerWidth();
        return this.w_width;
      },
      create: function() {
        this.instances[0] = new Swiper ( this.$el, this.slider_option );
      },
      destroy: function() {
        if ( this.instances.length > 0 ) {
          this.instances[0].destroy( true, true );
          this.instances = [];
        }
      },
      resize: function() {
        var timer = false,
            self = this;
        $( window ).resize( function() {
            if ( timer !== false ) {
                clearTimeout( timer );
            }
            timer = setTimeout( function() {
              if ( ( self.get_width() >= 768 ) && ( self.instances.length == 0 ) ) {
                self.create();
              } else if ( ( self.get_width() <= 767 ) && ( self.instances.length > 0 ) )  {
                self.destroy();
              } 
            }, 200);
        });
      },
      load: function() {
        if ( this.resize_flag ) {
          if ( this.get_width() >= 768 ) {
            this.create();
          }
        }
        else {
          this.create();
        }
      }
    }

    return SwiperObject;

  })();


  swiperrender = function() {

    function countdown(num) {
        let countdom   = document.querySelector('.p-countdown-dom')
          , classname  = 'is-countdown'
          , parentdom  = 'p-main-visual'
          , swiperslide = document.querySelectorAll('.swiper-slide');
        if( countdom != null ) {
          if( swiperslide[num].classList.contains(classname) ) {
            swiperslide[num].appendChild(countdom);
            countdom.style.display = 'block';
          }
        }
     }

    let main_visual = document.querySelector('.js-main-visual-slider');

    if ( main_visual != null ) {
      var top_main_slider_option = {
        autoplay: {
          delay: 5000,
        },
        slidesPerView: 1.44,
        spaceBetween: 4,
        centeredSlides : true,
        loop: true,
        pagination: {
          el: '.p-main-visual .swiper-pagination',
          clickable: true
        },
        preloadImages: false,
        lazy: true,
        loopAdditionalSlides: 1,
        on: {
          init: function() {
            this.lazy.loadInSlide(this.activeIndex - 1);
            countdown(this.activeIndex);
          },
          slideChange: function () {
            countdown(this.activeIndex);
          }
        },
        breakpoints: {
          979: {
            slidesPerView: 1.05,
          }
        }
      },
      top_main_slider =  new SwiperObject( '.js-main-visual-slider', top_main_slider_option, false );
      top_main_slider.init();
    }

  }

  window.addEventListener( 'load', swiperrender, false );