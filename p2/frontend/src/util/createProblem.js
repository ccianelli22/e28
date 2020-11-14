const getRandomNum = (num) => {
	return Math.floor(num * Math.random())
}

const getAddSubMulProblem = (difficulty) => {
	let num1,
		num2 = 0
	switch (difficulty) {
		case "easy":
			// using if statement ensures no negative numbers for easy subtraction
			num1 = getRandomNum(9)
			num2 = getRandomNum(9)
			if (num2 > num1) {
				let tempNum = num1
				num1 = num2
				num2 = tempNum
			}
			return [num1, num2]
		case "medium":
			num1 = getRandomNum(99)
			num2 = getRandomNum(99)
			return [num1, num2]
		case "hard":
			num1 = getRandomNum(999)
			num2 = getRandomNum(999)
			return [num1, num2]
	}
}

const getExpProblem = (difficulty) => {
	let num1,
		num2 = 0
	switch (difficulty) {
		case "easy":
			num1 = getRandomNum(9)
			num2 = getRandomNum(2)
			return [num1, num2]
		case "medium":
			num1 = getRandomNum(99)
			num2 = getRandomNum(3)
			return [num1, num2]
		case "hard":
			num1 = getRandomNum(999)
			num2 = getRandomNum(4)
			return [num1, num2]
	}
}

const getDivProblem = (difficulty) => {
	let num1,
		num2,
		num3 = 0
	let num4 = getRandomNum(1)
	switch (difficulty) {
		case "easy":
			num1 = getRandomNum(9)
			num2 = getRandomNum(9)
			num3 = num1 * num2
			break
		case "medium":
			num1 = getRandomNum(99)
			num2 = getRandomNum(99)
			num3 = num1 * num2
			break
		case "hard":
			num1 = getRandomNum(999)
			num2 = getRandomNum(999)
			num3 = num1 * num2
			break
	}
	if (num1 === 0) {
		num1 = 1
	}
	if (num2 === 0) {
		num2 = 1
	}
	return [num3, [num1, num2][num4]]
}

export default (operator, difficulty) => {
	switch (operator) {
		case "exponents":
			return getExpProblem(difficulty)
		case "division":
			return getDivProblem(difficulty)
		default:
			return getAddSubMulProblem(difficulty)
	}
}
