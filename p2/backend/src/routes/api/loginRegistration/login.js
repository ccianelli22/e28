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
	const { user, password } = request.body
	const mongoDB = request.app.locals.mongoDB
	const db = mongoDB.db("users")
	const collection = db.collection("registered")
	const result = await collection.findOne({ username: user })
	if (!result) {
		response.status(404).json({
			message: `${user} does not exist, please register this user.`,
		})
	} else {
		const { _id, username, role, team } = result
		const isMatch = await hash.comparePassword(password, result.password)
		if (isMatch) {
			try {
				const token = await jwt.sign(
					{ _id, username, role, team },
					process.env.SECRETCOOKIE,
					{
						expiresIn: "10h",
					}
				)
				const splitToken = token.split(".")
				const payload = `${splitToken[0]}.${splitToken[1]}`
				const signature = `${splitToken[2]}`
				try {
					await collection.updateOne(
						{ _id },
						{ $set: { lastLogin: new Date() } }
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
				message: "Password does not match, please try again",
			})
		}
	}
})
module.exports = router
