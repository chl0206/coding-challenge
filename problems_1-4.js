// Problem 1
const durhamIs = () => {
  console.log('Durham is awesome!');
}

durhamIs();

// Problems 2 & 3

const bands = ['Kiss', 'Aerosmith', 'ACDC', 'Led Zeppelin', 'Nickelback'];

for(let i=0; i < bands.length; i++) {
  if(bands[i] !== 'Nickelback') {
  console.log('I love ' + bands[i] + '!')
  } else if (bands[i] === 'Nickelback') {
    console.log('I DON\'T love Nickelback!')
  }
}

// Problem 4

const array = [34, 203, 16, 46, 34, 432, 342, 124, 33, 188, 12];

const average = arr => arr.reduce((a,b) => a + b,) / arr.length

average(array);
