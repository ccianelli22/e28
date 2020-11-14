const express = require("express")
const hash = require("../../../methods/hash")
const router = express.Router()

//REQUEST.BODY contains email address, password, and role..
// strip away the @fbi.sgov.gov which will be the user

router.post("/", async (request, response) => {
	let userInfo = { ...request.body }
	let userEmail = userInfo.email
	let mongoDB = request.app.locals.mongoDB
	userInfo.username = userInfo.email.toLowerCase().split("@")[0]
	const db = mongoDB.db("users")
	const collection = db.collection("registered")
	let result = await collection.findOne({ email: userEmail })
	if (result) {
		response.status(405).json({
			msg: `${userEmail} is already registered.\nIf you have forgotten your password.\nPlease click on reset password.`,
		})
	} else {
		try {
			let hashedPassword = await hash.hashPassword(userInfo.password)
			result = await collection.insertOne({
				email: userEmail,
				username: userInfo.username,
				password: hashedPassword,
				role: userInfo.role,
				created: new Date(),
			})
			if (result)
				response.status(200).json({
					msg: `${userEmail} was successfully registered.\n You can now use ${userInfo.username} to login.`,
				})
		} catch (e) {
			console.log(e)
			response.sendStatus(500)
		}
	}
})
module.exports = router
