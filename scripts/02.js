/*
//Program Structure
var caught = 5*5;
var mood = "light";
console.log(mood);
var one = 1, two = 2;
console.log(one + two);

//Environment: collection of variables and values that exist at a given time
//when program starts up, environment is not empty.
//	already contains variables part of language standard

alert("good morning");
confirm("shall we?");
prompt("tell me everything", "...");

var number = 0;
while(number <= 12){
  console.log(number);
  number = number + 2;
}

do {
  var yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);

var tri_height = 7;
for(var i = 1; i <= tri_height; i++){
  var line = "";
  for(var j = 0; j < i; j++){
    line += "#";
  }
  console.log(line);
}
*/

function fizzbuzz(size){
  for(var i = 1; i <= size; i++){
    if (i % 15 === 0)
      console.log("fizzbuzz");
    else if (i % 3 === 0)
      console.log("fizz");
    else if (i % 5 === 0)
      console.log("buzz");
    else console.log(i);
  } 
}

function chessboard(size){
  //even lines start with space 
  //odd lines start with #
  for(var i = 0; i < size; i++){
    var line = "";
    for(var j = 0; j < size; j++){
      if ( (i+j)% 2 == 0){
        line += " ";
      } else line += "#";
    }
    console.log(line);
  }
}

chessboard(8);
