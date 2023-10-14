// example: recursive function acts as a wrapper for a helper that implements the recursion
            // allows us to pass data through the recursive calls without changing the function signature

function fibonacci(num) {
  return fibonacciHelper(num, {});
}

function fibonacciHelper(num, cache) {
  // Define the base case and recursive case
}
