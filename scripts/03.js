//functions
var square = function(x){
  return x*x;
};

console.log(square(12));

//"localness" of vars applies only to f params and var defined inside the f body
//vars declared outside of f are GLOBAL, visible everywhere
//if var x defined outside, and inside f define x, inside f only see the new x

var x = "outside";
var f1 = function(){
  var x = "inside";
};
f1();
console.log(x); //outside
var f2 = function(){
  x = "inside f2"; 
};
f2();
console.log(x);

//lexical scope: scope determined by function's position in program text
//each local scope can also see all local scopes containing it, including top level of program

var something = 1;
{
  var something =2;
} //can have free standing blocks

//functions are first-class. can treat as value, assign a new value, etc

var launchMissiles = function(value){
  console.log("launch now");
};
var safeMode = true;
if (safeMode)
  launchMissiles = function(value) { console.log("friendly skies"); };

//functions are moved to top of scope. functions are not part of 
//regular top-to-bottom flow of control
console.log(saySomething());

function saySomething()
{
  return "hi";
}

//cannot define f inside conditional block

//Optional args
//if pass too little, the remaining get assigned 'undefined'
//if pass too much, ignore the rest
//looping is faster than recursion in this case
function power(base, exponent){
  if (exponent == undefined)
    exponent = 2;
  var result = 1;
  if (exponent == 0)
    return 1;
  else return base * power(base, exponent - 1);
}

console.log(power(4));
console.log(power(4, 3));

//for f to accept any number of args
console.log("hi", 2, 3, 4, 5, 89);

//Closure: ability to reference specific instanace of local variable in an enclosing function
function wrap(n){
  return function(){ return n; };
}
var wrap1 = wrap(1);
var wrap2 = wrap(2);
console.log(wrap1());
console.log(wrap2());

function multiplier(factor){
  return function(n){
    return n * factor;
  };
}

var twice = multiplier(2);
console.log(twice(5));

//can add properties and remove by just definiing or 'delete' prop
var tokyo = { cities: 49, metro : true };
console.log(tokyo.cities);
delete tokyo.cities;
console.log(tokyo.cities);
// -> undefined
tokyo.undefined = undefined
console.log(tokyo.undefined);

console.log("undefined" in tokyo);
//true
console.log("cities" in tokyo);
// false 
console.log("metro" in tokyo);
// true"

//array acn hold many diff types of objects
mixedArray  = [1, {name: "Mimi"}];

//Arguments
//when function called, special variable called 'arguments' added to environment in which f body runs
//'arguments' = object that holds all arguments passed to function
//can pass more or fewer args to f than number of params in function declaration
function f(){}
f(1, 2, 3);
f();

//arguments object has 'length' property. it is similar to an array
function argumentCounter(){
  console.log("You gave", arguments.length, "arguments.");
}
argumentCounter("o", 'p', 1, 2, 3);

var journal = [];
function addEntry(person){
  var entry = { events: [], person: person};
  for(var i = 1; i <arguments.length; i++){
    entry.events.push(arguments[i]);
  }
  journal.push(entry);
}
addEntry("Mimi", 1, 2, 3, 4, "apply", "apple");
// person : "Mimi", all other args go into events
console.log(journal);

//Namespaceing: avoids creating global variables. too many pollute the namesapce
//the more names taken, more likely accidentally overwrite value

function randomPointOnCircle(radius){
  var angle = Math.random() * 2  * Math.PI;
  return { x: radius * Math.cos(angle),
	y: radius * Math.sin(angle)
  }
}
console.log(randomPointOnCircle(2));
console.log(Math.floor(Math.random()*10));

//Global scope: space in which global vars live.can reference like an object
//in browsers, global scope is stored in 'window' variable
var myVar = 10;
console.log("myVar" in window);
console.log(window.myVar);

//exercises

function sum(a){
  var _sum = 0;
  for(var i = 0; i < a.length; i++){
  //for(var i in a){ <- the indx. :(
    _sum += parseInt(a[i], 10);
    console.log("added "  + a[i]);
  }
  return _sum;
}
function range(x, y, step){
  if (step == undefined) 
    step = 1;
  var a = [];
  if (step == 0) return a;
  if (x < y)
  for(var i = x; i <= y; i+= step)
    a.push(i);
  else if (x > y)
  for(var i = x; i >= y; i -= step)
    a.push(i);
  return a;
}
console.log(range(1, 10));
console.log(sum(range(1, 10)));
console.log(range(10, 1, 2));

