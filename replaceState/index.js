var scroll_y = window.scrollY;
var page = [
  {
    title: 'Page1',
    url: 'url4.html'
  },
  {
    title: 'Page2',
    url: 'url3.html'
  },
  {
    title: 'Page3',
    url: 'url2.html'
  }
];

// アドレスバーのURLをページ移動せずに変更する
window.addEventListener('DOMContentLoaded', function(){

  window.addEventListener('scroll', function(){
    scroll_y = window.scrollY;

    if( 2000 < scroll_y ) {
      history.pushState('', page[2].title, page[2].url);
    } else if( 1000 < scroll_y ) {
      history.pushState('', page[1].title, page[1].url);
    } else {
      history.pushState('', page[0].title, page[0].url);
    }
  });
});