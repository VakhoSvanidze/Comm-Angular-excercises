function sum() {
  let sum = 0;
  for (num of arguments) {
    if (typeof num !== "number") {
      return "Error, try again";
    }
    sum += num;
  }
  return sum;
}

