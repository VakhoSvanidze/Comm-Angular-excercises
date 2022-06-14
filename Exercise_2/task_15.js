function weekDay(num) {
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  switch (num) {
    case typeof num !== "number":
      return "Error, not a number";
      break;
    case num < 1:
    case num > 7:
      return "Error, number should be in range of 1 to 7";
      break;
    default:
      return `Today is ${weekDays[num - 1]}`;
  }
}

