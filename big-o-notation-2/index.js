function sumToN(n) {
    if (n <= 0) return 0;
    
    return n + sumToN(n - 1);
  }
  
  const result = sumToN(5); // 5 + 4 + 3 + 2 + 1
  console.log(result);