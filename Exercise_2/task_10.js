function getDividors(number) {
  if (typeof number !== "number") {
    return "Error, try again.";
  } else if (number === 0) {
    return "Can't be null";
  } else {
    const arr = [];
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        arr.push(i);
      }
    }
    return arr;
  }
}
