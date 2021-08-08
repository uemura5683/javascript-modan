function blockTime(timeout) {
  const startTime = Date.now();
  // `timeout`ミリ秒経過するまで無限ループをする
  while (true) {
      const diffTime = Date.now() - startTime;
      if (diffTime >= timeout) {
          alert('終了です');
          return; // 指定時間経過したら関数の実行を終了
      }
  }
}
blockTime(5000) // 5秒処理を止める