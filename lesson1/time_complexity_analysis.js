// Removing Constants from Time Complexity
  // N represents the size of the collection

function exampleFunction(arr) {
  for (let i = 0; i < arr.length; i++) {
    // O(N) operations
  }

  for (let j = 0; j < arr.length; j++) {
    // O(N) operations
  }
}

  // time complexity of the entire code can be expressed as:
    // O(N) + O(N) --> O(2N)
    // number 2 is a "constant factor" in this case
    // constant factors do not significantly affect the rate of growth as the input size increases, so we can remove them from our analysis
    // the most dominant factor driving the growth rate is still the size of the collection

// Simplifying Complex Expressions

function exampleFunction(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      // O(N^2) operations
    }
  }

  for (let k = 0; k < arr.length; k++) {
    // O(N) operations
  }
}

// O(N^2) dominates the overall time complexity
// as the input size increases, the number of iterations in the nested loop grows quadratically with the square of N
// We can remove the non-dominant terms from our analysis

// "N" is an arbitrary name
// Distinct Variable Names for Different Collections

function processCollections(users, tasks) {
  for (let i = 0; i < users.length; i++) {
    // O(U) operations
  }
  for (let j = 0; j < tasks.length; j++) {
    // O(T) operations
  }
}

// O(U) + O(T)
// this notation conveys that time complexity is dependent on the number of users and tasks, respectively
