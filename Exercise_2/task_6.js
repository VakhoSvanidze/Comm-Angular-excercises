const array = [1, 2, 3, 4, 5, 6, 1, 2];
let sum = 0;

for (num of array) {
  if (num % 2 === 0) {
    sum += num;
  }
}

sum % 2 === 0 && sum < 20
  ? console.log(sum)
  : console.log("Could not be found");
