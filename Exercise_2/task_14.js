function toUpperCaseFunc(str) {
  if (typeof str !== "string") {
    return "Error, my friend, Errors are everywhere";
  } else {
    const firstletter = str[0];
    let followingLetters = "";
    for (let i = 1; i < str.length; i++) {
      followingLetters += str[i];
    }
    return firstletter.toUpperCase() + followingLetters;
  }
}

console.log(toUpperCaseFunc(1));
