/************************************
* クラスフィールド宣言ができるようになった
************************************/

class Human {
  age = 18;
}

const human = new Human();
console.log(human.age); // 18

class Human_2 {
 age = 34;
 name = '植村修好';
}

const human_2 = new Human_2;
console.log(human_2.age);
console.log(human_2.name);

class Human_static {
  static age = 34 + '_static';
  static name = '植村修好' + '_static';
}
console.log(Human_static.age);
console.log(Human_static.name);

/************************************
* プライベートなフィールドとメソッドが使えるようになった
* プライベートなフィールドやメソッドはクラスの外からアクセスできず、
* クラスの内側からしかアクセスできないものです。
************************************/

// 従来
class MyClass {
  name;
  
  constructor(name) {
    this.name = name
  }

  hello() {
    console.log(`こんにちは${this.name}さん！`)
  }
}

const foo = new MyClass("田中");
foo.hello(); // 「こんにちは田中さん！」と出力される
console.log(foo.name);  // 「田中」と出力される
// nameの書き換えが可能
foo.name = "鈴木";
foo.hello(); // 「こんにちは鈴木さん！」と出力される

// プライベート
class MyClass_Private {
  #name;

  constructor(name) {
    this.#name = name
  }
  hello() {
    console.log(`こんばんは${this.#name}くん！`)
  }
}
const foo_private = new MyClass_Private('植村');
foo_private.hello();
//console.log(foo_private.#name);
//syntac error

/**
* メソッドやスタティックとも組み合わせられる
**/
class MyClass_all {
  // public field
  foo = "public field: 寿司";
  // private field
  #bar = "private field: ラーメン";

  // public static field
  static qux = "public static field: うどん";
  // private static field
  static #corge = "private static field: 麻婆豆腐";

  // public method
  grault() {
    return console.log("public method: みかん");
  }

  // private method
  #garply() {
    return console.log("private method: ぶどう");
  }

  // public static method
  static waldo() {
    return console.log("public static method: みかん");
  }

  // private static method
  static #fred() {
    return console.log("private static method: ぶどう");
  }

  constructor() {
    //console.log(this.#bar);
    //console.log(MyClass.#corge);
    //this.#garply();
    //MyClass.#fred();
  }
}

/**
* staticあり
**/
console.log(MyClass_all.qux);
MyClass_all.waldo();
// 実行してしまうとprivateにつきエラー
// console.log(MyClass.#corge);
// MyClass.#fred();

/**
* staticなし
**/
const myInstance = new MyClass_all();
console.log(myInstance.foo);
myInstance.grault();
// 実行してしまうとprivateにつきエラー
// console.log(MyClass.#bar);
// MyClass.#garply();

/************************************
* instanceofよりも安全にインスタンスかどうかの確認ができる、
* プライベートフィールドのin演算子
************************************/

/**
* 前提知識① insntanceof演算子は正確にインスタンスのチェックができない
**/

class MyClass_insntanceof {
}

const myInstanceof = new MyClass_insntanceof();
console.log(myInstanceof instanceof MyClass_insntanceof); // true

/**
* しかし、instanceofには注意すべき挙動があります。次のコードを見てください。
**/
class MyClass_exapmple {
}

const myInstance_ex = new MyClass_exapmple();

const foo_ex = {
  name: "名探偵コナン"
};

// ポイント
Object.setPrototypeOf(foo_ex, myInstance_ex);
console.log(foo_ex instanceof MyClass_exapmple); // trueになってしまう！

// foo_exはmyclassのインスタンスではない「Object.setPrototypeOf」を利用すると
// trueと返ってしまう。

/**
* 前提知識② プライベートフィールドでインスタンスのチェック
* 上記の問題を解決するために、プライベートフィールドを使います。プライベートフィールドには、存在しないプライベートフィールドにアクセスしようとすると例外をスローをする仕組みがあります。
**/

class MyClass_instance_private {
  #myBrand

  static isMyClass(object) {
    try {
      object.#myBrand;
      return true;
    } catch {
      return false
    }
  }
}

const myInstance_ex2 = new MyClass();
console.log(MyClass_instance_private.isMyClass(myInstance_ex2)); // true

const foo_ex2 = {
  name: "名探偵コナン"
};

// ポイント
Object.setPrototypeOf(foo_ex2, myInstance_ex2);
console.log(MyClass_instance_private.isMyClass(foo_ex2)); // false

//正しくインスタンスのチェックができるようになりました。が、try・catchの処理は煩雑ですね。
// そこで登場したのが、ES2022のプライベートフィールドのためのinです。

class MyClassin {
  #myBrand;

  static isMyClassin(object) {
    return #myBrand in object;
  }
}

const myInstancein = new MyClassin();

console.log("↓MyClassin.isMyClassin(myInstancein)");
console.log(MyClassin.isMyClassin(myInstancein));

const foo_ex3 = {
  name: "名探偵コナン"
};

console.log("↓MyClassin.isMyClassin(foo_ex3)");
console.log(MyClassin.isMyClassin(foo_ex3));

/*
あるコードで作られたデータが、特定のデータ型かどうかをチェックすることを、
tc39では「ブランドチェック（brand check）」と呼んでいます。
Array.isArray(データ)で引数のデータが配列かどうかをチェックすることは、ブランドチェックの好例です。
よく間違えられていますが、instanceofはブランドチェックではありません。

今回のようにあるオブジェクトがMyClassのデータかどうかをチェックすることは、
プライベートフィールドとin演算子を使ってブランドチェックをしていると言えます。
inを使ってシンプルにブランドチェックができるので、
この提案の名前は「Ergonomic brand checks」（使いやすいブランドチェック）なのです。
*/


