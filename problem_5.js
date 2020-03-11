// Problem 5, based the first part of the code on the Mini Linter (iterators) project from Codecademy we did in class
//I know this isn't the most elegant solution, but I'm happy it works!

const array2 = ['a', 'b', 'c', 'd', 'c', 'b', 'b', 'c', 'a', 'e', 'b', 'e'];

let aCount = 0;
let bCount = 0;
let cCount = 0;
let dCount = 0;
let eCount = 0;

for (letter of array2) {
  switch(letter) {
    case 'a':
      aCount++;
      break;
    case 'b':
      bCount++;
      break;
    case 'c':
      cCount++;
      break;
    case 'd':
      dCount++;
      break;
    case 'e':
      eCount++;
      break;
  }
};

let letterCount = [aCount, bCount, cCount, dCount, eCount]

//console.log(letterCount);

let minMaxStmt = (arr) => {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  if(max === aCount) {
    console.log('The most frequent item is: a.')
  } else if (max === bCount) {
    console.log('The most frequent item is: b.')
  } else if (max === cCount) {
    console.log('The most frequent item is: c.')
  } else if (max === dCount) {
    console.log('The most frequent item is: d.')
  } else if (max === eCount) {
    console.log('The most frequent item is: e.')
  };
  if(min === aCount) {
    console.log('The least frequent item is: a.')
  } else if (min === bCount) {
    console.log('The least frequent item is: b.')
  } else if (min === cCount) {
    console.log('The least frequent item is: c.')
  } else if (min === dCount) {
    console.log('The least frequent item is: d.')
  } else if (min === eCount) {
    console.log('The least frequent item is: e.')
  };
}

minMaxStmt(letterCount);
