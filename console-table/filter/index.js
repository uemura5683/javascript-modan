// オブジェクトの配列、ただし firstName のみ表示

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

let mother = new Person("Jane", "Smith");
let father = new Person("John", "Smith");
let daughter = new Person("Emily", "Smith");
let sister = new Person("Nancy", "Smith");
let grandfather = new Person("Johnson", "Smith");
let grandmother = new Person("James", "Smith");

console.table([mother, father, daughter, sister, grandfather, grandmother], ["firstName"]);


