function calculateOverlapTime(sA, tA, sB, tB) {
    // 制約のチェック
    if (
        sA < 1 || sA > 100 || tA < 1 || tA > 100 || 
        sB < 1 || sB > 100 || tB < 1 || tB > 100
    ) {
        throw new Error("すべての時刻は 1 以上 100 以下の整数である必要があります。");
    }

    if (tA <= sA) {
        throw new Error("tA は sA より大きい必要があります。");
    }

    if (tB <= sB) {
        throw new Error("tB は sB より大きい必要があります。");
    }

    // 最大の開始時間と最小の終了時間を計算
    const startOverlap = Math.max(sA, sB);
    const endOverlap = Math.min(tA, tB);

    // 重なる時間の長さを計算
    const overlapTime = Math.max(0, endOverlap - startOverlap);

    return overlapTime;
}
