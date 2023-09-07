// #1
function all(arr, callback) {
  // `.every` method loops over the items of an array and returns `true` if all the invocations returned `true`.

  // `.every` method will return `true` if the array is empty, depending on our need
  // we might want to change this behavior. Here I've changed it so if array is empty
  // it returns `false`.
  return arr.length > 0 ? arr.every((item) => callback(item)) : false;
}

var allAreLessThanSeven = all([1, 2, 9], function (num) {
  return num < 7;
});
console.log("#1", allAreLessThanSeven); // false

console.log(
  "#1",
  all([1, 3, 6], function (num) {
    return num >= 1;
  })
);

// #2
var nestedObject = {
  data: {
    info: {
      stuff: {
        a: 0,
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};

function contains(obj, value) {
  // get obj's values in an array and use `.some` method to loop over them
  // trying to find the `value`
  return Object.values(obj).some((item) => {
    // if the `item` is an object, call the `contains` function with it
    if (typeof item === "object") return contains(item, value);
    // try matching the value with item
    return item === value;
  });
}

console.log("#2", contains(nestedObject, 44));
console.log("#2", contains(nestedObject, 45));
console.log("#2", contains(nestedObject, "foo2"));
console.log("#2", contains(nestedObject, "bar2"));
console.log("#2", contains(nestedObject, 0));
