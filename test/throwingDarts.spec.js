const chai = require('chai');
const expect = chai.expect;
const throwingDarts = require('../throwingDarts')

describe('Throwing Darts', function() {

  it('should be a function', function() {
    expect(throwingDarts).to.be.a('function');
  })

  it('should accept an array and return the total score', function() {
    var firstGame = [1, 5, 11];
    var secondGame = [15, 20, 30];
    var thirdGame = [1, 2, 3, 4];

    expect(throwingDarts(firstGame)).to.equal(15);
    expect(throwingDarts(secondGame)).to.equal(0);
    expect(throwingDarts(thirdGame)).to.equal(140);
  })
})