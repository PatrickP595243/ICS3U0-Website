var c = document.getElementById("myCanvas7")
var ctx = c.getContext("2d");
ctx.font = "20px Arial";
ctx.fillText("Patrick Pineda",5,25);
ctx.fillText("ICS3U0 Portfolio",5,50);

var c = document.getElementById("myCanvas8");
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
	console.log(text)

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

function test6(){
	var faveThings = ["1", "2", "3", "4", "5", "6"]
	var x = faveThings.length
	for (i = 0; i < x; i++){
		console.log(faveThings[i])
	}
}

function quiz(){
	array = [67, 65, 67, 65]
	sum = 0
	for (i = 0; i < array.length; i++){
		console.log("The mark is " + array[i])
		sum += array[i]
	}
	avg = sum / array.length
	console.log("The average is " + avg)
}

function quiz2(){
	temps = [86, 77, 68, 86, 95]
	console.log("Temperature:")
	for (i = 0; i < temps.length; i++){
		temp = temps[i] - 32
		temp = temp * 5 / 9
		console.log(i + 1 + ". " + temp + " degrees Celcius")
	}
}

function string(){
	x = prompt("Enter any word:")
	alert(x.length)
}

function string2(){
	x = prompt("Enter any word:")
	var y = ""
	for (i = 0; i < x.length; i++){
		z = x.charAt(i)
		if (i % 2 == 0){
			a = z.toUpperCase()
			y += a
		}
		else {
			a = z.toLowerCase()
			y += a
		}	
	}
	alert(y)
}

function string3(userName, password){
	userName = userName.toUpperCase()
	password = password.toUpperCase()
	x = "PATRICK"
	y = "PASSWORD"
	if (userName == x && password == y) {
		console.log("True")
	}
	else {
		console.log("False")
	}
}

string3("Patrick", "Passwor")

function pigLati(){
	str = "Hello"
	var arr = str.split("")
	console.log(arr)
	arr[0] = arr[0].toLowerCase()
	arr.push(arr[0])
	arr.shift()
	arr.push("a", "y")
	arr[0] = arr[0].toUpperCase()
	console.log(arr)
}

function pigLatin1(){
	str = prompt("Enter a string:")
	newStr = ""
	var arr = str.split(" ")
	console.log(arr)
	for (i=0; i<arr.length; i++){
		word = arr[i].split("")
		if (word.length > 2){
			word[0] = word[0].toLowerCase()
			word.push(word[0])
			word.shift()
			word.push("a","y")
			if (i == 0){
				word[0] = word[0].toUpperCase()
			}
			console.log(word)
		}
		newStr += word.join("") + " "
	}
	alert(newStr)
}

function encryption(){
	str = prompt("Enter a string:")
	newStr = ""
	var arr = str.split(" ")
	for (y=0; y<arr.length; y++){
		word = arr[y].split("")
		for (i=0; i<word.length; i++){
			if (word[i] == "a"){
				newStr += "z"
			}
			if (word[i] == "b"){
				newStr += "y"
			}
			if (word[i] == "c"){
				newStr += "x"
			}
			if (word[i] == "d"){
				newStr += "w"
			}
			if (word[i] == "e"){
				newStr += "v"
			}
			if (word[i] == "f"){
				newStr += "u"
			}
			if (word[i] == "g"){
				newStr += "t"
			}
			if (word[i] == "h"){
				newStr += ("s")
			}
			if (word[i] == "i"){
				newStr += ("r")
			}
			if (word[i] == "j"){
				newStr += ("q")
			}
			if (word[i] == "k"){
				newStr += ("p")
			}
			if (word[i] == "l"){
				newStr += ("o")
			}
			if (word[i] == "m"){
				newStr += ("n")
			}
			if (word[i] == "n"){
				newStr += "m"
			}
			if (word[i] == "o"){
				newStr += "l"
			}
			if (word[i] == "p"){
				newStr += "k"
			}
			if (word[i] == "q"){
				newStr += "j"
			}
			if (word[i] == "r"){
				newStr += "i"
			}
			if (word[i] == "s"){
				newStr += "h"
			}
			if (word[i] == "t"){
				newStr += "g"
			}
			if (word[i] == "u"){
				newStr += "f"
			}
			if (word[i] == "v"){
				newStr += "e"
			}
			if (word[i] == "w"){
				newStr += "d"
			}
			if (word[i] == "x"){
				newStr += "c"
			}
			if (word[i] == "y"){
				newStr += "b"
			}
			if (word[i] == "z"){
				newStr += "a"
			}
			if (word[i] == " "){
				newStr += " "
			}
			if (word[i] == "!"){
				newStr += "!"
			}
			if (word[i] == "."){
				newStr += "."
			}
			if (word[i] == "?"){
				newStr += "?"
			}
		}
		newStr += " "
	}
	console.log(newStr)
}