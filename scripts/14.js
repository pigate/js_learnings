window.onload=function(){
  var bombTimer = setTimeout(function(){
    console.log("BOOM!");
  }, 500);
  
  if (Math.random() < 0.5){
    console.log("Defused.");
    clearTimeout(bombTimer);
  }
  
  function recolorBackground(){
    var color = rgb2hex(); 
    document.body.style.background = color;
    //call again so it will do it again, else executes only once.
    color_token = window.requestAnimationFrame(recolorBackground);
  }
  
  function rgb2hex(){
    r = Math.floor(Math.random()*255);
    g = Math.floor(Math.random()*255); 
    b = Math.floor(Math.random()*255);
  
    return "#" + r.toString(16) + g.toString(16) + b.toString(16);
  }
  
  var color_token = window.requestAnimationFrame(recolorBackground);
  
  var defuseNode = document.createElement("BUTTON");
  defuseNode.appendChild(document.createTextNode("defuse"));
  defuseNode.setAttribute("id", "defuse");
  document.getElementById("content").appendChild(defuseNode);
  
  defuseNode.addEventListener("click", function(){
    cancelAnimationFrame(color_token);
    defuseNode.innerHTML = "defused";
    clearInterval(clock);
  });

  var timeElapsedNode = document.createElement("TEXT");
  document.getElementById("content").appendChild(timeElapsedNode);
  
  var ticks = 0;
  var clock = setInterval(function(){
    ticks += 1;
    timeElapsedNode.innerHTML = ticks;
    console.log(ticks);
  }, 200);
}
