function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n-1);
  }
}

console.log(factorial(0), 'The factorial of 0 must be 1');
console.log(factorial(1), 'The factorial of 1 must be 1');
console.log(factorial(2), 'The factorial of 2 must be 2');
console.log(factorial(5), 'The factorial of 5 must be 120');