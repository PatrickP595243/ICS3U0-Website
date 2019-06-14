var c = document.getElementById("myCanvas1")
var ctx = c.getContext("2d");
ctx.font = "20px Arial";
ctx.fillText("Patrick Pineda",5,25);
ctx.fillText("ICS3U0 Portfolio",5,50);

var c = document.getElementById("myCanvas2");
var ctx = c.getContext("2d");
ctx.font = "20px Arial";
ctx.fillText("Announcements",5,25);
ctx.font = "16px Arial";

counter = 1

function announcements(){
	var x = document.getElementById("announcement").value
	console.log(x)
	counter += 1
	ctx.fillText(x,5,(25 * counter));
}