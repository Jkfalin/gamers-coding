function numberGuess() {
	let randomNumber = Math.floor((Math.random() * 10) + 1);
	let yourGuess = document.getElementById("guess")

	if (yourGuess.value == randomNumber) {
		document.getElementById("prompt").innerHTML = "That is correct!"

	} else {
		document.getElementById("prompt").innerHTML = "Sorry that is wrong"
	}
	
}