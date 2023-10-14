// 1
function test(n) {
  for (let i = 0; i < n; i++) {
    console.log("Hello!");             // O(N)
  }
}

// time complexity: O(N)
// space complexity: O(1)

// 2
function test(n) {
  for (let i = n; i >= 1; i /= 2) {
    console.log("Hello!");             // O(logN)
  }
}

// time complexity: O(logN)
// space complexity: O(1)

// 3
function test(n) {
  let matrix = [];
  for (let i = 0; i < n; i++) {         
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
      matrix[i][j] = i + j;             
    }
  }
  return matrix;
}

// time complexity: O(N^2)
// space complexity: O(N^2)

// 4
function test(n) {
  for (let i = 0; i < n; i++) {   
    for (let j = 1; j < n; j *= 2) {
      console.log("Hello!");
    }
  }
}

// time complexity: O(NlogN)
// space complexity: O(1)


// 5
function test(n, m) {
  for (let i = 0; i < n; i++) {
    console.log("Hello!");
  }
  for (let j = 0; j < m; j++) {
    console.log("World!");
  }
}

// time complexity: O(N) + O(M)
// space complexity: O(1)

// 6
function test(n) {
  for (let i = 0; i < 2 * n; i++) {
    console.log("Hello!");
  }
}

// time complexity: O(N)
// space complexity: O(1)
