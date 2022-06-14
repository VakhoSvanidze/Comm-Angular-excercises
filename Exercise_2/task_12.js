function arrLenght(arr) {
  for (item of arr) {
    if (typeof item !== "string") {
      return "Error, all values should be a string";
    }
  }
  return (lengthArray = arr.map((item) => item.length));
}
