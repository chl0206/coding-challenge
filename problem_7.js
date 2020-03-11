// Problem 7

let billBreakdown = (cost) => {
  hundreds = Math.floor(cost / 100);
  twenties = Math.floor((cost % 100) / 20);
  tens = Math.floor((cost % 20) / 10);
  fives = Math.floor((cost % 10) / 5);
  ones = Math.floor((cost % 5) / 1)
  return breakdown = {
    '100': hundreds,
    '20': twenties,
    '10': tens,
    '5': fives,
    '1': ones
    // not sure why this returns the object list backwards in the console??
  }
}

billBreakdown(1745);

// I'm not sure about how to go about the second part of this problem, so that the function only uses the items from the array in the parameters to do the bill breakdown.
