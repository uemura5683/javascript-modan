/************************************
* findILast / findLastIndex
************************************/

const array1 = [5, 12, 8, 130, 4];

console.log(array1.find(element => element > 10));     // 12
console.log(array1.findLast(element => element > 10)); // 130

console.log(array1.findIndex(element => element > 10));     // 1
console.log(array1.findLastIndex(element => element > 10)); // 3

/************************************
* #!/usr/bin/env node
* // in the Script Goal
************************************/


'use strict';
console.log(1);
