function throwingDarts(arr) {
  validateArrayOfNumbers(arr);

  var total =  arr.reduce(function(prev, curr) {
    if(curr <= 10 && curr >= 5) {
      prev += 5;
    } else if(curr < 5 && curr >= 0) {
      prev += 10;
    }
    return prev;
  }, 0)

  if(total / arr.length === 10) {
    total += 100;
  }
  return total;
}

function validateArrayOfNumbers(arr) {
  if(!Array.isArray(arr)) {
    throw new TypeError('not an array!');
  }
  if( !arr.every(function(element) {
    return typeof element === 'number' //!isNaN(element);
  })) {
    throw new TypeError('not an array of numbers!');
  }
}

module.exports = throwingDarts;

