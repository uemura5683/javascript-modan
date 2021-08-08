let callback = 1;
let callback2 = 2;

setTimeout(function(){
  console.log(callback);
  setTimeout(function(){
    console.log(callback2);
    setTimeout(function(){
      console.log(callback + callback2);
    }, 1000);
  }, 1000);
}, 1000);