// オブジェクトの配列

function Person(firstName, lastName, age, birthday) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.birthday = birthday;
}

var john = new Person("John", "Smith", "24", "1996/1/5");
var jane = new Person("Jane", "Doe", "32", "1988/10/3");
var emily = new Person("Emily", "Jones", "27", "1993/4/23");
var mike = new Person("Mike", "Jonson", "30", "1990/3/5");


console.table([john, jane, emily, mike]);