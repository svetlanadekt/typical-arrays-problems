
exports.min = function min (array) {
  if(array == undefined || array.length == 0) {
    return 0;
  }
  if (array.length > 1) {
     return Math.min.apply(null, array);
  }
};


exports.max = function max (array) {
  if(array == undefined || array.length == 0) {
    return 0;
  }
  if (array.length > 1) {
     return Math.max.apply(null, array);
  }
};


exports.avg = function avg (array) {
  let avgValue = 0;
  if(array == undefined || array.length == 0) {
    return 0;
  }
  if (array.length > 1) {
    let sum = array.reduce(function(a,b) {
      return a + b;
    });
     avgValue = sum / array.length;
  }
  
  return avgValue;
};

