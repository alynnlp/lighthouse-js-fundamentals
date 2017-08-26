function range(start, end, step) {
  var someArray = [];

  for (start; start <= end; start += step) {
    someArray.push(start);
  }
  return someArray;
}
console.log(range(0, 10, 2));


/** compass accepted the following**/

function range(start, end, step){
  var series = [];

  if( start === null || end === null || step === null || end < start || step < 0 ){
    series = [];
  }

  else {
    for(var i = start; i <= end; i += step){
      series.push(i);
          }
        }
  return series;
}
console.log(range(0, 10, 2));