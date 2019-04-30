// var shown = true; // this is a global variable

// function hideit()
// {
//   shown = !shown; // set true to false; set false to true
//   if(shown) document.getElementById("foo").style.visibility = "visible";
//   else document.getElementById("foo").style.visibility = "hidden";
//   //console.log(shown);
// }

var hat = document.getElementById("hat")

function niceHat(event) {
var x = parseInt(event.clientX);
var y = parseInt(event.clientY);
hat.style.display = "block";
hat.style.position = 'absolute';
hat.style.left = x + 'px';
hat.style.top = y - 'px';

// img.style.top = y + 'px';
}