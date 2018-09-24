/*let journal = [
  { events: ["work", "touched tree", "pizza", "running", "television"], squirrel: false},
  { events: ["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"],
    squirrel: false},
  { events: ["weekend", "cycling", "break", "peanuts", "beer"], squirrel: true} 
];

len_journal = journal.length;

var randomNum = Math.floor((Math.random() * len_journal) + 1) -1;



/****************************************************************/

// consider the following code
var object1 = {value: 10};

// object2 creates a copy of object1 and keeps its value

var object2 = object1;
obsject1 = {value: 3};

// bindings can be also be changeable or constant

const score = {visitors: 0, home: 0};
// this is ok
score.visitors = 1;
score.home = 3;
const score2 = {visitors: 1, home: 3};

let journal = [];

function addEntry(events, squirrel) {
  journal.push({events, squirrel});
}

addEntry(["work", "touched tree", "pizza", "running", "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);

// EXERCISES
// The sum o a range
var sumOfRange = (a,b) => {
  return Math.trunc(((b*(b+1)) / 2) - ((a*(a+1)) / 2));
}

// Reversing an array
var swap = (arr, i, j) => {
  var temp_1 = arr[i];
  var temp_2 = arr[j];

  arr[i] = temp_2;
  arr[j] = temp_1;
  //return arr;
}

var reverseArrayInPlace = (arr) => {
  var i = 0;
  var j = arr.length-1;

  if(arr.length == 0 || arr.length == 1) {
    return arr;
  }

  while(i<j) {
    swap(arr, i, j);
    i += 1;
    j -= 1;
  }

  return arr;
}

// Write a function deepEqual that takes two values and returns true 
// if they are the same values or are objects with the same properties
// 

var deepEqual = (obj1, obj2) => {

  if(typeof(obj1) === typeof(obj2) && typeof(obj1) !== null) {
    
    if(typeof(obj1) === Object) {
    
      // recursive deepComparison here

    } else {

      return(obj1 === obj2);
    
    }
  } else {
    return false;
  }

}

console.log(deepEqual(null, null))