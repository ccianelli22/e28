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
		let hashedPassword = await hash.hashPassword(userInfo.password)
		try {
			await collection.updateOne(
				{ username },
				{ $set: { password: hashedPassword } },
			)
			response.status(200).json({
				msg: "Your password has been reset.",
			})
		} catch (e) {
			console.log(e)
		}
	}
})
module.exports = router
