//Secret life of objects

var rabbit = {};

//'this' keyword references the container object.
var speak = function(line){
  console.log("The", this.type,  "rabbit says", line);
}

rabbit.speak = speak;

var whiterabbit = { type: "white", speak: speak};
var fatrabbit = { type: "fat", speak: speak };

rabbit.speak("I'm alive");
whiterabbit.speak("I'm alive");
fatrabbit.speak("I'm alive");

//apply and bind methods of functions take as first argument this_arg 
//used to simulate method calls like rabbit.speak
//this_arg is used to give value to 'this'
//f.apply <- calls function with array of arguments. can be passed a specific 'this' value
//f.call  <- calls functions with normal arguments instead of array. can be passed a specific 'this' value
speak.call({type: "old-this"}, "Oh my");
speak.apply(fatrabbit, ["Burp!"]);
speak.call({type: "fat-this"}, "Yuckity");
speak.apply({type: "fat-this"}, ["Yuckity"]);

//Prototypes: almost all JS objects have a 'prototype'
//prototype: another object used as fallback source of properties
//like inheritance. if object gets request for prop it doesn't have,
//	search the prototype for the property
//almost all objects share Object.prototype

console.log(Object.getPrototypeOf({}) == Object.prototype);
var empty = {};
console.log(Object.getPrototypeOf(empty));
console.log(empty.toString());
console.log(empty.toString);

function isNan(e){
  return e == Nan;
}

//Other prototypes. Array.prototype, Function.prototype
console.log(Object.getPrototypeOf(isNan) == Function.prototype);
console.log(Object.getPrototypeOf([]) == Array.prototype);

var protoRabbit = {
  speak: function(line){
    console.log("The " + this.type + " rabbit says " + line);
  }
};
var killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREE!");

//Constructor. uses 'new' keyword
// 'this' is bound to fresh object
//an object created with 'new' is an 'instance' of its constructor
//Constructors by default get a 'prototype' property, which derives from Object.prototype

function Rabbit(type){
  this.type = type;
}
Rabbit.prototype.speak = speak;

var blackRabbit = new Rabbit("black"); //is an object type
console.log(typeof(blackRabbit));
blackRabbit.speak("hi");
