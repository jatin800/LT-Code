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

const counter1 = createCounter(5);
console.log(counter1.increment()); // Output: 6
console.log(counter1.increment()); // Output: 7
console.log(counter1.decrement()); // Output: 6
console.log(counter1.reset()); // Output: 5

function transformArr(arr, fn) {
  let returnArray = [];
  for (let i = 0; i < arr.length; i++) {
    returnArray.push(fn(arr[i], i));
  }
  return returnArray;
}

const arr = [1, 2, 3, 4, 5];
const fn = (element, index) => element * index;
console.log(transformArr(arr, fn));

function filterArr(arr, fn) {
  let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}

let array = [1, 2, 3, 4];
let fn1 = (element) => element !== 3;

console.log(transformArr(array, fn1));

function reduceArr(num, fn, init) {
  let res = init;
  for (let i = 0; i < num.length; i++) {
    res = fn(res, num[i]);
  }
  return res;
}

let nums = [1, 2, 3];
let fn2 = (accum, curr) => accum + curr;
let init = 0;

console.log(reduceArr(nums, fn2, init));

function compose(functions) {
  return (x) => {
    return functions.reduceRight((acc, currVal) => currVal(acc), x);
  };
}

function f(v) {
  return v + 1;
}
function g(v) {
  return v * v;
}
function h(v) {
  return 2 * v;
}

let functions = [f, g, h];

let composition = compose(functions);

console.log(composition(4));
