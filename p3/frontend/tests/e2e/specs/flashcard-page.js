describe("Flash Card Page", () => {
	let flashCard = {
		question: "What is VueJS",
		hint: "Website Builder",
		answer: "A JavaScript library to assist in the creation of websites",
	}
	it("Shows an error if all fields are not filled out", () => {
		cy.visit("/flashcards/createflashcards")
		cy.get("[name=question]")
			.clear()
			.type(flashCard.question)
		cy.get("[name=hint]")
			.clear()
			.type(flashCard.hint)
		cy.contains("cannot be blank.")
	})

	it("Shows an error if all hint field equals the answer field", () => {
		cy.visit("/flashcards/createflashcards")
		cy.get("[name=question]")
			.clear()
			.type(flashCard.question)
		cy.get("[name=hint]")
			.clear()
			.type(flashCard.hint)
		cy.get("[name=hint]")
			.clear()
			.type(flashCard.hint)
		cy.contains("The hint cannot be the answer!")
	})
})
