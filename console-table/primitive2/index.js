// 文字列の配列
function Person(firstName, lastName, Users, age, birthday) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.users = Users;
  this.age = age;
  this.birthday = birthday
}

var me = new Person("John", "Smith", "1111", "33", "1988/11/11");

console.table(me);