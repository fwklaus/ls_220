// Given a string, determine whether it is a valid palindrome or not.

// A palindrome string is a string that reads the same backwards as forwards.

// Input: "madam"
// Output: true

// Input: "abcbea"
// Output: false

// recursive definition template: A [data structure] is a [problem definition] if [some condition is true], and the rest of the [data structure] is [problem definition].

// "A string is a valid palindrome if the first and last characters are the same, and the rest of the string is a valid palindrome"

// using slice
// has O(n^2) time and spacecomplexity due to slice operation
function isValidPalindrome(str) {
  if (str.length < 1) {
    return true;
  }
  return (
    str[0] === str[str.length - 1] &&
    isValidPalindrome(str.slice(1, str.length - 1))
  );
}

// using pointers
// has O(N) time and space complexity
function isValidPalindrome(str) {
  return isValidPalindromeHelper(str, 0, str.length - 1);
}

function isValidPalindromeHelper(str, start, end) {
  if (end <= start) {
    return true;
  }
  return (
    str[start] === str[end] && isValidPalindromeHelper(str, start + 1, end - 1)
  );
}