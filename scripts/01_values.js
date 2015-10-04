console.log(typeof 4.5);
console.log(typeof "x");
console.log(NaN == NaN);
console.log(null == undefined);
// true
console.log(null == 0);
// false
//0, NaN, and "" count as false
//all other values count as true
//if want to avoid automatic type conversions, use ===, !==
// "" === false    -> false

//RECOMMENDATION: use the 3-char comparison operators to prevent unexpected type conversions

var object1 =  { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

//comparing 2 different objects will return false from == comparison
//no "deep" comparison built into JS.
//can write one yourself
console.log(object1 == object2);
console.log(object1 === object2);
console.log(object1 == object3);
//false
object1.value = 15;
console.log(object2.value);
console.log(object1.value == object3.value);
//false

//OBJECTS as maps
var tokyo = { metro: true, cities: 49 };
for(var key in tokyo){
  console.log(key + ": " + tokyo[key]);
}
if ("randomKEy" not in tokyo)
  console.log("randomKEy not in tokyo");

//array
console.log([1,2, 3, 4, 1].indexOf(2));
a = [1, 2, 3, 4, 1];
a.slice(2, 4); //end exclusive
a.slice(2); //start from 2

function remove(array, index){
  return array.slice(0, index)
	.concat(array.slice(index + 1);
}

//cannot add new props to build in types like string bc those are immutable, 
//cannot be changed
//won't stick
var str = "i";
str.myProp = "value";
console.log(str.myProp);
// undefined
