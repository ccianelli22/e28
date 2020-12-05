const express = require("express")
const hash = require("../../../methods/hash")
const router = express.Router()

router.post("/", async (request, response) => {
	let userInfo = { ...request.body }
	let { username } = userInfo
	let mongoDB = request.app.locals.mongoDB
	const db = mongoDB.db("learnDB")
	const collection = db.collection("regUsers")
	let result = await collection.findOne({ username })
	if (result) {
		response.status(405).json({
			msg: `${username} is already registered.\nIf you have forgotten your password.\nPlease click on reset password.`,
		})
	} else {
		try {
			let hashedPassword = await hash.hashPassword(userInfo.password)
			result = await collection.insertOne({
				username: userInfo.username,
				password: hashedPassword,
				secretKey: userInfo.secretKey,
				created: new Date(),
			})
			if (result)
				response.status(200).json({
					msg: `${username} was successfully registered.`,
				})
		} catch (e) {
			console.log(e)
			response.sendStatus(500)
		}
	}
})
module.exports = router
