class Rectangle {
    constructor(a, b) {
        // 値の範囲をチェック
        if (!Number.isInteger(a) || !Number.isInteger(b) || a < 1 || a > 100 || b < 1 || b > 100) {
            throw new Error("A and B must be integers between 1 and 100.");
        }
        this.a = a;
        this.b = b;
    }

    // 正方形かどうかを判定するメソッド
    isSquare() {
        return this.a === this.b;
    }
}

// 入力例と出力例
try {
    const rect1 = new Rectangle(3, 3);
    console.log(rect1.isSquare() ? "Yes" : "No"); // 出力: Yes

    const rect2 = new Rectangle(3, 2);
    console.log(rect2.isSquare() ? "Yes" : "No"); // 出力: No

    // 制約外の値を入力した場合の例外発生
    const rect3 = new Rectangle(101, 50); // この行でエラーが発生します
    console.log(rect3.isSquare() ? "Yes" : "No");
} catch (error) {
    console.error(error.message); // 出力: A and B must be integers between 1 and 100.
}