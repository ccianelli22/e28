let maxAttempts = 3
let triedAttempts = []
const computerNumer = Math.floor(Math.random() * 10) + 1
console.log(computerNumer)

let answer = document.getElementById("input-answer")
let rulesButton = document.getElementById("button-rules")
let submitButton = document.getElementById("button-submit")
let attemptsCont = document.getElementById("container-attempts")
let main = document.getElementById("container-game")

const toggleRules = () => {
	let rulesContainer = document.getElementById("container-rules").classList
	rulesContainer.toggle("invisible")
	rulesContainer.toggle("opacity-0")
	rulesContainer.toggle("opacity-100")
	let rulesButton = document.getElementById("button-rules")
	rulesButton.innerText = rulesButton.innerText === "Show Rules" ? "Hide Rules" : "Show Rules"
}

//provides response for first and second attempts
const hiLow = (num) => {
	let response = Number(num) > computerNumer ? "GREATER THAN" : "LESS THAN"
	return `YOUR NUMBER WAS ${response} MY SECRET NUMBER`
}

const submitAnswer = () => {
	let pTag = document.createElement("p")
	let gameOver
	pTag.className = "mt-4 text-3xl"
	pTag.id = "response"
	let spanTag = document.createElement("span")
	spanTag.className = "mx-3"
	if (triedAttempts.includes(answer.value)) {
		alert(`You have already chosen ${answer.value}. You must choose another!`)
	} else {
		if (Number(answer.value) === computerNumer) {
			pTag.className += " text-green-600"
			pTag.innerText = "CONGRATULATIONS YOU WIN! REFRESH TO TRY YOUR LUCK AGAIN"
			gameOver = true
		} else {
			pTag.className += " text-red-600"
			triedAttempts.length < 1 ? attemptsCont.classList.remove("invisible") : ""
			triedAttempts.push(answer.value)
			spanTag.innerText = answer.value
			attemptsCont.appendChild(spanTag)
			if (triedAttempts.length < maxAttempts) {
				pTag.innerText = hiLow(answer.value)
			} else {
				pTag.innerText = `YOU LOSE! ${computerNumer} WAS MY SECRET NUMBER! REFRESH TO TRY YOUR LUCK AGAIN`
				gameOver = true
			}
		}
		main.insertBefore(pTag, main.firstChild)
		if (gameOver) {
			submitButton.disabled = true
			submitButton.className += " cursor-not-allowed"
			answer.disabled = true
			answer.className += " cursor-not-allowed"
		}
	}
}

const answerInput = () => {
	let main = document.getElementById("container-game")
	let fChild = main.firstChild
	if (fChild.id === "response") {
		main.removeChild(fChild)
	}
}

answer.addEventListener("change", answerInput)

rulesButton.addEventListener("click", toggleRules)

submitButton.addEventListener("click", submitAnswer)
