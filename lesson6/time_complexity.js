// analyzing time complexity of a recursive call

function factorial(n) {
  if (n === 1) {
    return 1; // Base case: factorial of 1 is 1
  } else {
    return n * factorial(n - 1); // Recursive case
  }
}

// 1 (count recursive calls - number of operations as a function of the input size(n))
    // n calls
// 2 (determine the work done)
    // n * factorial(n -1)
// 3 (combine recursive calls and work done)
    // number of multiplications is directly proportional to n
    // linear complexity --> O(N)

function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

// 1 
    // two recursive calls at each level --> 2n
// 2
    // return fibonacci(n - 1) + fibonacci(n - 2);
// 3
    // work done at each level is proportional to the number of recursive calls
    // number of recursive calls at each level doubles
    // exponential time complexity --> O(2^n)
