const should = require('chai').should();

const fizzBuzz = require('../fizzBuzzer');


// unit tests for our `adder` function
describe('fizzBuzz', function() {

  // test the normal case
  it('should test the divisibility of a number by 3 or 5 and return fizz or buzz', function() {
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [
      {num: 2, expected: 2},
      {num: 9, expected: 'fizz'},
      {num: 25, expected: 'buzz'},
	  {num: 60, expected: 'fizz-buzz'}
    ];
    // for each input 'num, 'fizzBuzz' should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzBuzz(input.num);
      answer.should.equal(input.expected);
    });
  });

  it('should raise error if args not numbers', function() {
    // range of bad inputs where not both are numbers
    const badInputs = [
      ['a'],
      ['hello'],
      [false]
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      (function() {
          adder(input[0], input[1])
      }).should.throw(Error);
    });
  });
});