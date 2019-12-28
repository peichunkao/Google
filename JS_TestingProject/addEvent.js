
var isPink = false;
document.querySelector("button").addEventListener("click", function(){
  if (document.body.style.background == "white") {
    document.body.style.background = "pink";
    isPink = false;
  } else {
    document.body.style.background = "white";
    isPink = true;
  }
});

/*
document.querySelector("button").addEventListener("click", function(){
  document.body.classList.toggle("pink");
});*/

