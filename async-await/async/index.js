class Thenable {
  constructor(num) {
    this.num = num;
  }
  then(resolve, reject) {
    alert(resolve); // function() { native code }
    // 1000ms 後に this.num*2 で解決する
    setTimeout(() => resolve(this.num * 2), 1000); // (*)
  }
};

async function func() {
  // 1秒待って、結果は 2　になる
  let result = await new Thenable(1);
  alert(result);
}

func();