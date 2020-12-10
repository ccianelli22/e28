describe("Math Page", () => {
	it("Should pass", () => {
		cy.visit("/math")
		cy.contains("Addition")
	})

	it("Shows an error if user inputs a non-numeric character in any math problem", () => {
		cy.visit("/math")
		cy.get("[e2e-test=Addition]").click()
		cy.get("[id=answer]")
			.clear()
			.type("abc")
		cy.get("[name=submit]").click()
		cy.contains("Your answer must be a valid number")
	})
})
