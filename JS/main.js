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
	var x = prompt("Enter a character:")
	for (y = 0; y < i; y++) {
		for (z = -1; z < y; z++) {
			attributes.push(x)
		}
		pattern.push(attributes)
		attributes = []
		if (y == (i-1)) {
		text += pattern[y].join(" ")		
		}
		else {
		text += pattern[y].join(" ") + "<br>"
		}
	}
	document.getElementById("pattern2").innerHTML = text
	console.log(pattern)

}

function loop5(){

	var pattern = []
	var attributes = []
	var text = ""
	var i = prompt("How many rows?")
	var x = prompt("Enter a character:")
	for (y = 0; y < i; y++) {
		for (z = -1; z < y; z++) {
			attributes.push(x)
		}
		pattern.push(attributes)
		attributes = []
		if (y == (i-1)) {
		text += pattern[y].join(" ")		
		}
		else {
		text += pattern[y].join(" ") + "<br>"
		}
	}
	document.getElementById("pattern3").innerHTML = text
	console.log(pattern)

}

function loop6(){

	var pattern = []
	var attributes = []
	var text = ""
	var i = prompt("How many rows?")
	var check = 0
	var x = prompt("Enter a character:")
	for (y = 0; y < i; y++) {
		for (z = -1; z < y; z++) {
			if (check == 0) {
				for (a = i - y; a > 1; a--) {
					attributes.push("\xa0")
				}
			}
			check = 1
			attributes.push(x)
		}
		check = 0
		pattern.push(attributes)
		attributes = []
		if (y == (i-1)) {
			text += pattern[y].join(" ")		
		}
		else {
			text += pattern[y].join(" ") + "<br>"
		}
	}
	document.getElementById("pattern4").innerHTML = text
	console.log(pattern)

}

function guessNumber(){

	var max = prompt("Pick a number:")
	var ans = Math.floor(Math.random() * max)
	console.log(ans)
	var guess = prompt("Guess the number:")
	var number = 1
	while (guess !== ans) {
		if (guess > ans) {
			var guess = prompt("The number is lower:")
			number += 1
		}
		if (guess < ans) {
			var guess = prompt("The number is higher:")
			number += 1
		}
		if (guess == ans) {
			alert("YAY")
			console.log(number)
			break
		}
	}

}

function test(){
	for (i=2; i < 101; i += 2){
    	console.log(i)
    }
}

function test2(){
	var ans
    while (ans !== "yes"){
    	var ans = prompt("Is it the weekend yet?");
    }
}