//reverseArrary
function reverseArray(a){
  var b = [];
  for(var i = a.length - 1; i >= 0; i--){
    b.push(a[i]);
  }
  return b;
}
//reverseArrayInPlace
function reverseArrayInPlace(a){
  //swap elements that are ith away from the ends
  //increment i every round
  //stopping condition: i >= Math.floor(a.length / 2 );
  var i = 0;
  var a_length = a.length;
  if (a_length == 0) return a;
  while(i < Math.floor(a_length/2)){
    var temp = a[i];
    a[i] = a[a_length - i - 1];
    a[a_length - i - 1] = temp; 
    i++;
  }
  return a;
};

console.log(reverseArray([]));
console.log(reverseArrayInPlace([]));
console.log(reverseArray([1]));
console.log(reverseArrayInPlace([1]));
console.log(reverseArray([1, 2]));
console.log(reverseArrayInPlace([1,2]));
console.log(reverseArray([1, 2, 3, 4]));
console.log(reverseArrayInPlace([1, 2, 3, 4]));
console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));
/*
list = {
  value: {},
  next: {
	value: {},
	next:{

	}
  }
}

*/

//listifies the array.
//modifies acc
function arrayToList(a){
  if (a.length == 0) return null;
  var acc = { value: a[0], rest: arrayToList(a.slice(1,a.length)) };
  return acc;  
}
var list2;
var list3;
var list4;
var list5;
console.log(list2 = arrayToList([]));
console.log(list3 = arrayToList([1]));
console.log(list4 = arrayToList([1, 2]));
console.log(list5 = arrayToList([2, 3, 4, 5]));
function ListToArray(l){
 var a = [];
 if (l == null || l == undefined)
   return a;
 var obj = l;
 while(obj != null){
   a.push(obj.value);
   obj = obj.rest;
 }
 return a;
}

var list0 = null;
var list1 = undefined;

console.log(ListToArray(list0));
console.log(ListToArray(list1));
console.log(ListToArray(list2));
console.log(ListToArray(list3));
console.log(ListToArray(list4));
console.log(ListToArray(list5));

//Deep comparison
//for(var propertyName in obj)
//returns true if objects reference same in memory, or are objects with 
//same properties
//note: type of null, is object
function deepEqual(obj1, obj2){
  print("checking deep Equal(" + obj1 + ", " + obj2 + ")");
  if (obj1 === obj2) //identity reference
    return true; 
  if (obj1 == undefined && obj2 == undefined) return true;
  if (obj1 == undefined || obj2 == undefined) return false;
  if (typeof(obj1) == typeof(obj2)){
    if (obj1 instanceof Object){
      console.log("Object found!");
      if (obj1 == null && obj2 == null) return true;
      if (obj1 == null || obj2 == null) return false;
      var same = true;
      var props = Object.getOwnPropertyNames(obj1);
      var keys =  [];
      for(var idx in props){
        keys.push(props[idx]);
      }
      props = Object.getOwnPropertyNames(obj2);
      for(var idx in props){
        keys.push(props[idx]);
      }
      console.log("all keys: " + "length(" + keys.length + ") " + keys);
      for(var prop in keys){
  	console.log("checking property: " , prop);
        if (!(prop in obj2) || !(prop in obj1))
          return false;
        same = same && deepEqual(obj1[prop], obj2[prop]);
        if (!same) return same;
      } 
      return same;
    } else {
      return obj1 == obj2;
    }
  } else return false;
}

function print(data){ console.log(data); }
print("check");
console.log(deepEqual(undefined, undefined));
console.log(deepEqual(undefined, null));
console.log(deepEqual(null, undefined));
console.log(deepEqual([1], [1]));
console.log(deepEqual([], []));

console.log(deepEqual({value: 1, anothervalue: 2}, {value:1, anothervalue: 2}));
print("falses start here: ");
console.log(deepEqual({value: 1}, {value:2}));
console.log(deepEqual({value: 1}, {value:1, anothervalue: 2}));

var obj1 = { value: 1, value2: 2};
var properties1 = Object.getOwnPropertyNames(obj1);
console.log(properties1);
console.log(typeof(properties1));
var l1 = [];
for(var prop in properties1)
 l1.push(properties1[prop]);
console.log(l1);


