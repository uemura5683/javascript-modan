/**
* filter
* https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
**/
function isBigEnough(value) {
  return value >= 10
}
let filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
console.log(filtered);

/**
* find
* https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/find
**/
const inventory = [
  {name: 'apples', quantity: 2},
  {name: 'bananas', quantity: 0},
  {name: 'cherries', quantity: 5}
];

function isCherries(fruit) {
  return fruit.name === 'cherries';
}

console.log(inventory.find(isCherries));
// { name: 'cherries', quantity: 5 }


/**
* findIndex
* https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
**/
let fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];
let index = fruits.findIndex(fruit => fruit === "blueberries");

console.log(index); // 3
console.log(fruits[index]); // blueberries

/**
* some
* https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/some
**/
function checkAvailability(arr, val) {
  return arr.some(arrVal => val === arrVal);
}

checkAvailability(fruits, 'kela');   // false
checkAvailability(fruits, 'banana'); // true

/**
* every
* https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/every
**/
function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough);   // false
[12, 54, 18, 130, 44].every(isBigEnough); // true

/**
* reverse
**/
const reverses = {0: 1, 1: 2, 2: 3, length: 3};
console.log(reverses); // {0: 1, 1: 2, 2: 3, length: 3}
Array.prototype.reverse.call(reverses); //apply() を使用するのと同じ構文
console.log(reverses); // {0: 3, 1: 2, 2: 1, length: 3}

/**
* shift
* https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
**/
var myFish = ['angel', 'clown', 'mandarin', 'surgeon'];

console.log('myFish before:', JSON.stringify(myFish));
// myFish 処理前: ['angel', 'clown', 'mandarin', 'surgeon']

var shifted = myFish.shift();

console.log('myFish 処理後:', myFish);
// myFish 処理後: ['clown', 'mandarin', 'surgeon']

console.log('取り除いた要素:', shifted);
// 取り除いた要素: angel

/**
* unshift
* https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
**/
let unshift = [1, 2]

unshift.unshift(0)               // 呼び出しの返値は 3、新しい配列の長さ
// arr is [0, 1, 2]

unshift.unshift(-2, -1)          // 新しい配列の長さは 5
// arr is [-2, -1, 0, 1, 2]

unshift.unshift([-4, -3])        // 新しい配列の長さは 6
// arr is [[-4, -3], -2, -1, 0, 1, 2]

unshift.unshift([-7, -6], [-5])  // 新しい配列の長さは 8
// arr is [ [-7, -6], [-5], [-4, -3], -2, -1, 0, 1, 2 ]


/**
* pop
* https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
**/
let popped = myFish.pop();

console.log(myFish); // ['angel', 'clown', 'mandarin' ]

console.log(popped); // 'sturgeon'

/**
* push
* https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/push
**/
let vegetables = ['parsnip', 'potato']
let moreVegs = ['celery', 'beetroot']

// 1 つ目の配列に 2 つ目の配列をマージさせます
// vegetables.push('celery', 'beetroot'); と同じ結果になります
Array.prototype.push.apply(vegetables, moreVegs)

console.log(vegetables)  // ['parsnip', 'potato', 'celery', 'beetroot']

/**
* map
* https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map
**/
// 比較のために、上記の配列に parseInt() を用いると次のようになります。
['1.1', '2.2e2', '3e300'].map( str => parseInt(str) ) // [1, 2, 3]

/**
* fill
* https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
**/
[1, 2, 3].fill(4)                // [4, 4, 4]
[1, 2, 3].fill(4, 1)             // [1, 4, 4]
[1, 2, 3].fill(4, 1, 2)          // [1, 4, 3]
[1, 2, 3].fill(4, 1, 1)          // [1, 2, 3]
[1, 2, 3].fill(4, 3, 3)          // [1, 2, 3]
[1, 2, 3].fill(4, -3, -2)        // [4, 2, 3]
[1, 2, 3].fill(4, NaN, NaN)      // [1, 2, 3]
[1, 2, 3].fill(4, 3, 5)          // [1, 2, 3]
Array(3).fill(4)                 // [4, 4, 4]
[].fill.call({ length: 3 }, 4)   // {0: 4, 1: 4, 2: 4, length: 3}

let fillarr = Array(3).fill({}) // [{}, {}, {}]
fillarr[0].hi = "hi"            // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]
