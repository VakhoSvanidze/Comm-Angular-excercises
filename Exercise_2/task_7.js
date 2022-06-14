function cube(num) {
  let message;
  typeof num === "number"
    ? (message = Math.pow(num, 3))
    : (message = "Error, try again");

  return message;
}
