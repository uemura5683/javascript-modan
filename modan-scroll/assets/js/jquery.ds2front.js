;(function($) {

  'use strict';

  // ds2front: methods object
  $.ds2front = {
    // methods: dropdown
    // available when you specify the "dropdown" in the eventType
    dropdown : function (options) {
      var active = 'active', open = 'open'
      // options: defaults, callbacks, options to merge
      ,defaults = {
        listener:   'click'
       ,animation:  'slide'
       ,target:     'li'
       ,relationIs: 'children'
       ,dropTarget: '.dropdown'
       ,speed:      'fast'
       ,hiddenAtFirst:    true
       ,outerClickOption: false
       // ,listener:   'hover'
       // ,animation:  'slide'
       // ,relationIs: 'siblings'
       // ,relationIs: 'next'
       // ,relationIs: 'prev'
      }
      // callbacks: default functions
      ,callbacks = {
         shown:  function () {}
        ,hidden: function () {}
      }
      ,settings = $.extend(true, {}, callbacks, defaults, options)
      // to get the object for animation
      ,getDropObject = function (obj) {
        if (settings.relationIs === 'children') return obj.find(settings.dropTarget);
        else if (settings.relationIs === 'siblings') return obj.siblings(settings.dropTarget);
        else if (settings.relationIs === 'next') return obj.next(settings.dropTarget);
        else if (settings.relationIs === 'prev') return obj.prev(settings.dropTarget);
      }
      // to set the animation
      ,doAnimate = function (obj) {
        return obj.each( function () {
          var $node = $(this);
          if (settings.shown) settings.shown($node);
          if (settings.animation === 'fade') $node.addClass(open).stop(true, true).fadeToggle(settings.speed);
          else if (settings.animation === 'slide') $node.addClass(open).stop(false, true).slideToggle(settings.speed);
        });
      }
      // to offset the animation
      ,doDisAnimate = function (obj) {
        return obj.each( function () {
          var $node = $(this);
          if ($node.hasClass(open)) {
            if (settings.hidden) settings.hidden($node);
            if (settings.animation === 'fade') $node.removeClass(open).stop(true, true).fadeToggle(settings.speed);
            else if (settings.animation === 'slide') $node.removeClass(open).stop(false, true).slideToggle(settings.speed);
          }
        });
      }

      if (typeof this.data('dropdown') === 'undefined') {
        return this.each( function () {
          var self = $(this);
          // animation: hover
          // to run if there is a specified "hover" in animation
          if (settings.listener === 'hover') {
            self.find('>'+settings.target).on({
              'mouseenter' : function () {
                doAnimate(getDropObject($(this)))
              },
              'mouseleave' : function () {
                doDisAnimate(getDropObject($(this)))
              }
            });
          }
          // animation: click
          // to run if there is a specified "click" in animation
          else if (settings.listener === 'click') {
            self.find('>'+settings.target).on({
              'click' : function (e) {
                var $target = getDropObject($(this))
                    ,permission = !$target.hasClass(open);
                if ($target.get(0)) e.preventDefault();
                doDisAnimate(self.find(settings.dropTarget));
                if (permission) doAnimate($target);
              }
            });
            // case is click the outer element
            if (settings.outerClickOption) {
              $(document).on({
                'click' : function (e) {
                  if (!$.contains(self[0], e.target)) {
                    doDisAnimate(self.find(settings.dropTarget), settings.animation);
                  }
                }
              });
            }
          }
          // data prop: dropdown
          // to set data attribute for reuse
          self.data('dropdown', {
              node: self
             ,options: settings
          });
        });
      } else {
        return this;
      }
    }
  }
  // ds2front: function
  $.fn.ds2front = function (options) {
    if (typeof options === 'undefined') options = {};
    if (typeof options === 'object') {
      var args = Array.prototype.slice.call(arguments);
      if ($.ds2front[options.eventType]) {
        $.ds2front[options.eventType].apply(this, args);
      }
    }
    return this;
  }

})(jQuery);