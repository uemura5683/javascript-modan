class MyClass {
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
    console.log(this.#bar);
    console.log(MyClass.#corge);
    this.#garply();
    MyClass.#fred();
  }
}

console.log(MyClass.qux);
MyClass.waldo();
// 実行してしまうとprivateにつきエラー
// console.log(MyClass.#corge);
// MyClass.#fred();

const myInstance = new MyClass();
console.log(myInstance.foo);
myInstance.grault();
// 実行してしまうとprivateにつきエラー
// console.log(MyClass.#bar);
// MyClass.#garply();


/**
* #を使ってプライベートなフィールドを宣言する
**/

class MyClass2 {
  // プライベートなフィールド
  #name;
  
  constructor(name) {
    this.#name = name
  }

  hello() {
    console.log(`こんにちは${this.#name}さん！`)
  }
}

const foo = new MyClass2("田中");
foo.hello(); // 「こんにちは田中さん！」と出力される