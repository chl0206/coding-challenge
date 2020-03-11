let array1 = ['a', 'b', 'c', 'a', 'a', 'b', 'd'];
let array2 = ['a', 'b', 'b', 'a', 'e', 'c', 'c', 'g'];
let array3 = [];

for(let i=0; i < array1.length; i++) {
  for(let j=0; j < array2.length; j++) {
    if (array1[i] === array2[j]) {
      //array3 = Array.from(array1[i])
      // need array3 to be one array, instead of array of arrays
      console.log(array1[i]);
    };
  };
}
