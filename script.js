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

function expect(val) {
  return {
    toBe: (val2) => {
      if (val === val2) return true;
      else {
        throw new Error("Not Equal");
      }
    },
    notToBe: (val2) => {
      if (val !== val2) return true;
      else {
        throw new Error("Equal");
      }
    },
  };
}

console.log(expect(5).notToBe(5));
