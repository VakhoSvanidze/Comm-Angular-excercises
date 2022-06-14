const job = {
  salary: function () {
    const date = new Date().getDate();
    if (date < 25) {
      return "Salary holds well, I hope";
    } else {
      return "You are in trouble, probably";
    }
  },
};

console.log(job.salary());
