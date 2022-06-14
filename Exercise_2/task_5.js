const array = [4, 10, 23, 1, 2, 90];
const newArray = [];

for (let i = 0; i < array.length; i++) {
  let storage = 0;
  for (let j = 0; j < array.length; j++) {
    if (storage < array[j]) {
      storage = array[j];
    }
  }
  newArray.unshift(storage);
}

console.log(newArray);

// I could not complete this
