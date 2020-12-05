const express = require("express")
const hash = require("../../../methods/hash")
const router = express.Router()

router.post("/", async (request, response) => {
	let userInfo = { ...request.body }
	let { username, secretKey } = userInfo
	let mongoDB = request.app.locals.mongoDB
	const db = mongoDB.db("learnDB")
	const collection = db.collection("regUsers")
	try {
		let result = await collection.deleteOne({ username })
		console.log(result)
	} catch (e) {
		console.log(e)
	}
})
module.exports = router
