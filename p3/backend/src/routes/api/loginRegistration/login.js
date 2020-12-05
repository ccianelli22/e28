const express = require("express")
const jwt = require("jsonwebtoken")
const hash = require("../../../methods/hash")
const SECRETCOOKIE = process.env.SECRETCOOKIE
const router = express.Router()

const cookieOptions = {
	httpOnly: true,
	expires: 0,
	sameSite: true,
	signed: true,
}
//USE JWT TO MAKE LOGIN TOKEN
router.post("/", async (request, response) => {
	const { username, password } = request.body
	const mongoDB = request.app.locals.mongoDB
	const db = mongoDB.db("learnDB")
	const collection = db.collection("regUsers")
	const result = await collection.findOne({ username })
	if (!result) {
		response.status(404).json({
			msg: `${username} does not exist, please register this user.`,
		})
	} else {
		const { _id, username } = result
		const isMatch = await hash.comparePassword(password, result.password)
		if (isMatch) {
			try {
				const token = await jwt.sign(
					{ _id, username },
					process.env.SECRETCOOKIE,
					{
						expiresIn: "10h",
					},
				)
				const splitToken = token.split(".")
				const payload = `${splitToken[0]}.${splitToken[1]}`
				const signature = `${splitToken[2]}`
				try {
					await collection.updateOne(
						{ _id },
						{ $set: { lastLogin: new Date() } },
					)
				} catch (e) {
					console.log(e)
				}

				response.status(200)
					.cookie("signature", signature, cookieOptions)
					.json({
						payload: `Bearer ${payload}`,
					})
			} catch (e) {
				console.log(e)
			}
		} else {
			response.status(404).json({
				msg: "Password does not match, please try again",
			})
		}
	}
})
module.exports = router
