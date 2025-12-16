// 3 Strikes
// Given an integer between 1 and 10,000, return a count of how many numbers from 1 up to that integer whose square contains at least one digit 3.

function squaresWithThree(n) {
  console.log(n);
  // arr
  let counter = 0;
  // const digit = /3/g
  // look at every number from 1 to n
  for (let i = 1; i <= n; i++) {
    // square each number
    let square = i * i;
    let str = square.toString();
    if (str.includes('3')) {
      counter++;
    }
  }
  return counter;
}
