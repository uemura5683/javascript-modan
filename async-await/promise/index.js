scrollEvent = function( trigger ) {
    return new Promise((resolve, reject) => {
      alert("hello world");
      resolve();
    }).then(() => {
      setTimeout( function() {
        alert("hello world second");
      }, 200 );
    }).catch(() => {
      reject();
    });
}
scrollEvent();