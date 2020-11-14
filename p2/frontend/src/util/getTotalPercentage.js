export default (allScores) => {
	let totalAttempts = 0
	let totalCorrect = 0
	Object.entries(allScores).forEach((subject) => {
		let subjectStats = subject[1]
		totalCorrect += subjectStats.correct
		totalAttempts += subjectStats.attempts
	})
	let percentage = (totalCorrect / totalAttempts) * 100
	return Math.floor(percentage)
}
