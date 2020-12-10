describe("Login", () => {
	let userInfo = {
		name: ccianelli,
		password,
	}

	let nonUser = {
		name,
		password,
	}

	it("Shows an error if login is not valid", () => {
		cy.visit("/")
		cy.get("[name=username]")
			.clear()
			.type(userInfo.name)
		cy.get("[name=password]")
			.clear()
			.type("1234567")
		cy.get("[name=signIn]").click()
		cy.contains("Password does not match, please try again")
	})

	it("Shows an error if user does not exist", () => {
		cy.visit("/")
		cy.get("[name=username]")
			.clear()
			.type(nonUser.name)
		cy.get("[name=password]")
			.clear()
			.type(nonUser.password)
		cy.get("[name=signIn]").click()
		cy.contains(`${nonUser.name} does not exist, please register this user.`)
	})

	it("Should pass", () => {
		cy.visit("/")
		cy.get("[name=username]")
			.clear()
			.type(userInfo.name)
		cy.get("[name=password]")
			.clear()
			.type(userInfo.password)
		cy.get("[name=signIn]").click()
		cy.contains("Sign out")
	})
})
