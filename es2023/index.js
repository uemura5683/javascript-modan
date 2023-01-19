/************************************
* findILast / findLastIndex
************************************/

const array = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }];

array.find(n => n.value % 2 === 1); // { value: 1 }
array.findIndex(n => n.value % 2 === 1); // 0

array.findLastIndex(n => n.value % 2 === 1); // 2
array.findLastIndex(n => n.value === 42); // -1

/************************************
* #!/usr/bin/env node
* // in the Script Goal
************************************/


'use strict';
console.log(1);
