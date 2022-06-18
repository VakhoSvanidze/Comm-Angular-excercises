//TASK 1
const customer = {
  name: "john",
  age: 19,
};

let customerPromise = new Promise((resolve, reject) => {
  if (customer.age >= 18) {
    resolve(true);
  }
  reject(new Error("Customer is underage"));
});

customerPromise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));



// TASK 2
async function promReturn() {
  let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("resolved after 3 seconds"), 3000);
  });

  let result = await promise;
  console.log(result);
}

promReturn();

// TASK 3

async function stringsArray(array) {
  let promise = new Promise((resolve, reject) => {
    if (!Array.isArray(array)) {
      for (str of array) {
        if (typeof str !== "string") {
          reject(new Error("Something is not right"));
        }
      }
    } else {
      const newArray = [];
      for (str of array) {
        newArray.push(str);
        newArray.push(str.length);
      }
      resolve(newArray);
    }
  });
  let result = await promise;
  return result;
}

const array = ["123", "asdda"];
stringsArray(array)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
