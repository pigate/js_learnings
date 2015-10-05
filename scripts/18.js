//demonstrates event listeners on forms
//form.value
//highlighting text in form.value

window.onload = function(){

var textarea = document.createElement("TEXTAREA");
textarea.innerHTML = "hello there I am sam. We can use a slightly different pattern if we want to space responses so that they’re separated by at least a certain length of time but want to fire them during a series of events, not just afterward. For example, we might want to respond to mousemove events by showing the current coordinates of the mouse, but only every 250 milliseconds.";


document.getElementById("content").appendChild(textarea);

function replaceSelection(field, word){
  console.log("replaceSelection: ", field.value);
  if (field.value == undefined) return;
  var from = field.selectionStart, to = field.selectionEnd;
  field.value = field.value.slice(0, from) + word + field.value.slice(to);
  //reset the highlight
  field.selectionEnd = field.selectionStart + word.length;
}

console.log("hi");

//textarea = document.querySelector("textarea");

textarea.addEventListener("keydown", function(event){
  replaceSelection(textarea, "Chewbacca");
    event.preventDefault();
  /*  
  if (event.keyCode == 113){
    replaceSelection(textarea, "Chewbacca");
    event.preventDefault();
  }
  */
});

console.log("hi2");

}
