let maxAttempts = 3
let triedAttempts = []
const computerNumer = Math.floor(Math.random() * 10) + 1
console.log(computerNumer)

const toggleRules = () => {
  let rulesContainer = document.getElementById("container-rules").classList
  rulesContainer.toggle("invisible")
  rulesContainer.toggle("opacity-0")
  rulesContainer.toggle("opacity-100")
  let rulesButton = document.getElementById("button-rules")
  console.log(rulesButton.innerText)
  if (rulesButton.innerText === "Show Rules") {
    rulesButton.innerText = "Hide Rules"
  } else {
    rulesButton.innerText = "Show Rules"
  }
}


const submitAnswer = () => {
  let answer = document.getElementById("input-answer")
  let submitButton = document.getElementById("button-submit")
  let attemptsCont = document.getElementById("container-attempts")
  let main = document.getElementById("container-game")
  let pTag = document.createElement("p")
  let gameOver
  pTag.className = "mt-4 text-3xl"
  pTag.id = "response"
  let spanTag = document.createElement("span")
  spanTag.className = "mx-3"
  if (triedAttempts.includes(answer.value)) {
    alert(`You have already chosen ${answer.value}. You must choose another!`)
  } else {
    if (answer.value === computerNumer.toString()) {
      submitButton.disabled = true
      pTag.className += " text-green-600"
      pTag.innerText =
        "CONGRATULATIONS YOU WIN! REFRESH TO TRY YOUR LUCK AGAIN"
      gameOver = true
    } else {
      pTag.className += " text-red-600"
      if (triedAttempts.length < 1) {
        attemptsCont.classList.remove("invisible")
      }
      triedAttempts.push(answer.value.toString())
      spanTag.innerText = answer.value.toString()
      attemptsCont.appendChild(spanTag)
      if (triedAttempts.length < maxAttempts) {
        pTag.innerText = "INCORRECT TRY AGAIN"
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