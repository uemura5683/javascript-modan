let anchors = document.getElementsByTagName('a');

Array.prototype.forEach.call(anchors, function(anchor){  
  anchor.addEventListener('click', function(e){

    if(/#/.test(this.getAttribute('href'))){
      e.preventDefault();

      let href = this.getAttribute('href').replace('#', '');
      var target = document.getElementById('header');

      if(document.getElementById(href)){
        var target = document.getElementById(href);
      }

      target.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest"
      });
    }
  });
});