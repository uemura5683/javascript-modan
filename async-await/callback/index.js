let callback = 1;
let callback2 = 2;

setTimeout(function(){
  alert(callback);
  setTimeout(function(){
    alert(callback2);
    setTimeout(function(){
      alert(callback + callback2);
    }, 1000);
  }, 1000);
}, 1000);