let data1 = 1;
function getAData(callback) {
  //  Aのデータを取りに行く 
  let dataA = get();
  callback(dataA);
}

function getBData(dataA, callback) {
  // Bのデータを取りに行く  
  let dataA = dataA + 1;
  callback(dataA);
}

function getCData(dataB, callback) {
  // Bのデータを取りに行く  
  let dataB = dataB + 1;
  callback(dataB);
}

getAData((data1) => {
  getBData((data2) => {
        getCData(data2);
  })
})
console.log(getAData());