// function counter(n) {
//   let counter = n;
//   function increament() {
//     counter++;
//     return counter;
//   }
//   return increament;
// }

let myCounter = counter(5);
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());

function counter(n) {
  let counter = n;
  function increament() {
    const currentValue = counter;
    counter++;
    return currentValue;
  }
  return increament;
}

function expect(value) {
  return {
    toBe: (value2) => {
      if (value === value2) return true;
      else throw new Error("Not Equal");
    },
    notToBE: (value2) => {
      if (value !== value2) return true;
      else throw new Error("Equal");
    },
  };
}

try {
  console.log(expect(5).toBe(5));
} catch (error) {
  console.log(error);
}
try {
  console.log(expect(5).notToBE(7));
} catch (error) {
  console.log(error);
}

function createCounter(init) {
  let currentValue = init;

  return {
    increment: function () {
      currentValue++;
      return currentValue;
    },
    decrement: function () {
      currentValue--;
      return currentValue;
    },
    reset: function () {
      currentValue = init;
      return currentValue;
    },
  };
}

// Example usage:
const counter = createCounter(5);
console.log(counter.increment()); // Output: 6
console.log(counter.increment()); // Output: 7
console.log(counter.decrement()); // Output: 6
console.log(counter.reset()); // Output: 5
