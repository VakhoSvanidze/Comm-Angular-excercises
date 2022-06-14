function isOdd() {
  if (arguments.length > 1 || typeof arguments[0] !== "number") {
    return "Error, try again";
  } else {
    return arguments[0] % 2 !== 0;
  }
}
