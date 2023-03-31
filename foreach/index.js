let listUser = [
  { id: 1, name: 'Alice', status: 'active' },
  { id: 2, name: 'Bob', status: 'inactive' },
  { id: 3, name: 'Charlie', status: 'active' },
  { id: 4, name: 'Dave', status: 'active' }
];
 
let activeUsers = listUser.filter(object => object.status === 'active');
 
console.log(activeUsers); 
// [{ id: 1, name: 'Alice', status: 'active' }, { id: 3, name: 'Charlie', status: 'active' }, { id: 4, name: 'Dave', status: 'active' }]


let listUserfind = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
  { id: 4, name: 'Dave' }
];
 
let result = listUserfind.find(object => object.id === 3);
 
console.log(result); 
// { id: 3, name: 'Charlie' }


let listUserfindindex = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
  { id: 4, name: 'Dave' }
];
 
let index = listUserfindindex.findIndex(object => object.id === 3);
 
console.log(index); 
// 2

let listProductreduce = [
  { name: 'Product 1', quantity: 5 },
  { name: 'Product 2', quantity: 3 },
  { name: 'Product 3', quantity: 7 }
];
 
let totalQuantity = listProductreduce.reduce((sum, object) => sum + object.quantity, 0);
 
console.log(totalQuantity); 
// 15