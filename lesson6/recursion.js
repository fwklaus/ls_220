function populationCount(number) {
  console.log(number);
  if (number === 0) {    // base case
    return;
  } 
  populationCount(number - 1); 
  // `populationCount(number - 1)` --> the recursive case 
  // `number - 1` --> the reduction step
}

populationCount(5);
