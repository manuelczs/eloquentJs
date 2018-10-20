// the following function filters out the elements in an array
// that don't pass a test

function filter(array, test) {
  let passed = [];
  for(let element of array) {
    if(test(element)) {
      passed.push(element);
    }
  }
  return passed;
}

/* Transforming with map
 the map method transforms an array by applying a function
 to all of its elements and building a new array from the
 return values. The new array will have been mapped to a new
 form by the function.
*/

function map(array, transform) {
  let newArray = [];
  for(let element of array) {
    newArray.push(transform(element));
  }
  return newArray;
}

// ES6 syntax
var transfo = x => {return x*x};

export default {filter, map}