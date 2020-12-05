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
		let result = await collection.findOne({ username })
		if (result) {
			if (secretKey === result.secretKey) {
				response.status(200).json({ msg: "Secret Key Matched" })
			} else {
				response.status(405).json({
					msg: "Secret Key did not match.",
				})
			}
		} else {
			response.status(405).json({ msg: "No user found" })
		}
	} catch (e) {
		console.log(e)
	}
})
module.exports = router
