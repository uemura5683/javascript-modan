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
}