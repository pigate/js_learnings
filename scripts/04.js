/*
Higher order functions: operate on other functions.
Can take them as arguments, return them
*/

function greaterThan(n){
  return function(m) { return m > n; };
}

var greaterThan10 = greaterThan(10);
console.log(greaterThan10(4));
console.log(greaterThan10(11));

function noisy(f){
  return function(arg){
    console.log("calling with", arg);
    var val = f(arg);
    console.log("called with", arg, "- got", val);
    return val;
  };
}

noisy(Boolean)(0);
noisy(Boolean)(1);

//new type of control flow

function unless(test, then){
  if (!test) then();
}

function repeat(times, body){
  for(var i =0; i < times; i++) body(i);
}

repeat(3, function(n){
  unless(n % 2, function(){
    console.log(n, "is even");
  });
});

//when f calls another f, want to pass args.
//but how to know how many args?
//what if want to pass "EVERYTHING"?
// -> call inner f with .apply
function transparentWrapping(f){
  var this_arg = null;
  return function(){
    return f.apply(this_arg, arguments);
  };
}

function filter(array, f){
  var filtered = [];
  for(var i = 0; i < array.length; i++){
    if (f(array[i])) filtered.push(array[i]);
  }
  return filtered;
}

function map(array, f){
  var mapped = [];
  for(var i = 0; i < array.length; i++){
    mapped.push(f(array[i]));
  }
  return mapped;
}

//given array, reduces the elements of array using f.
//uses 'start' as start state
//f is a functin that takes two components, and combines them in some way.
function reduce(array, combine, start){
  var reduced = start;
  for(var i = 0; i < array.length; i++){
    reduced = combine(reduced, array[i]);
  }
  return reduced;
}

var a = [1, 2, 3, 4];
console.log(filter(a, function(elem) { return elem > 2; }));
console.log(map(a, function(elem) { return elem * Math.PI; }));
console.log(reduce(a, function(x, y) { return x - y; }, 0));

//bind: can use to call a function and bind some args. returns the function with args bound
//f <- a function
//var bound_f = f.bind(this_arg, [to_bind,]);

var eventStore = ["Event0", "Event1", "Event2"];
var eventStore2 = ["Birthday", "Wedding", "Event1"];

function isInStore(store, event_gen){
  return store.indexOf(event_gen) > -1;
} 

console.log("Event0 in store1?");
console.log(isInStore(eventStore, "Event0"));
console.log("Event3 in store1?");
console.log(isInStore(eventStore, "Event3"));
console.log("store2's in store1");
console.log(eventStore2.filter(function(event_gen){
  return isInStore(eventStore, event_gen);
}));
console.log("store2's that are in store1");
console.log(eventStore2.filter(isInStore.bind(null, eventStore)));

//flatten an array of possibly more arrays
//a = [[1,2,3], [4,5], [6]];
//behavior: flatten(1) -> [1]
//flatten([1]) -> [1]
function flatten(a){
  if (a == null || a == undefined){
    return null;
  }
  flattened = [];
  if (a.constructor == Array){
    for(var i = 0; i < a.length; i++){
      flattened = flattened.concat(flatten(a[i]));
    } 
  } else {
    //deal with single item
    flattened = flattened.concat([a]);
  }
  return flattened;
}

var b = [];
console.log("b", b);
b = b.concat([1]);
console.log("b", b);
b =b.concat([2, 3]);
console.log("b", b);

/*
var arrays = [[], null, undefined, [null, null], [], 1, 2, [1, 2, 3]];
for(var i = 0; i < arrays.length; i++){
  console.log("FLATTEN " + i + " : ", flatten(arrays[i]));
}
*/
console.log("Flatten the nested : ", flatten([1, 2, 3]));

//every(array, predicate(elem)); returns true if all elements in array are predicate true
function every(array, f){
  for(var i = 0; i < array.length; i++){
    if (!f(array[i]) ) return false;
  } 
  return true;
}


//some(array, predicate(elem)); returns true if some elements in array are predicate true

function some(array, f){
  for(var i = 0; i < array.length; i++){
    if (f(array[i])) return true;
  }
  return false;
}

function isNan(elem){
  return elem == Nan;
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false
