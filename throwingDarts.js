const SMALL_POINTS = 0;
const MEDIUM_POINTS = 5;
const LARGE_POINTS = 10;

function throwingDarts(arr) {

  validateArrayOfNumbers(arr);

  var total =  arr.reduce(function(prev, curr) {
    if(curr > 10) {
      prev += SMALL_POINTS;
    }else if(curr >= 5) {
      prev += MEDIUM_POINTS;
    } else if(curr >= 0) {
      prev += LARGE_POINTS;
    }
    return prev;
  }, 0)

  if(total / arr.length === LARGE_POINTS) {
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

