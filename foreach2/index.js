let listProduct = [
  { id: 1, name: 'Apple', type: 'fruit' },
  { id: 2, name: 'Orange', type: 'fruit' },
  { id: 3, name: 'Banana', type: 'fruit' },
  { id: 4, name: 'Tomato', type: 'vegetable' },
  { id: 5, name: 'Carrot', type: 'vegetable' }
];
 
let types = [...new Set(listProduct.map(object => object.type))];
 
console.log(types); 
// ['fruit', 'vegetable']

let listUser = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Dave' },
  { id: 3, name: 'Charlie' },
  { id: 4, name: 'Bob' }
];
 
listUser.sort((a, b) => {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
});
 
console.log(listUser);
// [{ id: 1, name: 'Alice' }, { id: 4, name: 'Bob' }, { id: 3, name: 'Charlie' }, { id: 2, name: 'Dave' }]

let listTag = [  
  { id: 1, name: 'Alice', tags: ['a', 'b'] },
  { id: 2, name: 'Bob', tags: ['c', 'd'] },
  { id: 3, name: 'Charlie', tags: ['e', 'f'] },
  { id: 4, name: 'Dave', tags: ['g', 'h'] }
];
 
let tags = listTag.flatMap(object => object.tags);
 
console.log(tags); 
// ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

