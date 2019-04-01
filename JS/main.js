function welcome_user(){

	var username = prompt("Enter your name:");
	alert("Welcome " + username + "!");

}

function practice1() {

	var x = prompt("Enter a number:"),
	y = prompt("Enter another number:"),
	list = [x, y]
	alert(Math.max(...list))
	console.log(Math.max(...list))

}

function practice2() {

	var x = prompt("Enter a number:"),
	y = prompt("Enter another number:"),
	z = prompt("Enter another number:")
	a = z * y * x
	if (a > 0) {
		alert("The product is positive.") }
	if (a < 0) {
		alert("The product is negative.") }
	if (a == 0) {
		alert("The product is zero.") }

}

function practice3() {

	var x = prompt("Enter a number:"),
	y = prompt("Enter another number:"),
	z = prompt("Enter another number:"),
	list = [x, y, z]
	alert(list.sort(function(a, b){return b-a}))

}

function practice4(){
	console.log("Patrick");
}

function Announcement() {
  var userInput = document.getElementById("announcement").value;
}

function loop1(){
	
	for(x = 1; x < 101; x++) {
		if (x % 3 == 0 && x % 5 !== 0) {
			console.log("Three!")
		}
		if (x % 5 == 0 && x % 3 !== 0) {
			console.log("Five!")
		}
		if (x % 3 == 0 && x % 5 ==0) {
			console.log("Threefive!")
		}
		else {
			console.log(x)
		}
	}
}

function loop2(){

	var pattern = [["*"],["*","*"],["*","*","*"],["*","*","*","*"],["*","*","*","*","*"]]
	var text = ""
	for (i = 0; i < pattern.length; i++) {
		text += pattern[i].join(" ") + "<br>"
	}
	document.getElementById("pattern").innerHTML = text
	console.log(text)

}

function loop3(){

	var pattern = []
	var attributes = []
	var text = ""
	var i = prompt("How many rows?")
	i++
	var x = prompt("Enter a character:")
	for (y = 0; y < i; y++) {
		for (z = 0; z < y; z++) {
			attributes.push(x)
		}
		pattern.push(attributes)
		attributes = []
		text += pattern[y].join(" ") + "<br>"
	}
	text = text.replace("<br>", "")
	document.getElementById("pattern2").innerHTML = text
	pattern.splice(0, 1)
	console.log(pattern)

}

function loop4(){

	var pattern = []
	var attributes = []
	var text = ""
	var i = prompt("How many rows?")
	i++
	var x = prompt("Enter a character:")
	for (y = 0; y < i; y++) {
		for (z = -1; z < y; z++) {
			attributes.push(x)
		}
		pattern.push(attributes)
		attributes = []
		text += pattern[y].join(" ") + "<br>"
	}
	document.getElementById("pattern2").innerHTML = text
	console.log(pattern)

}