export default (num1, num2, operation, userAnswer) => {
	let correct = 0
	let answer
	switch (operation) {
		case "addition":
			answer = num1 + num2
			break
		case "subtraction":
			answer = num1 - num2
			break
		case "multiplication":
			answer = num1 * num2
			break
		case "exponents":
			answer = num1 ** num2
			break
		case "division":
			answer = num1 / num2
			break
	}
	if (answer === Number(userAnswer)) {
		correct += 1
	}
	return { correct, answer }
}
