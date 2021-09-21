class MyClass {
  // public field
  apple = "public field: 1.apple";
  // private field
  banana = "private field: 2.banana";

  // public static field
  static orange = "public static field: 3.orange";

  // private static field
  static melon = "private static field: 4.melon";

  // public method
  melon() {
    return console.log("public method: 5.water melon");
  }

  // private method
  grape() {
    return console.log("private method: 6.grape");
  }

  // public static method
  static pineapple() {
    return console.log("public static method: 7.pineapple");
  }

  // private static method
  static kiwi() {
    return console.log("private static method: 8.Kiwi");
  }

  constructor() {
    console.log(this.banana); /*banana*/
    console.log(MyClass.melon); /*4.melon*/
    this.grape(); /*6.grape*/
    MyClass.kiwi(); /*8.kiwi*/
  }
}

console.log(MyClass.orange);/*3.orange*/
MyClass.pineapple(); /*7.pineapple*/

const myInstance = new MyClass();
console.log(myInstance.apple); /*1.apple*/
myInstance.melon(); /*watermelon*/

/**
result

public static field: 3.orange
public static method: 7.pineapple
private field: 2.banana
private static field: 4.melon
private method: 6.grape
private static method: 8.Kiwi
public field: 1.apple
public method: 5.water melon

*/